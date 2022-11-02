import React, { FC, PropsWithChildren } from "react";
import "./styles/button.css";

interface ButtonOptions extends PropsWithChildren {
	onClick?: () => void;
	size?: "btn-sm" | "btn-md" | "btn-lrg";
	styles?: string;
	text?: string;
	type?: "button" | "submit" | "reset" | undefined;
}

const STYLES = {
	default: "btn-white-outline",
};

const SIZES = {
	small: "btn-sm",
	medium: "btn-md",
	large: "btn-lrg",
};

const Button: FC<ButtonOptions> = ({ children, onClick, size, styles, text, type }) => {
	const btnSize = size ? size : SIZES["medium"];
	const btnStyle = styles ? styles : STYLES["default"];

	const STYLE = [btnSize, btnStyle];

	return (
		<button className={`button btn ${STYLE.join(" ")}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

export default Button;
