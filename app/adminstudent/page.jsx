import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import RecentHistory from "@/components/RecentHistory";
import { CiSearch } from "react-icons/ci";
import {
	PiDotsThreeCircleVerticalLight,
	PiUserCircleThin,
} from "react-icons/pi";

const page = () => {
	return (
		<div className="adminstudentpage">
			<Header />

			<div className="container">
				<div className="user-head">
					<PiUserCircleThin className="user" />
					<h4>Ojo Temidayo</h4>
					<h6>temidayokayode2004@gmail.com</h6>
					<h6>20N07001</h6>
					<h6>07038802255</h6>
					<h6>Department of Computer science</h6>
					<h6>Faculty of Natural science</h6>
				</div>
				<div className="line"></div>
				<div className="histories">
					<h4>History</h4>
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
					<History />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
