import { React } from "react";
import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
const App = () => {
	return (
		<>
			<h1>Hello</h1>
			<div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
				<Button className=" mt-10">Something</Button>
			</div>
			<ButtonGradient />
		</>
	);
};

export default App;
