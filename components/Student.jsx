import Link from "next/link";
import { CiUser } from "react-icons/ci";

const Student = ({ user }) => {
	return (
		<div className="student">
			<div className="details">
				<ul>
					<li>
						<h6>
							<strong>Name:</strong>
							{user.name}
						</h6>
					</li>
					<li>
						<h6>
							<strong>Email address:</strong>
							{user.address}
						</h6>
					</li>
					<li>
						<h6>
							<strong>Matriculation/Admission number:</strong>
							{user.matricNumber}
						</h6>
					</li>
					<div>
						<Link href={`/adminstudent/${user._id}`}>
							<button className="btn btn-primary">
								View details
							</button>
						</Link>
					</div>
				</ul>
			</div>
			<div className="icon">
				<CiUser />
			</div>
		</div>
	);
};

export default Student;
