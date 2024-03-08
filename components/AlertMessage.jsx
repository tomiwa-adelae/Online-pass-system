import { IoCloseCircleSharp } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { RiErrorWarningFill } from "react-icons/ri";

const DangerAlert = ({ message }) => {
	return (
		<section className="alert alert-danger">
			<IoCloseCircleSharp />{" "}
			<span>
				<h5>Something went wrong!</h5>
				<p>{message}</p>
			</span>
		</section>
	);
};

const SuccessAlert = ({ message }) => {
	return (
		<section className="alert alert-success">
			<FiCheckCircle />{" "}
			<span>
				<h5>Congratulations!</h5>
				<p>{message}</p>
			</span>
		</section>
	);
};

const WarningAlert = ({ message }) => {
	return (
		<section className="alert alert-warning">
			<RiErrorWarningFill />{" "}
			<span>
				<h5>Warning!</h5>
				<p>{message}</p>
			</span>
		</section>
	);
};

const InfoAlert = ({ message }) => {
	return (
		<section className="alert alert-info">
			<RiErrorWarningFill />{" "}
			<span>
				<h5>Did you know?</h5>
				<p>{message}</p>
			</span>
		</section>
	);
};

export { DangerAlert, SuccessAlert, WarningAlert, InfoAlert };
