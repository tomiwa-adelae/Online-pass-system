"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useGetAdminUsersMutation } from "../slices/userApiSlice";
import { useEffect } from "react";
import { getUsers } from "../slices/authSlice";
import Loader from "@/components/Loader";
import Student from "@/components/Student";

const page = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { userInfo, adminUsers } = useSelector((state) => state.auth);

	const [getAdminUsers, { isLoading }] = useGetAdminUsersMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}
		async function fetchUsers() {
			try {
				const res = await getAdminUsers();
				dispatch(getUsers(res.data));
			} catch (error) {
				return;
			}
		}

		fetchUsers();
	}, [router, userInfo]);

	return (
		<div className="adminallstudentspage">
			<Header />
			{isLoading && <Loader />}
			<div className="container">
				<div className="content">
					<div className="head">
						<h4>All students</h4>
						<form>
							<div>
								<label htmlFor="search">Search</label>
								<input type="text" id="search" />
								<CiSearch />
							</div>
						</form>
					</div>
					<div className="histories">
						{adminUsers.map((user) => (
							<Student key={user._id} user={user} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
