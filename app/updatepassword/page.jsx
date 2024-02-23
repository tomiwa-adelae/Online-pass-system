"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const page = () => {
	const [showSuccessfully, setshowSuccessfully] = useState(false);

	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<div className="updatepasswordpage">
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
								<button
									onClick={() =>
										setshowSuccessfully(!showSuccessfully)
									}
									className="btn btn-primary"
								>
									Continue
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="form-container update-password">
					<form onSubmit={(e) => e.preventDefault()}>
						<Link href="/">
							<img
								src="./logo-primary.png"
								alt="Passify with the logo in a purple color"
								className="logo"
							/>
						</Link>
						<h4>Enter new password</h4>
						<p>adelaetomiwa6@gmail.com</p>
						<div className="form">
							<div className="password">
								<label htmlFor="newPassword">
									New password
								</label>
								<input
									type={showNewPassword ? "text" : "password"}
									id="password"
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
									id="password"
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
									onClick={() =>
										setshowSuccessfully(!showSuccessfully)
									}
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
