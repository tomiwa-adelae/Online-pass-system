"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useUpdateNewPasswordMutation } from "../slices/userApiSlice";
import { DangerAlert, SuccessAlert } from "@/components/AlertMessage";
import Loader from "@/components/Loader";

const page = () => {
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const code = searchParams.get("code");
	const email = searchParams.get("email");

	const [showSuccessfully, setshowSuccessfully] = useState(false);

	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [showError, setShowError] = useState(null);
	const [showSuccess, setShowSuccess] = useState(null);

	const [updateNewPassword, { isLoading }] = useUpdateNewPasswordMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		setShowError(null);
		setShowSuccess(null);

		try {
			await updateNewPassword({
				id,
				code,
				newPassword,
				confirmPassword,
			}).unwrap();

			setShowSuccess("Password successfully updated!");

			setshowSuccessfully(!showSuccessfully);
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	return (
		<div className="updatepasswordpage">
			{isLoading && <Loader />}
			<div
				className={
					showSuccessfully
						? "page-container active"
						: "page-container"
				}
				id="page-container"
			>
				<div className="form-container successfully">
					<form onSubmit={(e) => e.preventDefault()}>
						<Link href="/">
							<img
								src="./logo-primary.png"
								alt="Passify with the logo in a purple color"
								className="logo"
							/>
						</Link>
						<h4>Successfully</h4>
						<p>
							Your password has been successfully updated! Login
							with your new password.
						</p>
						<div className="form">
							<div>
								<Link href="/auth">
									<button className="btn btn-primary">
										Continue
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
				<div className="form-container update-password">
					<form onSubmit={submitHandler}>
						<Link href="/">
							<img
								src="./logo-primary.png"
								alt="Passify with the logo in a purple color"
								className="logo"
							/>
						</Link>
						<h4>Enter new password</h4>
						<p>{email}</p>
						<div className="form">
							{showError && <DangerAlert message={showError} />}
							{showSuccess && (
								<SuccessAlert message={showSuccess} />
							)}
							<div className="password">
								<label htmlFor="newPassword">
									New password
								</label>
								<input
									type={showNewPassword ? "text" : "password"}
									id="newPassword"
									value={newPassword}
									onChange={(e) =>
										setNewPassword(e.target.value)
									}
								/>
								<span
									onClick={() =>
										setShowNewPassword(!showNewPassword)
									}
								>
									{showNewPassword ? (
										<FaEyeSlash />
									) : (
										<FaEye />
									)}
								</span>
							</div>
							<div className="password">
								<label htmlFor="confirmPassword">
									Confirm password
								</label>
								<input
									type={
										showConfirmPassword
											? "text"
											: "password"
									}
									id="confirmPassword"
									value={confirmPassword}
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
								/>
								<span
									onClick={() =>
										setShowConfirmPassword(
											!showConfirmPassword
										)
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
								<button
									// onClick={() =>
									// 	setshowSuccessfully(!showSuccessfully)
									// }
									className="btn btn-primary"
								>
									Continue
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="toggle-container">
					<div className="toggle">
						<div className="toggle-panel toggle-left">
							<Link href="/">
								<img
									src="./passify-logo-white.png"
									alt="Passify with the logo in a purple color"
									className="logo"
								/>
							</Link>
						</div>
						<div className="toggle-panel toggle-right">
							<Link href="/">
								<img
									src="./passify-logo-white.png"
									alt="Passify with the logo in a purple color"
									className="logo"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
