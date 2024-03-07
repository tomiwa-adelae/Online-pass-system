import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import { CiSearch } from "react-icons/ci";

const page = () => {
	return (
		<div className="adminpendingrequestspage">
			<Header />
			<div className="container">
				<div className="content">
					<div className="head">
						<h4>Pending requests</h4>
						<form>
							<div>
								<label htmlFor="search">Search</label>
								<input type="text" id="search" />
								<CiSearch />
							</div>
						</form>
					</div>
					<div className="histories">
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
			</div>
			<Footer />
		</div>
	);
};

export default page;
