import Link from "next/link";
import { CiCircleList, CiUser } from "react-icons/ci";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="logo">
					<img
						src="./passify-logo.png"
						alt="Passify with the P as the logo"
					/>
				</div>

				<nav>
					<Link href="./auth">
						<CiCircleList />
						<span>History</span>
					</Link>
					<Link href="./auth">
						<CiUser />
						<span>Tomiwa Adelae</span>
					</Link>
					<Link href="./auth">
						<div className="btn btn-primary">Get Pass</div>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
