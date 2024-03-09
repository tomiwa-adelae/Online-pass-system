"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecentHistory from "@/components/RecentHistory";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
	PiUserCircleThin,
	PiDotsThreeCircleVerticalLight,
} from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { resetPasses } from "../slices/passSlice";

const page = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const [user, setUser] = useState(null);
	const [dropDown, setDropDown] = useState(false);

	const { userInfo } = useSelector((state) => state.auth);

	const [logoutApiCall] = useLogoutMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}

		setUser(userInfo);
	}, [router, userInfo]);

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();

			dispatch(logout());
			// Clear previous passes
			dispatch(resetPasses());
			router.push("/auth");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="profilepage">
			<Header />
			<div className="container">
				<div className="user-head">
					<PiUserCircleThin className="user" />
					<h4>{user?.name}</h4>
					<div className="buttons">
						<Link href="/editprofile">
							<button className="btn btn-primary">
								Edit profile
							</button>
						</Link>
						<div className="menu">
							{dropDown ? (
								<AiOutlineCloseCircle
									onClick={() => setDropDown(!dropDown)}
									className="menu"
								/>
							) : (
								<PiDotsThreeCircleVerticalLight
									onClick={() => setDropDown(!dropDown)}
									className="menu"
								/>
							)}

							<div
								style={
									dropDown
										? { display: "block" }
										: { display: "none" }
								}
								className="dropdown"
							>
								<ul>
									<Link href="/changepassword">
										<li>
											<h5>Change your password</h5>
										</li>
									</Link>
									<li
										onClick={logoutHandler}
										className="logout"
									>
										<h5>Logout</h5>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="line"></div>
				<RecentHistory />
			</div>
			<Footer />
		</div>
	);
};

export default page;
