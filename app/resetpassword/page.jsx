"use client";

import Link from "next/link";
import React, { useState } from "react";

const page = () => {
	const [showUpdatePasswordForm, setshowUpdatePasswordForm] = useState(false);

	return (
		<div className="resetpasswordpage">
			<div
				className={
					showUpdatePasswordForm
						? "page-container active"
						: "page-container"
				}
				id="page-container"
			>
				<div className="form-container update-password">
					<form onSubmit={(e) => e.preventDefault()}>
						<Link href="/">
							<img
								src="./logo-primary.png"
								alt="Passify with the logo in a purple color"
								className="logo"
							/>
						</Link>
						<h4>Update your password</h4>
						<p>
							Enter the code we just sent to{" "}
							<strong>adelaetomiwa6@gmail.com</strong>
						</p>
						<div className="form">
							<div>
								<label htmlFor="code">Code</label>
								<input id="code" type="text" />
							</div>
							<div>
								<button
									onClick={() =>
										setshowUpdatePasswordForm(
											!showUpdatePasswordForm
										)
									}
									className="btn btn-primary"
								>
									Continue
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="form-container reset-password">
					<form onSubmit={(e) => e.preventDefault()}>
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
							<div>
								<label htmlFor="email">Email address</label>
								<input id="email" type="email" />
							</div>
							<div>
								<button
									onClick={() =>
										setshowUpdatePasswordForm(
											!showUpdatePasswordForm
										)
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
