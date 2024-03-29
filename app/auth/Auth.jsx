"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setCredentials } from "../slices/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation, useRegisterMutation } from "../slices/userApiSlice";
import { DangerAlert, SuccessAlert } from "@/components/AlertMessage";
import Loader from "../../components/Loader";

const Auth = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const [showRegisterForm, setshowRegisterForm] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [matricNumber, setMatricNumber] = useState("");
	const [department, setDepartment] = useState("");
	const [faculty, setFaculty] = useState("");
	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(null);
	const [showSuccess, setShowSuccess] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const [login, { isLoading }] = useLoginMutation();
	const [register, { isLoading: loadingRegister }] = useRegisterMutation();

	useEffect(() => {
		if (userInfo) {
			return router.push("/dashboard");
		}
	}, [router, userInfo]);

	const submitLoginHandler = async (e) => {
		e.preventDefault();

		setShowError(null);

		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));

			setShowSuccess("Successfully logged!");

			router.push("/dashboard");
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	const submitRegisterHandler = async (e) => {
		e.preventDefault();

		setShowError(null);

		try {
			const res = await register({
				name,
				email,
				matricNumber,
				department,
				faculty,
				password,
			}).unwrap();
			dispatch(setCredentials({ ...res }));

			setShowSuccess("Successfully registered!");

			router.push("/dashboard");
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	return (
		<div className="loginpage">
			{isLoading && <Loader />}
			{loadingRegister && <Loader />}

			<div
				className={
					showRegisterForm
						? "page-container active"
						: "page-container"
				}
				id="page-container"
			>
				<div className="form-container sign-up">
					<form onSubmit={submitRegisterHandler}>
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
								onClick={() => {
									setshowRegisterForm(!showRegisterForm);
									setShowError(null);
									setName("");
									setEmail("");
									setMatricNumber("");
									setDepartment("");
									setFaculty("");
									setPassword("");
								}}
							>
								Sign in
							</strong>
						</p>
						<div className="form">
							{showError && <DangerAlert message={showError} />}
							{showSuccess && (
								<SuccessAlert message={showSuccess} />
							)}
							<div>
								<label htmlFor="name">Name</label>
								<input
									id="name"
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="email">Email address</label>
								<input
									type="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="matriculationNumber">
									Matriculation/Admission number
								</label>
								<input
									id="matriculationNumber"
									type="text"
									value={matricNumber}
									onChange={(e) =>
										setMatricNumber(e.target.value)
									}
								/>
							</div>
							<div>
								<label htmlFor="department">Department</label>
								<select
									name="department"
									id="department"
									value={department}
									onChange={(e) =>
										setDepartment(e.target.value)
									}
								>
									<option value="">Select department</option>
									<option value="Accounting & Finance">
										Accounting & Finance
									</option>
									<option value="Agricultural economics">
										Agricultural economics
									</option>
									<option value="Architecture">
										Architecture
									</option>
									<option value="Banking & Finance">
										Banking & Finance
									</option>
									<option value="Biochemistry">
										Biochemistry
									</option>
									<option value="Business Administration">
										Business Administration
									</option>
									<option value="Civil Engineering">
										Civil Engineering
									</option>
									<option value="Computer Engineering">
										Computer Engineering
									</option>
									<option value="Computer Science">
										Computer Science
									</option>
									<option value="Computer Science(ICT Option)">
										Computer Science(ICT Option)
									</option>
									<option value="Crop & Animal Science">
										Crop & Animal Science
									</option>
									<option value="Economics">Economics</option>
									<option value="Electrical Engineering">
										Electrical Engineering
									</option>
									<option value="English">English</option>
									<option value="Entrepreneurship studies">
										Entrepreneurship studies
									</option>
									<option value="Environmental Health Science">
										Environmental Health Science
									</option>
									<option value="Estate Management">
										Estate Management
									</option>
									<option value="Geo-Informatics">
										Geo-Informatics
									</option>
									<option value="Geology">Geology</option>
									<option value="History">History</option>
									<option value="Industrial Chemistry">
										Industrial Chemistry
									</option>
									<option value="Industrial Relations & Personnel Management">
										Industrial Relations & Personnel
										Management
									</option>
									<option value="International Studies">
										International Studies
									</option>
									<option value="Law">Law</option>
									<option value="Library & Information Science">
										Library & Information Science
									</option>
									<option value="Mass Communication">
										Mass Communication
									</option>
									<option value="Mathematics">
										Mathematics
									</option>
									<option value="Mechanical Engineering">
										Mechanical Engineering
									</option>
									<option value="Medical Lab Science">
										Medical Lab Science
									</option>
									<option value="Microbiology">
										Microbiology
									</option>
									<option value="Nursing">Nursing</option>
									<option value="Peace Studies & Conflict Resolution">
										Peace Studies & Conflict Resolution
									</option>
									<option value="Performing Arts & Musics">
										Performing Arts & Musics
									</option>
									<option value="Physics">Physics</option>
									<option value="Political Science">
										Political Science
									</option>
									<option value="Radiography & Radiation Science">
										Radiography & Radiation Science
									</option>
									<option value="Radiography & Radiation Science">
										Radiography & Radiation Science
									</option>
									<option value="Religious Studies">
										Religious Studies
									</option>
									<option value="Statistics">
										Statistics
									</option>
									<option value="Surveying">Surveying</option>
								</select>
							</div>
							<div>
								<label htmlFor="faculty">Faculty</label>
								<select
									name="faculty"
									id="faculty"
									value={faculty}
									onChange={(e) => setFaculty(e.target.value)}
								>
									<option value="">Select faculty</option>
									<option value="Agriculture">
										Agriculture
									</option>
									<option value="Basic Medical Science">
										Basic Medical Science
									</option>
									<option value="Communication & Media Studies">
										Communication & Media Studies
									</option>
									<option value="Education">Education</option>
									<option value="Environmental Science">
										Environmental Science
									</option>
									<option value="Humanities">
										Humanities
									</option>
									<option value="Law">Law</option>
									<option value="Management Science">
										Management Science
									</option>
									<option value="Natural Science">
										Natural Science
									</option>
									<option value="Peace Studies & Conflict Resolution">
										Peace Studies & Conflict Resolution
									</option>
									<option value="Social Science">
										Social Science
									</option>
								</select>
							</div>
							<div className="password">
								<label htmlFor="password">Password</label>
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
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
					<form onSubmit={submitLoginHandler}>
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
								onClick={() => {
									setshowRegisterForm(!showRegisterForm);
									setShowError(null);
									setName("");
									setEmail("");
									setMatricNumber("");
									setDepartment("");
									setFaculty("");
									setPassword("");
								}}
							>
								Create an account
							</strong>
						</p>
						<div className="form">
							{showError && <DangerAlert message={showError} />}
							<div>
								<label htmlFor="login-email">
									Email address
								</label>
								<input
									id="login-email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="password">
								<label htmlFor="login-password">Password</label>
								<input
									type={showPassword ? "text" : "password"}
									id="login-password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
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
								onClick={() => {
									setshowRegisterForm(!showRegisterForm);
									setShowError(null);
									setName("");
									setEmail("");
									setMatricNumber("");
									setDepartment("");
									setFaculty("");
									setPassword("");
								}}
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
								onClick={() => {
									setshowRegisterForm(!showRegisterForm);
									setShowError(null);
									setName("");
									setEmail("");
									setMatricNumber("");
									setDepartment("");
									setFaculty("");
									setPassword("");
								}}
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

export default Auth;
