import { useLocation } from "react-router-dom";
import Button from "./Button";
import { MenuSvg } from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
const navigation = [
	{
		id: "0",
		title: "Features",
		url: "#features",
	},
	{
		id: "1",
		title: "Pricing",
		url: "#pricing",
	},
	{
		id: "2",
		title: "How to use",
		url: "#how-to-use",
	},
	{
		id: "3",
		title: "Roadmap",
		url: "#roadmap",
	},
	{
		id: "4",
		title: "New account",
		url: "#signup",
		onlyMobile: true,
	},
	{
		id: "5",
		title: "Sign in",
		url: "#login",
		onlyMobile: true,
	},
];

const Header = () => {
	const pathname = useLocation();
	return (
		<div className="fixed top-0 left-0 w-full backdrop-blur-sm z-50 bg-n-8/90 border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
			<div className="flex items-center justify-between w-full px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
				<a className="xl:mr-8" href="#hero">
					<p className="text-3xl font-bold inline-flex">Curiosity AI</p>
				</a>
				<nav className="hidden fixed top-[5rem] bg-n-8 lg:static lg:flex lg:max-auto lg:bg-transparent right-0 bottom-0 px-4">
					<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row px-4">
						{navigation.map((data) => (
							<a
								key={data.id}
								href={data.url}
								className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
									data.onlyMobile ? "lg:hidden" : ""
								} px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
									data.url === pathname.hash
										? "z-2 lg:text-n-1"
										: "lg:text-n-1/50"
								} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
							>
								{data.title}
							</a>
						))}
					</div>
				</nav>
				<a
					href="#Signup"
					className="button hidden mr-8 text-n-1/50 transiton-color hover:text-n-1 lg:block"
				>
					New account
				</a>
				<Button className="hidden lg:flex" href="#login">
					Sign up
				</Button>
			</div>
		</div>
	);
};

export default Header;
