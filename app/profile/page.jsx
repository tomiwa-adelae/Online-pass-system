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
import { useSelector } from "react-redux";

const page = () => {
	const router = useRouter();

	const [user, setUser] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}

		setUser(userInfo);
	}, [router, userInfo]);
	return (
		<div className="profilepage">
			<Header />
			<div className="container">
				<div className="user-head">
					<PiUserCircleThin className="user" />
					<h4>{user?.name}</h4>
					<div>
						<Link href="/editprofile">
							<button className="btn btn-primary">
								Edit profile
							</button>
						</Link>
						<PiDotsThreeCircleVerticalLight className="menu" />
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
