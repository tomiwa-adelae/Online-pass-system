import React from "react";
import { Montagu_Slab } from "next/font/google";
import Link from "next/link";

const montaguSlab = Montagu_Slab({
	weight: ["400"],
	subsets: ["latin"],
});

const Home = () => {
	return (
		<div className="homepage">
			<div className="header">
				<div className="logo">
					<Link href="/">
						<img
							src="./passify-logo-white.png"
							alt="Passify with the P as the logo"
						/>
					</Link>
				</div>
				<Link href="./auth" className="btn btn-white">
					Join
				</Link>
			</div>
			<main>
				<div className="container">
					<h4>Vacation is here!</h4>
					<h1 className={montaguSlab.className}>Time to travel</h1>
					<p className="intro">
						Welcome to Passify, where hassle-free gate pass
						management is our top priority! Say goodbye to
						cumbersome processes and endless paperwork. Streamline
						your operations and enjoy a seamless experience with our
						innovative solutions. Discover the future of gate pass
						management today!
					</p>
					<Link href="./auth" className="btn btn-white">
						Join
					</Link>
				</div>
			</main>
		</div>
	);
};

export default Home;
