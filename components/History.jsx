import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const History = () => {
	return (
		<div className="history">
			<div className="details">
				<ul>
					<li>
						<h6>
							<strong>Location:</strong>Ibadan, Oyo State
						</h6>
					</li>
					<li>
						<h6>
							<strong>Departure date:</strong>2nd March, 2024
						</h6>
					</li>
					<li>
						<h6>
							<strong>Status:</strong>Approved by SAO
						</h6>
					</li>
				</ul>
				<div className="btn btn-primary">View details</div>
			</div>
			<div className="status">
				<FiCheckCircle />
				{/* <AiOutlineCloseCircle /> */}
			</div>
		</div>
	);
};

export default History;
