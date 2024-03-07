import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecentHistory from "@/components/RecentHistory";
import { CiMenuKebab } from "react-icons/ci";
import {
	PiUserCircleThin,
	PiDotsThreeCircleVerticalLight,
} from "react-icons/pi";

const page = () => {
	return (
		<div className="profilepage">
			<Header />
			<div className="container">
				<div className="user-head">
					<PiUserCircleThin className="user" />
					<h4>Ojo Temidayo</h4>
					<div>
						<button className="btn btn-primary">
							Edit profile
						</button>
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
