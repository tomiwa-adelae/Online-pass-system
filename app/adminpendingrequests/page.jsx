"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useAdminPendingPassesMutation } from "../slices/passApiSlice";
import { useEffect } from "react";
import { getAdminPendingPasses } from "../slices/passSlice";
import Loader from "@/components/Loader";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { userInfo } = useSelector((state) => state.auth);

	const { pendingAdminPasses } = useSelector((state) => state.pass);

	const [adminPendingPasses, { isLoading }] = useAdminPendingPassesMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}
		async function fetchPasses() {
			try {
				const res = await adminPendingPasses();
				dispatch(getAdminPendingPasses(res.data));
			} catch (error) {
				return;
			}
		}

		fetchPasses();
	}, [router, userInfo]);

	return (
		<div className="adminpendingrequestspage">
			<Header />
			{isLoading && <Loader />}
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
						{pendingAdminPasses.map((pass) => (
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
