"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const page = () => {
	const [showCurrentPassword, setShowCurrentPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<div className="changepasswordpage">
			<Header />
			<div className="container">
				<div className="content">
					<h4>Change your password</h4>

					<form>
						<div className="password">
							<label htmlFor="currentPassword">
								Current password
							</label>
							<input
								type={showCurrentPassword ? "text" : "password"}
								id="currentPassword"
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
							<button className="btn btn-primary">
								Save changes
							</button>
							<button className="btn btn-grey-outline">
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
