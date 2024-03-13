"use client";
import { getUser } from "@/app/slices/authSlice";
import { useAdminUserPassesMutation } from "@/app/slices/passApiSlice";
import { getAdminUserPasses } from "@/app/slices/passSlice";
import { useGetAdminUserMutation } from "@/app/slices/userApiSlice";
import { InfoAlert } from "@/components/AlertMessage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import Loader from "@/components/Loader";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiCircleList, CiUser } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

const AdminStudent = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const router = useRouter();

	const [user, setUser] = useState(null);

	const { userInfo, adminUser } = useSelector((state) => state.auth);

	const { userAdminPasses } = useSelector((state) => state.pass);

	const [getAdminUser, { isLoading }] = useGetAdminUserMutation();

	const [adminUserPasses] = useAdminUserPassesMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}

		setUser(userInfo);

		async function fetchUser() {
			try {
				const res = await getAdminUser(id);
				const response = await adminUserPasses(id);

				dispatch(getUser(res.data));
				dispatch(getAdminUserPasses(response.data));
			} catch (error) {
				return;
			}
		}

		fetchUser();
	}, [userInfo, router]);

	return (
		<div className="adminstudentpage">
			<Header />
			{isLoading && <Loader />}

			<div className="container">
				<div className="user-head">
					<PiUserCircleThin className="user" />
					<h4>{adminUser?.name}</h4>
					<h6>{adminUser?.email}</h6>
					<h6>{adminUser?.matricNumber}</h6>
					<h6>
						{adminUser && `Department of ${adminUser?.department}`}
					</h6>
					<h6>{adminUser && `Faculty of  ${adminUser?.faculty}`}</h6>
				</div>
				<div className="line"></div>
				<div className="histories">
					<h4>History</h4>

					{userAdminPasses.map((pass) => (
						<History key={pass._id} pass={pass} admin={true} />
					))}

					{userAdminPasses.length === 0 && (
						<InfoAlert
							message={"Student hasn't made any request!"}
						/>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AdminStudent;
