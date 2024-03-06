import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<img
					src="./passify-logo.png"
					alt="Passify with the P as the logo"
				/>
			</div>
			<Link href="./auth" className="btn btn-white">
				Join
			</Link>
		</header>
	);
};

export default Header;
