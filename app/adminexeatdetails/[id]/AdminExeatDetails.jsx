"use client";
import {
	useAdminApprovePassMutation,
	useAdminRejectPassMutation,
	usePassDetailsMutation,
} from "@/app/slices/passApiSlice";
import { getPassById } from "@/app/slices/passSlice";
import { DangerAlert, SuccessAlert } from "@/components/AlertMessage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiCircleList, CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const AdminExeatDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const router = useRouter();

	const [user, setUser] = useState(null);
	const [showError, setShowError] = useState(null);
	const [showSuccess, setShowSuccess] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const { pass } = useSelector((state) => state.pass);

	const [passDetails, { isLoading }] = usePassDetailsMutation();

	const [adminApprovePass, { isLoading: approvePassLoading }] =
		useAdminApprovePassMutation();
	const [adminRejectPass, { isLoading: rejectPassLoading }] =
		useAdminRejectPassMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}

		setUser(userInfo);

		async function getPassDetails() {
			try {
				const res = await passDetails(id);
				dispatch(getPassById(res));
			} catch (error) {
				console.log(error);
			}
		}
		getPassDetails();
	}, [userInfo, router]);

	const approveHandler = async () => {
		try {
			const res = await adminApprovePass(id);

			dispatch(getPassById(res));

			setShowSuccess("Request successfully approved!");
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	const rejectHandler = async () => {
		try {
			const res = await adminRejectPass(id);

			dispatch(getPassById(res));

			setShowSuccess("Request successfully rejected!");
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	return (
		<div className="adminexeatdetailspage">
			{isLoading && <Loader />}
			{approvePassLoading && <Loader />}
			{rejectPassLoading && <Loader />}
			<Header />
			<div className="container">
				<div className="content">
					<div className="details">
						<h4>{pass?._id}</h4>
						<ul>
							<li>
								<h6>
									<strong>Name:</strong> {pass?.name}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Email address:</strong>
									{pass?.email}
								</h6>
							</li>

							<li>
								<h6>
									<strong>
										Matriculation/Admission number:
									</strong>
									{pass?.matricNumber}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Department:</strong>{" "}
									{pass?.department}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Faculty:</strong>
									{pass?.faculty}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Student's phone number:</strong>
									{pass?.phoneNumber}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Parent's phone number:</strong>
									{pass?.parentPhoneNumber}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Departure date:</strong>{" "}
									{pass?.departureDate}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Location:</strong>
									{pass?.location}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Hostel:</strong>
									{pass?.hostel}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Reason:</strong>
									{pass?.reason}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Status:</strong> {pass?.status}
								</h6>
							</li>
						</ul>

						<div>
							{pass?.status === "Pending" ? (
								<div>
									<button
										onClick={rejectHandler}
										className="btn btn-grey-outline"
									>
										Reject request
									</button>
									<button
										onClick={approveHandler}
										className="btn btn-primary"
									>
										Approve request
									</button>
								</div>
							) : null}
						</div>
					</div>
					<div className="status">
						{pass?.status === "Pending" ? (
							<img
								src="../../pending.jpg"
								alt="Pending request"
							/>
						) : pass?.status === "Approved" ? (
							<img
								src="../../approved.png"
								alt="Approved request"
							/>
						) : pass?.status === "Rejected" ? (
							<img
								src="../../rejected.png"
								alt="Rejected request"
							/>
						) : null}
					</div>
				</div>
				{showError && <DangerAlert message={showError} />}
				{showSuccess && <SuccessAlert message={showSuccess} />}
			</div>
			<Footer />
		</div>
	);
};

export default AdminExeatDetails;
