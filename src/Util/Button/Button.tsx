import React, { FC, useEffect, useState, PropsWithChildren } from "react";
import "./styles/button.css";

const Button: FC<PropsWithChildren> = (props) => {
	const [selected, setSelected] = useState(false);
	const [color, setColor] = useState("");

	useEffect(() => {
		console.log(selected);
	}, [selected]);

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		setSelected(!selected);
	}

	return (
		<button className={`button button-outline ${selected ? "selected" : ""}`} onClick={handleClick}>
			{props.children}
		</button>
	);
};

export default Button;
