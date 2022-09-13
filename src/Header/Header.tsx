import React, { FC } from "react";
import "./styles/header.css";

const Header: FC = () => {
	return (
		<div className="navbar shadow-sm p-3">
			<a className="logo navbar-brand navbar mx-2" href="#">
				LeetCode<span>Roulette</span>
			</a>
		</div>
	);
};

export default Header;
