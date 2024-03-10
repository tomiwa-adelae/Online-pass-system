"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiCircleList, CiUser } from "react-icons/ci";
import { FiCheckCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Header from "@/components/Header";

const page = () => {
	const { id } = useParams();
	const router = useRouter();
	const [user, setUser] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}

		setUser(userInfo);
	}, [userInfo, router]);

	return (
		<div className="successexeatpage">
			<Header />
			{/* <header>
				<div className="container">
					<div className="logo">
						<Link href="/">
							<img
								src="../../passify-logo.png"
								alt="Passify with the P as the logo"
							/>
						</Link>
					</div>

					<nav>
						<Link href="../../history">
							<CiCircleList />
							<span>History</span>
						</Link>
						<Link href="../../profile">
							<CiUser />
							<span>{user?.name}</span>
						</Link>
						<Link href="../../getexeat">
							<div className="btn btn-primary">Get Pass</div>
						</Link>
					</nav>
				</div>
			</header> */}
			<div className="container">
				<div className="content">
					<h4>
						<FiCheckCircle /> <span>Successfully!</span>
					</h4>
					<p>
						You've successfully completed the exeat pass request
						process. Your request is been processed and we’ll notify
						you once it’s been processed.
					</p>
					<div>
						<Link href={`../../exeatdetails/${id}`}>
							<button className="btn btn-grey-outline">
								View details
							</button>
						</Link>
						<Link href="/dashboard">
							<button className="btn btn-primary">
								Continue
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
