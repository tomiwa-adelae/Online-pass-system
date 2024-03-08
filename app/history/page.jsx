"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useAllPassesMutation } from "../slices/passApiSlice";
import { getPasses } from "../slices/passSlice";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { InfoAlert } from "@/components/AlertMessage";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { passes } = useSelector((state) => state.pass);

	const { userInfo } = useSelector((state) => state.auth);

	const [allPasses, { isLoading }] = useAllPassesMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}
		async function fetchPasses() {
			try {
				const res = await allPasses();
				dispatch(getPasses(res.data.slice(0, 3)));
			} catch (error) {
				return;
			}
		}

		fetchPasses();
	}, [router, userInfo]);
	return (
		<div className="historypage">
			<Header />
			{isLoading && <Loader />}
			<div className="container">
				<div className="content">
					<div className="head">
						<h4>History</h4>
						<form>
							<div>
								<label htmlFor="search">Search</label>
								<input type="text" id="search" />
								<CiSearch />
							</div>
						</form>
					</div>
					<div className="histories">
						{passes.map((pass) => (
							<History key={pass._id} pass={pass} />
						))}

						{passes.length === 0 && (
							<InfoAlert
								message={
									"You have no requests. Make a request today!"
								}
							/>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
