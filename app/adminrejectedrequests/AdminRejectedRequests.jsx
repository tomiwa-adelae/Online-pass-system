"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useAdminRejectedPassesMutation } from "../slices/passApiSlice";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { getAdminRejectedPasses } from "../slices/passSlice";
import { InfoAlert } from "@/components/AlertMessage";

const AdminRejectedRequests = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [search, setSearch] = useState("");

	const { userInfo } = useSelector((state) => state.auth);

	const { rejectedAdminPasses } = useSelector((state) => state.pass);

	const [adminRejectedPasses, { isLoading }] =
		useAdminRejectedPassesMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}
		async function fetchPasses() {
			try {
				const res = await adminRejectedPasses();
				dispatch(getAdminRejectedPasses(res.data));
			} catch (error) {
				return;
			}
		}

		fetchPasses();
	}, [router, userInfo]);

	return (
		<div className="adminrejectedrequestspage">
			<Header />
			{isLoading && <Loader />}
			<div className="container">
				<div className="content">
					<div className="head">
						<h4>Rejected requests</h4>
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<div>
								<label htmlFor="search">Search</label>
								<input
									type="text"
									id="search"
									value={search}
									onChange={async (e) => {
										setSearch(e.target.value);

										if (search !== "") {
											try {
												const res =
													await adminRejectedPasses(
														search
													);
												dispatch(
													getAdminRejectedPasses(
														res.data
													)
												);
											} catch (error) {
												return;
											}
										}
									}}
								/>
								<CiSearch />
							</div>
						</form>
					</div>
					<div className="histories">
						{rejectedAdminPasses.map((pass) => (
							<History key={pass._id} pass={pass} admin={true} />
						))}

						{rejectedAdminPasses.length === 0 && (
							<InfoAlert message={"No request to display!"} />
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AdminRejectedRequests;
