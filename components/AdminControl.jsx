import { CiCircleList } from "react-icons/ci";
import { IoCheckmarkDone } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";

const AdminControls = () => {
	return (
		<div className="admincontrol-section">
			<div className="boxes">
				<div className="box">
					<CiCircleList />
					<button className="btn btn-grey-outline">
						All pass requests
					</button>
					<p>Check out all the requests made by various students</p>
				</div>
				<div className="box">
					<IoCheckmarkDone />
					<button className="btn btn-grey-outline">
						Approved requests
					</button>
					<p>
						Check out all the approved requests by the Student
						Affairs Office
					</p>
				</div>
				<div className="box">
					<AiOutlineCloseCircle />
					<button className="btn btn-grey-outline">
						Rejected requests
					</button>
					<p>
						Check out all the rejected requests by the Student
						Affairs Office
					</p>
				</div>
				<div className="box">
					<LiaHourglassStartSolid />
					<button className="btn btn-grey-outline">
						Pending requests
					</button>
					<p>
						Check out all the pending requests made by various
						students
					</p>
				</div>
				<div className="box">
					<IoIosPeople />
					<button className="btn btn-grey-outline">
						All students
					</button>
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
