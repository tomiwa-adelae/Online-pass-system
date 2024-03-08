import { CiCircleList } from "react-icons/ci";
import { IoCheckmarkDone } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import Link from "next/link";

const AdminControls = () => {
	return (
		<div className="admincontrol-section">
			<div className="boxes">
				<div className="box">
					<CiCircleList />
					<Link href="/adminallrequests">
						<button className="btn btn-grey-outline">
							All pass requests
						</button>
					</Link>
					<p>Check out all the requests made by various students</p>
				</div>
				<div className="box">
					<IoCheckmarkDone />
					<Link href="/adminapprovedrequests">
						<button className="btn btn-grey-outline">
							Approved requests
						</button>
					</Link>
					<p>
						Check out all the approved requests by the Student
						Affairs Office
					</p>
				</div>
				<div className="box">
					<AiOutlineCloseCircle />
					<Link href="/adminrejectedrequests">
						<button className="btn btn-grey-outline">
							Rejected requests
						</button>
					</Link>
					<p>
						Check out all the rejected requests by the Student
						Affairs Office
					</p>
				</div>
				<div className="box">
					<LiaHourglassStartSolid />
					<Link href="/adminpendingrequests">
						<button className="btn btn-grey-outline">
							Pending requests
						</button>
					</Link>
					<p>
						Check out all the pending requests made by various
						students
					</p>
				</div>
				<div className="box">
					<IoIosPeople />
					<Link href="/adminallstudents">
						<button className="btn btn-grey-outline">
							All students
						</button>
					</Link>
					<p>
						Check out all the students and the history of their
						requests
					</p>
				</div>
			</div>
		</div>
	);
};

export default AdminControls;
