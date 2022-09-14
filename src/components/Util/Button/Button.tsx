import React, { FC, useEffect, useState, PropsWithChildren } from "react";
import "./styles/button.css";

interface ButtonOptions extends PropsWithChildren {
	onClick?: () => void;
	size?: string;
	style?: string;
	text?: string;
	type?: "button" | "submit" | "reset" | undefined;
}

const STYLES = {
	default: "btn-primary-solid",
};

const SIZES = {
	small: "btn-sm",
	medium: "btn-md",
	large: "btn-lrg",
};

const BUTTON_STYLES = {};

const Button: FC<ButtonOptions> = ({ children, onClick, size, style, text, type }) => {
	const btnSize = size ? size : SIZES["medium"];
	const btnStyle = style ? style : STYLES["default"];

	const STYLE = [btnSize, btnStyle];

	function queryStyles(style: string) {
		const styles = style.split(" ");

		let x = [];
		styles.map((s) => {});
	}

	return (
		<button className={`btn ${STYLE.join(" ")}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

export default Button;
