"use client";

import CountDown from "@/components/CountDown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecentHistory from "@/components/RecentHistory";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {
	const router = useRouter();

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}
	}, [router, userInfo]);

	return (
		<div className="dashboardpage">
			<Header />
			<div className="container">
				<CountDown />
				<RecentHistory />
			</div>
			<Footer />
		</div>
	);
};

export default page;
