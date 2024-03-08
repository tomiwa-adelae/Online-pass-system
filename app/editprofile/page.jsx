"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
	useUpdateUserMutation,
	useUploadImageMutation,
} from "../slices/userApiSlice";
import { DangerAlert, SuccessAlert } from "@/components/AlertMessage";
import { setCredentials } from "../slices/authSlice";
import Loader from "@/components/Loader";
import axios from "axios";

const page = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [matricNumber, setMatricNumber] = useState("");
	const [department, setDepartment] = useState("");
	const [faculty, setFaculty] = useState("");
	const [address, setAddress] = useState("");
	const [parentPhoneNumber, setParentPhoneNumber] = useState("");
	const [showError, setShowError] = useState(null);
	const [showSuccess, setShowSuccess] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);
	const [updateUser, { isLoading }] = useUpdateUserMutation();

	useEffect(() => {
		if (userInfo) {
			setName(userInfo.name);
			setEmail(userInfo.email);
			setMatricNumber(userInfo.matricNumber);
			setDepartment(userInfo.department);
			setFaculty(userInfo.faculty);
			setAddress(userInfo.address);
			setParentPhoneNumber(userInfo.parentPhoneNumber);
		} else {
			return router.push("/auth");
		}
	}, [router, userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		setShowError(null);

		try {
			const res = await updateUser({
				name,
				email,
				matricNumber,
				department,
				faculty,
				address,
				parentPhoneNumber,
			}).unwrap();
			dispatch(setCredentials({ ...res }));
			// router.push("/dashboard");

			setShowSuccess("Profile successfully updated!");
		} catch (error) {
			setShowError(error.data.message);
		}
	};

	return (
		<div className="editprofilepage">
			<Header />
			{isLoading && <Loader />}
			<div className="container">
				<div className="content">
					<h4>Profile settings</h4>

					{showError && <DangerAlert message={showError} />}
					{showSuccess && <SuccessAlert message={showSuccess} />}

					<form onSubmit={submitHandler}>
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
								id="email"
								type="email"
								value={email}
								readOnly={true}
							/>
						</div>
						<div>
							<label htmlFor="matricNumber">Matric number</label>
							<input
								id="matricNumber"
								type="text"
								value={matricNumber}
								readOnly={true}
							/>
						</div>
						<div>
							<label htmlFor="department">Department</label>
							<select
								name="department"
								id="department"
								value={department}
								onChange={(e) => setDepartment(e.target.value)}
							>
								<option value="">Select department</option>
								<option value="Accounting & Finance">
									Accounting & Finance
								</option>
								<option value="Computer science">
									Computer science
								</option>
								<option value="Physics">Physics</option>
								<option value="English">English</option>
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
								<option value="Natural science">
									Natural science
								</option>
								<option value="Management science">
									Management science
								</option>
								<option value="Law">Law</option>
								<option value="Social science">
									Social science
								</option>
							</select>
						</div>
						<div>
							<label htmlFor="homeAddress">Home address</label>
							<input
								id="homeAddress"
								type="text"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="parentPhoneNumber">
								Parent phone number
							</label>
							<input
								id="parentPhoneNumber"
								type="text"
								value={parentPhoneNumber}
								onChange={(e) =>
									setParentPhoneNumber(e.target.value)
								}
							/>
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

							<Link href="/changepassword">
								<button className="btn btn-grey-outline">
									Change password
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

export default page;
