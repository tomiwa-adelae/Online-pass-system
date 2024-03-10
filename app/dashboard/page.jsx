"use client";

import AdminControls from "@/components/AdminControl";
import CountDown from "@/components/CountDown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecentHistory from "@/components/RecentHistory";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
	const router = useRouter();

	const [user, setUser] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}

		setUser(userInfo);
	}, [router, userInfo]);

	return (
		<div className="dashboardpage">
			<Header />
			<div className="container">
				<CountDown admin={user?.isAdmin ? user?.isAdmin : null} />
				{user?.isAdmin ? <AdminControls /> : <RecentHistory />}
			</div>
			<Footer />
		</div>
	);
};

export default page;
