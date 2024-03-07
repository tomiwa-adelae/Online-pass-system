import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
	return (
		<div className="getexeatpage">
			<Header />
			<div className="container">
				<div className="content">
					<h4>Apply for Exeat Pass</h4>
					<p>
						Obtain your exeat pass with ease and create an
						unforgettable experience.
					</p>

					<form>
						<div>
							<label htmlFor="departureDate">
								Departure date
							</label>
							<input id="departureDate" type="text" />
						</div>
						<div>
							<label htmlFor="locationOfDestination">
								Location of destination
							</label>
							<input id="locationOfDestination" type="text" />
						</div>
						<div>
							<label htmlFor="phoneNumber">
								Your phone number
							</label>
							<input id="phoneNumber" type="text" />
						</div>
						<div>
							<label htmlFor="parentPhoneNumber">
								Parent phone number
							</label>
							<input id="parentPhoneNumber" type="text" />
						</div>
						<div>
							<label htmlFor="reason">
								Reason for leaving school
							</label>
							<input id="reason" type="text" />
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
