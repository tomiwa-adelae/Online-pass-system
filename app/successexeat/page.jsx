import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const page = () => {
	return (
		<div className="successexeatpage">
			<Header />
			<div className="container">
				<div className="content">
					<h4>
						<FiCheckCircle /> <span>Successfully!</span>
					</h4>
					<p>
						You've successfully completed the exeat pass request
						process. Your request is been processed and we’ll notify
						you once it’s been processed.
					</p>
					<div>
						<button className="btn btn-grey-outline">
							View details
						</button>
						<button className="btn btn-primary">Continue</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
