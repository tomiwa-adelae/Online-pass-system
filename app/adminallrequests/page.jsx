"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useAdminAllPassesMutation } from "../slices/passApiSlice";
import { getAdminPasses } from "../slices/passSlice";
import Loader from "@/components/Loader";
import { InfoAlert } from "@/components/AlertMessage";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [search, setSearch] = useState("");

	const { userInfo } = useSelector((state) => state.auth);

	const { adminPasses } = useSelector((state) => state.pass);

	const [adminAllPasses, { isLoading }] = useAdminAllPassesMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}
		async function fetchPasses() {
			try {
				const res = await adminAllPasses();
				dispatch(getAdminPasses(res.data));
			} catch (error) {
				return;
			}
		}

		fetchPasses();
	}, [router, userInfo]);

	return (
		<div className="adminallrequestspage">
			<Header />
			{isLoading && <Loader />}
			<div className="container">
				<div className="content">
					<div className="head">
						<h4>All requests</h4>
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
													await adminAllPasses(
														search
													);
												dispatch(
													getAdminPasses(res.data)
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
						{adminPasses.map((pass) => (
							<History key={pass._id} pass={pass} admin={true} />
						))}

						{adminPasses.length === 0 && (
							<InfoAlert message={"No request to display!"} />
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
