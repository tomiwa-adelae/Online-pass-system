"use client";
import { DangerAlert, SuccessAlert } from "@/components/AlertMessage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUpdatePasswordMutation } from "../slices/userApiSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
	const router = useRouter();

	const [showCurrentPassword, setShowCurrentPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showError, setShowError] = useState(null);
	const [showSuccess, setShowSuccess] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);
	const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}
	}, [router, userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		setShowError(null);

		try {
			await updatePassword({
				currentPassword,
				newPassword,
				confirmPassword,
			}).unwrap();

			setShowSuccess("Password successfully updated!");
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	return (
		<div className="changepasswordpage">
			<Header />
			{isLoading && <Loader />}
			<div className="container">
				<div className="content">
					<h4>Change your password</h4>

					{showError && <DangerAlert message={showError} />}
					{showSuccess && <SuccessAlert message={showSuccess} />}

					<form onSubmit={submitHandler}>
						<div className="password">
							<label htmlFor="currentPassword">
								Current password
							</label>
							<input
								type={showCurrentPassword ? "text" : "password"}
								id="currentPassword"
								value={currentPassword}
								onChange={(e) =>
									setCurrentPassword(e.target.value)
								}
							/>
							<span
								onClick={() =>
									setShowCurrentPassword(!showCurrentPassword)
								}
							>
								{showCurrentPassword ? (
									<FaEyeSlash />
								) : (
									<FaEye />
								)}
							</span>
						</div>
						<div className="password">
							<label htmlFor="newPassword">New password</label>
							<input
								type={showNewPassword ? "text" : "password"}
								id="newPassword"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
							<span
								onClick={() =>
									setShowNewPassword(!showNewPassword)
								}
							>
								{showNewPassword ? <FaEyeSlash /> : <FaEye />}
							</span>
						</div>
						<div className="password">
							<label htmlFor="confirmPassword">
								Confirm password
							</label>
							<input
								type={showConfirmPassword ? "text" : "password"}
								id="confirmPassword"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							/>
							<span
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
							>
								{showConfirmPassword ? (
									<FaEyeSlash />
								) : (
									<FaEye />
								)}
							</span>
						</div>
						<div>
							{showSuccess ? (
								<Link href="/profile">
									<button className="btn btn-primary">
										Continue
									</button>
								</Link>
							) : (
								<button className="btn btn-primary">
									Save changes
								</button>
							)}
							<Link href="/editprofile">
								<button className="btn btn-grey-outline">
									Cancel
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ChangePassword;
