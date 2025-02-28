import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
const App = () => {
	return (
		<>
			<h1>Hello</h1>
			<div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden gap-4">
				{/* <Button className=" mt-10 ">login</Button>
				<Button className=" mt-10 ">sign up</Button>
				<Button className=" mt-10 ">sign out</Button> */}
				<Header />
			</div>
			<ButtonGradient />
		</>
	);
};

export default App;
