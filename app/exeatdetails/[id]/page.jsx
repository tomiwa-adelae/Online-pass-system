"use client";
import { usePassDetailsMutation } from "@/app/slices/passApiSlice";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiCircleList, CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getPassById } from "@/app/slices/passSlice";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";

const page = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const router = useRouter();

	const [user, setUser] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const { pass } = useSelector((state) => state.pass);

	const [passDetails, { isLoading }] = usePassDetailsMutation();

	useEffect(() => {
		if (!userInfo) {
			return router.push("/auth");
		}

		setUser(userInfo);

		async function getPassDetails() {
			try {
				const res = await passDetails(id);
				dispatch(getPassById(res));
			} catch (error) {
				console.log(error);
			}
		}
		getPassDetails();
	}, [userInfo, router]);

	return (
		<div className="exeatdetailspage">
			{isLoading && <Loader />}
			<header>
				<div className="container">
					<div className="logo">
						<Link href="/">
							<img
								src="../../passify-logo.png"
								alt="Passify with the P as the logo"
							/>
						</Link>
					</div>

					<nav>
						<Link href="../../history">
							<CiCircleList />
							<span>History</span>
						</Link>
						<Link href="../../profile">
							<CiUser />
							<span>{user?.name}</span>
						</Link>
						<Link href="../../getexeat">
							<div className="btn btn-primary">Get Pass</div>
						</Link>
					</nav>
				</div>
			</header>
			<div className="container">
				<div className="content">
					<div className="details">
						<h4>{pass?._id}</h4>
						<ul>
							<li>
								<h6>
									<strong>Name:</strong> {pass?.name}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Email address:</strong>
									{pass?.email}
								</h6>
							</li>

							<li>
								<h6>
									<strong>
										Matriculation/Admission number:
									</strong>
									{pass?.matricNumber}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Department:</strong>{" "}
									{pass?.department}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Faculty:</strong>
									{pass?.faculty}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Student's phone number:</strong>
									{pass?.phoneNumber}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Parent's phone number:</strong>
									{pass?.parentPhoneNumber}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Departure date:</strong>{" "}
									{pass?.departureDate}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Location:</strong>
									{pass?.location}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Reason:</strong>
									{pass?.reason}
								</h6>
							</li>
							<li>
								<h6>
									<strong>Status:</strong> {pass?.status}
								</h6>
							</li>
						</ul>
						{pass?.status === "Pending" ? null : (
							<div>
								<button className="btn btn-grey-outline">
									Download as PDF
								</button>
								<button className="btn btn-primary">
									Download as Image
								</button>
							</div>
						)}
					</div>
					<div className="status">
						{pass?.status === "Pending" ? (
							<img
								src="../../pending.jpg"
								alt="Pending request"
							/>
						) : pass?.status === "Approved" ? (
							<img
								src="../../approved.png"
								alt="Approved request"
							/>
						) : pass?.status === "Rejected" ? (
							<img
								src="../../rejected.png"
								alt="Rejected request"
							/>
						) : null}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
