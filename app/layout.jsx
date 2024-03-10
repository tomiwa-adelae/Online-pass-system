import { Montserrat } from "next/font/google";
import "../styles/style.css";
import Providers from "./provider";

const montserrat = Montserrat({
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Passify",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
