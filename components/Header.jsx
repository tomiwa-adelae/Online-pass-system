"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCircleList, CiUser } from "react-icons/ci";
import { RiDashboardLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

const Header = () => {
	const { id } = useParams();

	const [user, setUser] = useState(null);
	const [openNav, setOpenNav] = useState(false);

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			return setUser(userInfo);
		}

		const keyDownHandler = (event) => {
			if (openNav && event.key === "Escape") {
				event.preventDefault();

				// 👇️ your logic here
				setOpenNav(!openNav);
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		// 👇️ clean up event listener
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, [userInfo, openNav]);

	return (
		<header>
			<div className="container">
				<div className="logo">
					<Link href="/">
						<img
							src={
								id
									? "../../passify-logo.png"
									: "./passify-logo.png"
							}
							alt="Passify with the P as the logo"
						/>
					</Link>
				</div>

				<nav className={openNav ? "links open" : "links"}>
					<Link
						onClick={() => setOpenNav(!openNav)}
						href={id ? "../../dashboard" : "./dashboard"}
					>
						<RiDashboardLine />
						<span>Dashboard</span>
					</Link>
					{!user?.isAdmin && (
						<Link
							onClick={() => setOpenNav(!openNav)}
							href={id ? "../../history" : "./history"}
						>
							<CiCircleList />
							<span>History</span>
						</Link>
					)}
					{user?.isAdmin ? (
						<>
							<Link
								className="admin-links"
								onClick={() => setOpenNav(!openNav)}
								href={
									id
										? "../../adminallrequests"
										: "./adminallrequests"
								}
							>
								<CiCircleList />
								<span>All requests</span>
							</Link>
							<Link
								className="admin-links"
								onClick={() => setOpenNav(!openNav)}
								href={
									id
										? "../../adminapprovedrequests"
										: "./adminapprovedrequests"
								}
							>
								<CiCircleList />
								<span>Approved requests</span>
							</Link>
							<Link
								className="admin-links"
								onClick={() => setOpenNav(!openNav)}
								href={
									id
										? "../../adminrejectedrequests"
										: "./adminrejectedrequests"
								}
							>
								<CiCircleList />
								<span>Rejected requests</span>
							</Link>
							<Link
								className="admin-links"
								onClick={() => setOpenNav(!openNav)}
								href={
									id
										? "../../adminpendingrequests"
										: "./adminpendingrequests"
								}
							>
								<CiCircleList />
								<span>Pending requests</span>
							</Link>
							<Link
								className="admin-links"
								onClick={() => setOpenNav(!openNav)}
								href={
									id
										? "../../adminallstudents"
										: "./adminallstudents"
								}
							>
								<IoIosPeople />
								<span>All students</span>
							</Link>
						</>
					) : null}

					<Link
						onClick={() => setOpenNav(!openNav)}
						href={id ? "../../profile" : "./profile"}
					>
						<CiUser />
						<span>{user?.name}</span>
					</Link>
					{user?.isAdmin ? (
						<div className="btn btn-primary admin">Admin</div>
					) : (
						<Link
							onClick={() => setOpenNav(!openNav)}
							className="get-exeat"
							href={id ? "../../getexeat" : "./getexeat"}
						>
							<div className="btn btn-primary">Get Pass</div>
						</Link>
					)}
				</nav>
				<div onClick={() => setOpenNav(!openNav)} className="burger">
					{openNav ? (
						<AiOutlineClose className="burger-icon" />
					) : (
						<CiMenuFries className="burger-icon" />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
