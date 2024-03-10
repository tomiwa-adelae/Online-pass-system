import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LiaHourglassStartSolid } from "react-icons/lia";
import Link from "next/link";

const History = ({ pass, admin }) => {
	return (
		<div className="history">
			<div className="details">
				<ul>
					{admin && (
						<li>
							<h6>
								<strong>Name:</strong>
								{pass.name}
							</h6>
						</li>
					)}
					<li>
						<h6>
							<strong>Location:</strong>
							{pass.location}
						</h6>
					</li>
					<li>
						<h6>
							<strong>Departure date:</strong>
							{pass.departureDate}
						</h6>
					</li>
					<li>
						<h6>
							<strong>Status:</strong>
							{pass.status}
						</h6>
					</li>
				</ul>
				<div>
					<Link
						href={
							admin
								? `/adminexeatdetails/${pass._id}`
								: `/exeatdetails/${pass._id}`
						}
					>
						<button className="btn btn-primary">
							View details
						</button>
					</Link>
				</div>
			</div>
			<div className="status">
				{pass.status === "Pending" ? (
					<LiaHourglassStartSolid />
				) : pass.status === "Approved" ? (
					<FiCheckCircle />
				) : pass.status === "Rejected" ? (
					<AiOutlineCloseCircle />
				) : null}
			</div>
		</div>
	);
};

export default History;
