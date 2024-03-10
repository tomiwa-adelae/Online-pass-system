"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useAdminRejectedPassesMutation } from "../slices/passApiSlice";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import { getAdminRejectedPasses } from "../slices/passSlice";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();

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
						<form>
							<div>
								<label htmlFor="search">Search</label>
								<input type="text" id="search" />
								<CiSearch />
							</div>
						</form>
					</div>
					<div className="histories">
						{rejectedAdminPasses.map((pass) => (
							<History key={pass._id} pass={pass} admin={true} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
