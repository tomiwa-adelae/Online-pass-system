"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCircleList, CiUser } from "react-icons/ci";
import { RiDashboardLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

const Header = () => {
	const { id } = useParams();

	const [user, setUser] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			return setUser(userInfo);
		}
	}, [userInfo]);

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

				<nav>
					<Link href={id ? "../../dashboard" : "./dashboard"}>
						<RiDashboardLine />
						<span>Dashboard</span>
					</Link>
					{!user?.isAdmin && (
						<Link href={id ? "../../history" : "./history"}>
							<CiCircleList />
							<span>History</span>
						</Link>
					)}
					<Link href={id ? "../../profile" : "./profile"}>
						<CiUser />
						<span>{user?.name}</span>
					</Link>
					{user?.isAdmin ? (
						<div className="btn btn-primary admin">Admin</div>
					) : (
						<Link href={id ? "../../getexeat" : "./getexeat"}>
							<div className="btn btn-primary">Get Pass</div>
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
