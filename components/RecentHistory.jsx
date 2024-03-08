"use client";
import { useEffect, useState } from "react";
import History from "./History";
import { useDispatch, useSelector } from "react-redux";
import { useAllPassesMutation } from "@/app/slices/passApiSlice";
import { getPasses } from "@/app/slices/passSlice";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { InfoAlert } from "./AlertMessage";

const RecentHistory = () => {
	const dispatch = useDispatch();

	// const [recentPasses, setRecentPasses] = useState([]);

	const { passes } = useSelector((state) => state.pass);

	const [allPasses, { isLoading }] = useAllPassesMutation();

	useEffect(() => {
		async function fetchPasses() {
			try {
				const res = await allPasses();
				dispatch(getPasses(res.data.slice(0, 3)));
			} catch (error) {
				return;
			}
		}

		fetchPasses();
	}, []);

	return (
		<div className="recent-history">
			{isLoading && <Loader />}

			<h4>History</h4>
			{passes.map((pass) => (
				<History key={pass._id} pass={pass} />
			))}

			{passes.length === 0 && (
				<InfoAlert
					message={"You have no requests. Make a request today!"}
				/>
			)}
		</div>
	);
};

export default RecentHistory;
