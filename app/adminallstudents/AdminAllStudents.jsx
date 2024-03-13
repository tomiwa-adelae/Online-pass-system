"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useGetAdminUsersMutation } from "../slices/userApiSlice";
import { useEffect, useState } from "react";
import { getUsers } from "../slices/authSlice";
import Loader from "@/components/Loader";
import Student from "@/components/Student";
import { InfoAlert } from "@/components/AlertMessage";

const AdminAllStudents = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [search, setSearch] = useState("");

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
												const res = await getAdminUsers(
													search
												);
												dispatch(getUsers(res.data));
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
						{adminUsers.map((user) => (
							<Student key={user._id} user={user} />
						))}

						{adminUsers.length === 0 && (
							<InfoAlert message={"No students to display!"} />
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AdminAllStudents;
