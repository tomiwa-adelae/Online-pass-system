import AdminControls from "@/components/AdminControl";
import CountDown from "@/components/CountDown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import RecentHistory from "@/components/RecentHistory";
import React from "react";

const page = () => {
	return (
		<div className="admindashboardpage">
			<Header />
			<div className="container">
				<CountDown />
				<AdminControls />
				{/* <RecentHistory /> */}
			</div>
			<Footer />
		</div>
	);
};

export default page;
