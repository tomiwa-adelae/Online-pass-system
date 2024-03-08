"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNewPassMutation } from "../slices/passApiSlice";
import { useRouter } from "next/navigation";
import { createPass } from "../slices/passSlice";
import Loader from "@/components/Loader";
import { DangerAlert } from "@/components/AlertMessage";

const page = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const [departureDate, setDeparturedate] = useState("");
	const [location, setLocation] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [parentPhoneNumber, setParentPhoneNumber] = useState("");
	const [reason, setReason] = useState("");
	const [hostel, setHostel] = useState("");
	const [showError, setShowError] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const [newPass, { isLoading }] = useNewPassMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}
	}, [router, userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();
		setShowError(null);

		try {
			const res = await newPass({
				departureDate,
				location,
				phoneNumber,
				parentPhoneNumber,
				reason,
				hostel,
			}).unwrap();
			dispatch(createPass({ ...res }));
			router.push(`./successexeat/${res._id}`);
		} catch (error) {
			setShowError(error.data.message);
		}
	};
	return (
		<div className="getexeatpage">
			{isLoading && <Loader />}
			<Header />
			<div className="container">
				<div className="content">
					<h4>Apply for Exeat Pass</h4>
					<p>
						Obtain your exeat pass with ease and create an
						unforgettable experience.
					</p>

					{showError && <DangerAlert message={showError} />}
					<form onSubmit={submitHandler}>
						<div>
							<label htmlFor="departureDate">
								Departure date
							</label>
							<input
								id="departureDate"
								type="date"
								value={departureDate}
								onChange={(e) =>
									setDeparturedate(e.target.value)
								}
							/>
						</div>
						<div>
							<label htmlFor="location">Location</label>
							<input
								id="location"
								type="text"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="phoneNumber">
								Your phone number
							</label>
							<input
								onWheel={(e) => e.target.blur()}
								id="phoneNumber"
								type="number"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="parentPhoneNumber">
								Parent phone number
							</label>
							<input
								onWheel={(e) => e.target.blur()}
								id="parentPhoneNumber"
								type="number"
								value={parentPhoneNumber}
								onChange={(e) =>
									setParentPhoneNumber(e.target.value)
								}
							/>
						</div>
						<div>
							<label htmlFor="reason">
								Reason for leaving school
							</label>
							<input
								id="reason"
								type="text"
								value={reason}
								onChange={(e) => setReason(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="hostel">Hostel</label>
							<select
								name="hostel"
								id="hostel"
								value={hostel}
								onChange={(e) => setHostel(e.target.value)}
							>
								<option value="">Select hostel</option>
								<option value="JAH">JAH</option>
								<option value="IB">IB</option>
								<option value="Lagos Hostel">
									Lagos Hostel
								</option>
								<option value="UFH">UFH</option>
								<option value="DLW">DLW</option>
								<option value="UMH">UMH</option>
								<option value="Goshen Inn">Goshen Inn</option>
							</select>
						</div>
						<div>
							<button className="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
