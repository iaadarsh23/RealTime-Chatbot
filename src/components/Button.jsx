import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, children, px, white, onClick, href }) => {
	const classes = `button relative inline-flex items-center justify-center h-11 tranistion-colors hover:text-color-1 ${
		px || "px-7"
	} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
	const spanClasses = `relative z-50`;
	const renderButton = () => (
		<button className={classes}>
			{/* ye childern dene ka mtlb hai button ke ander kuch bhi ho skta hai */}
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(white)}
		</button>
	);

	return renderButton();
};

export default Button;
