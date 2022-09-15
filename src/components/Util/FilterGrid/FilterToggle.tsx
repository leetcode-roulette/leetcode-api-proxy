import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { Filter } from "./Filter";

import "./styles/filter-toggle.css";

interface FilterToggleProps extends PropsWithChildren {
	filter: Filter;
	onClick?: () => void;
	text?: string;
	toggled?: boolean;
	style?: string;
	type?: "button" | "submit" | "reset" | undefined;
}

const FilterToggle: FC<FilterToggleProps> = ({ children, onClick, style }) => {
	const [toggled, setToggled] = useState(false);

	useEffect(() => {
		console.log(toggled);
	}, [toggled]);

	function handleFilterToggle(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		setToggled(!toggled);
		onClick?.();
	}
	return (
		<>
			<button className={`${style} ${toggled ? `toggled` : ""}`} onClick={handleFilterToggle}>
				{children}
			</button>
		</>
	);
};

export default FilterToggle;
