import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { PiUserCircleThin } from "react-icons/pi";

const page = () => {
	return (
		<div className="admineditprofilepage">
			<Header />
			<div className="container">
				<div className="content">
					<h4>Profile settings</h4>

					<div className="profile-picture">
						<PiUserCircleThin className="user" />
						<button className="btn btn-primary">
							Change image
						</button>
					</div>

					<form>
						<div>
							<label htmlFor="name">Name</label>
							<input id="name" type="text" />
						</div>
						<div>
							<label htmlFor="email">Email address</label>
							<input
								id="email"
								type="email"
								defaultValue={"Tomiwa Adelae"}
							/>
						</div>

						<div>
							<label htmlFor="phoneNumber">Phone number</label>
							<input id="phoneNumber" type="text" />
						</div>
						<div>
							<button className="btn btn-primary">
								Save changes
							</button>
							<button className="btn btn-grey-outline">
								Change password
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
