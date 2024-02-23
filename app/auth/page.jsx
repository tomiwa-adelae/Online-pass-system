"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const page = () => {
	const [showRegisterForm, setshowRegisterForm] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="loginpage">
			<div
				className={
					showRegisterForm
						? "page-container active"
						: "page-container"
				}
				id="page-container"
			>
				<div className="form-container sign-up">
					<form>
						<Link href="/">
							<img
								src="./logo-primary.png"
								alt="Passify with the logo in a purple color"
								className="logo"
							/>
						</Link>
						<h4>Create an account</h4>
						<p>
							Already have an account?{" "}
							<strong
								onClick={() =>
									setshowRegisterForm(!showRegisterForm)
								}
							>
								Sign in
							</strong>
						</p>
						<div className="form">
							<div>
								<label htmlFor="name">Name</label>
								<input id="name" type="text" />
							</div>
							<div>
								<label htmlFor="email">Email address</label>
								<input type="email" id="email" />
							</div>
							<div>
								<label htmlFor="matriculationNumber">
									Matriculation/Admission number
								</label>
								<input id="matriculationNumber" type="text" />
							</div>
							<div>
								<label htmlFor="department">Department</label>
								<input type="text" id="department" />
							</div>
							<div>
								<label htmlFor="faculty">Faculty</label>
								<input id="faculty" type="text" />
							</div>
							<div className="password">
								<label htmlFor="password">Password</label>
								<input
									type={showPassword ? "text" : "password"}
									id="password"
								/>
								<span
									onClick={() =>
										setShowPassword(!showPassword)
									}
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</span>
							</div>
							<div>
								<button className="btn btn-primary">
									Continue
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="form-container sign-in">
					<form>
						<Link href="/">
							<img
								src="./logo-primary.png"
								alt="Passify with the logo in a purple color"
								className="logo"
							/>
						</Link>
						<h4>Sign in</h4>
						<p>
							New user?{" "}
							<strong
								onClick={() =>
									setshowRegisterForm(!showRegisterForm)
								}
							>
								Create an account
							</strong>
						</p>
						<div className="form">
							<div>
								<label htmlFor="email">Email address</label>
								<input id="email" type="email" />
							</div>
							<div className="password">
								<label htmlFor="password">Password</label>
								<input
									type={showPassword ? "text" : "password"}
									id="password"
								/>
								<span
									onClick={() =>
										setShowPassword(!showPassword)
									}
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</span>
							</div>
							<div>
								<button className="btn btn-primary">
									Continue
								</button>
							</div>
						</div>
						<div className="line"></div>
						<div>
							<Link href="/resetpassword">
								Reset your password
							</Link>
						</div>
					</form>
				</div>
				<div className="toggle-container">
					<div className="toggle">
						<div className="toggle-panel toggle-left">
							<h3>Welcome Back!</h3>
							<p className="intro">
								Already have an account? Sign in now
							</p>
							<button
								onClick={() =>
									setshowRegisterForm(!showRegisterForm)
								}
								className="btn btn-white-outline hidden"
								id="login"
							>
								Sign In
							</button>
						</div>
						<div className="toggle-panel toggle-right">
							<h3>Hello, Friend!</h3>
							<p className="intro">
								Are you a new user to Passify? Create an account
								now
							</p>
							<button
								onClick={() =>
									setshowRegisterForm(!showRegisterForm)
								}
								className="btn btn-white-outline hidden"
								id="register"
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
