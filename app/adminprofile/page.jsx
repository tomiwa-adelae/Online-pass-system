import AdminControls from "@/components/AdminControl";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
	PiUserCircleThin,
	PiDotsThreeCircleVerticalLight,
} from "react-icons/pi";

const page = () => {
	return (
		<div className="adminprofilepage">
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
				<AdminControls />
			</div>
			<Footer />
		</div>
	);
};

export default page;
