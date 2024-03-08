"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCircleList, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () => {
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
							src="./passify-logo.png"
							alt="Passify with the P as the logo"
						/>
					</Link>
				</div>

				<nav>
					<Link href="./history">
						<CiCircleList />
						<span>History</span>
					</Link>
					<Link href="./profile">
						<CiUser />
						<span>{user?.name}</span>
					</Link>
					<Link href="./getexeat">
						<div className="btn btn-primary">Get Pass</div>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
