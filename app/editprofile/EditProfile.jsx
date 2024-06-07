"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../slices/userApiSlice";
import { DangerAlert, SuccessAlert } from "@/components/AlertMessage";
import { setCredentials } from "../slices/authSlice";
import Loader from "@/components/Loader";

const EditProfile = () => {
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
			setName(userInfo.name || "");
			setEmail(userInfo.email || "");
			setMatricNumber(userInfo.matricNumber || "");
			setDepartment(userInfo.department || "");
			setFaculty(userInfo.faculty || "");
			setAddress(userInfo.address || "");
			setParentPhoneNumber(userInfo.parentPhoneNumber || "");
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
						{!userInfo.isAdmin && (
							<>
								<div>
									<label htmlFor="email">Email address</label>
									<input
										id="email"
										type="email"
										value={email}
										readOnly={true}
										disabled
									/>
								</div>
								<div>
									<label htmlFor="matricNumber">
										Matric number
									</label>
									<input
										id="matricNumber"
										type="text"
										value={matricNumber}
										readOnly={true}
									/>
								</div>
								<div>
									<label htmlFor="department">
										Department
									</label>
									<select
										name="department"
										id="department"
										value={department}
										onChange={(e) =>
											setDepartment(e.target.value)
										}
									>
										<option value="">
											Select department
										</option>
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
										<option value="Economics">
											Economics
										</option>
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
										<option value="Surveying">
											Surveying
										</option>
									</select>
								</div>
								<div>
									<label htmlFor="faculty">Faculty</label>
									<select
										name="faculty"
										id="faculty"
										value={faculty}
										onChange={(e) =>
											setFaculty(e.target.value)
										}
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
										<option value="Education">
											Education
										</option>
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
								<div>
									<label htmlFor="homeAddress">
										Home address
									</label>
									<input
										id="homeAddress"
										type="text"
										value={address}
										onChange={(e) =>
											setAddress(e.target.value)
										}
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
							</>
						)}

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

export default EditProfile;
