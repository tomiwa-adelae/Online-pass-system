"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import { InfoAlert } from "./AlertMessage";

const CountDown = ({ admin }) => {
	const launchDate = new Date("July 26, 2024, 12:00:00").getTime();
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		var updateTime = setInterval(() => {
			const now = new Date().getTime();

			const difference = launchDate - now;

			var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
			var newHours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var newMinutes = Math.floor(
				(difference % (1000 * 60 * 60)) / (1000 * 60)
			);
			var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

			setDays(newDays);
			setHours(newHours);
			setMinutes(newMinutes);
			setSeconds(newSeconds);

			if (newDays < 10) {
				setDays("0" + newDays);
			}

			if (newHours < 10) {
				setHours("0" + newHours);
			}

			if (newMinutes < 10) {
				setMinutes("0" + newMinutes);
			}

			if (newSeconds < 10) {
				setSeconds("0" + newSeconds);
			}

			if (difference <= 0) {
				clearInterval(updateTime);
				setMessage(
					"The day we've been waiting for is finally here! Happy holiday everyone!"
				);
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			}
		});

		return () => {
			clearInterval(updateTime);
		};
	}, [launchDate]);

	return (
		<div className="count-down-section">
			<div className="intro">
				<GiPartyPopper />
				<h4>Holiday countdown begins</h4>
				<GiPartyPopper />
			</div>
			{message ? (
				<InfoAlert message={message} />
			) : (
				<div className="count-down">
					<div className="days">
						{days}
						<span>Days</span>
					</div>
					<div>
						{hours}
						<span>Hours</span>
					</div>
					<div>
						{minutes}
						<span>Minutes</span>
					</div>
					<div>
						{seconds}
						<span>Seconds</span>
					</div>
				</div>
			)}

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
