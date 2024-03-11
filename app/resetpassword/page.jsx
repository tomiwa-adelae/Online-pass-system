"use client";

import { DangerAlert, SuccessAlert } from "@/components/AlertMessage";
import Link from "next/link";
import React, { useState } from "react";
import {
	useResetPasswordMutation,
	useVerifyCodeMutation,
} from "../slices/userApiSlice";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

const page = () => {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");
	const [showError, setShowError] = useState(null);
	const [showSuccess, setShowSuccess] = useState(null);

	const [showUpdatePasswordForm, setshowUpdatePasswordForm] = useState(false);

	const [resetPassword, { isLoading }] = useResetPasswordMutation();
	const [verifyCode, { isLoading: verifyCodeLoading }] =
		useVerifyCodeMutation();

	const submitResetPasswordHandler = async (e) => {
		e.preventDefault();

		setShowError(null);
		setShowSuccess(null);

		try {
			await resetPassword({ email }).unwrap();

			setshowUpdatePasswordForm(!showUpdatePasswordForm);
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	const submitUpdatePasswordHandler = async (e) => {
		e.preventDefault();

		setShowError(null);
		setShowSuccess(null);

		try {
			const { id } = await verifyCode({ email, code }).unwrap();
			setShowSuccess("Verification successful! Create new password");

			router.push(`/updatepassword?id=${id}&code=${code}&email=${email}`);
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	return (
		<div className="resetpasswordpage">
			{isLoading && <Loader />}
			{verifyCodeLoading && <Loader />}
			<div
				className={
					showUpdatePasswordForm
						? "page-container active"
						: "page-container"
				}
				id="page-container"
			>
				<div className="form-container update-password">
					<form onSubmit={submitUpdatePasswordHandler}>
						<Link href="/">
							<img
								src="./logo-primary.png"
								alt="Passify with the logo in a purple color"
								className="logo"
							/>
						</Link>
						<h4>Verifiy code</h4>
						<p>
							Enter the code we just sent to{" "}
							<strong>{email}</strong>
						</p>
						<div className="form">
							{showError && <DangerAlert message={showError} />}
							{showSuccess && (
								<SuccessAlert message={showSuccess} />
							)}
							<div>
								<label htmlFor="code">Code</label>
								<input
									id="code"
									type="text"
									value={code}
									onChange={(e) => setCode(e.target.value)}
								/>
							</div>
							<div>
								<button className="btn btn-primary">
									Continue
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="form-container reset-password">
					<form onSubmit={submitResetPasswordHandler}>
						<Link href="/">
							<img
								src="./logo-primary.png"
								alt="Passify with the logo in a purple color"
								className="logo"
							/>
						</Link>
						<h4>Reset password</h4>
						<p>Enter your email address</p>
						<div className="form">
							{showError && <DangerAlert message={showError} />}
							{showSuccess && (
								<SuccessAlert message={showSuccess} />
							)}
							<div>
								<label htmlFor="email">Email address</label>
								<input
									id="email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<button className="btn btn-primary">
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
