import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, children, px, white, onClick, href }) => {
	//css
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

	//2.if the button is link
	const renderLink = () => (
		<a href={href} className={classes}>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(white)}
		</a>
	);

	//agr href present hoga toh renderlink call hoga otherwise renderbutn
	return href ? renderLink() : renderButton();
};

export default Button;
