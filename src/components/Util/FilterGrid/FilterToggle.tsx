import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { Filter } from "./Filter";

import "./styles/filter-toggle.css";

interface FilterToggleProps extends PropsWithChildren {
	filter: Filter;
	onClick?: () => void;
	text?: string;
	toggled?: boolean;
	styles?: string;
	type?: "button" | "submit" | "reset" | undefined;
}

const FilterToggle: FC<FilterToggleProps> = ({ filter, children, onClick, styles }: FilterToggleProps) => {
	const [toggled, setToggled] = useState(filter.toggled);

	useEffect(() => {
		console.log(toggled);
	}, [toggled]);

	function handleFilterToggle(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		setToggled(!toggled);
		filter.toggled = toggled;
		onClick?.();
	}
	return (
		<>
			<button className={`${styles} ${toggled ? `toggled` : ""}`} onClick={handleFilterToggle}>
				{children}
			</button>
		</>
	);
};

export default FilterToggle;
