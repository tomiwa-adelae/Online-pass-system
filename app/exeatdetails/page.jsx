import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
	return (
		<div className="exeatdetailspage">
			<Header />
			<div className="container">
				<div className="content">
					<div className="details">
						<h4>6eteeuekdnduq26262jsjksj</h4>
						<ul>
							<li>
								<h6>
									<strong>Name:</strong> Ojo Temidayo
								</h6>
							</li>
							<li>
								<h6>
									<strong>Email address:</strong>
									temidayokayode@gmail.com
								</h6>
							</li>

							<li>
								<h6>
									<strong>
										Matriculation/Admission number:
									</strong>
									20N07001
								</h6>
							</li>
							<li>
								<h6>
									<strong>Department:</strong> Performing arts
									& musics
								</h6>
							</li>
							<li>
								<h6>
									<strong>Faculty:</strong> Management science
								</h6>
							</li>
							<li>
								<h6>
									<strong>Student's phone number:</strong>{" "}
									09077889966
								</h6>
							</li>
							<li>
								<h6>
									<strong>Parent's phone number:</strong>{" "}
									07022554477
								</h6>
							</li>
							<li>
								<h6>
									<strong>Departure date:</strong> 3rd
									February, 2024
								</h6>
							</li>
							<li>
								<h6>
									<strong>Location of departure:</strong>{" "}
									Lagos mainland, Lagos state
								</h6>
							</li>
							<li>
								<h6>
									<strong>Status:</strong> Approved by SAO
								</h6>
							</li>
						</ul>
						<div>
							<button className="btn btn-grey-outline">
								Download as PDF
							</button>
							<button className="btn btn-primary">
								Download as Image
							</button>
						</div>
					</div>
					<div className="status">
						<img src="./pending.jpg" alt="Pending request" />
						{/* <img src="./approved.png" alt="Approved request" /> */}
						{/* <img src="./rejected.png" alt="Rejected request" /> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
