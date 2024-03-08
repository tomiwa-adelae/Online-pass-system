import Link from "next/link";
import { GiPartyPopper } from "react-icons/gi";

const CountDown = ({ admin }) => {
	return (
		<div className="count-down-section">
			<div className="intro">
				<GiPartyPopper />
				<h4>Holiday countdown begins</h4>
				<GiPartyPopper />
			</div>
			<div className="count-down">
				<div className="days">
					14
					<span>Days</span>
				</div>
				<div>
					17
					<span>Hours</span>
				</div>
				<div>
					10
					<span>Minutes</span>
				</div>
				<div>
					05
					<span>Seconds</span>
				</div>
			</div>
			<div className="get-pass">
				<Link href={admin ? "/adminpendingrequests" : "/getexeat"}>
					<div className="btn btn-primary-outline">
						{admin ? "Check out pending request" : "Get exeat pass"}
					</div>
				</Link>
			</div>
			<div className="line"></div>
		</div>
	);
};

export default CountDown;