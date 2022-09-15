import React, { FC, PropsWithChildren } from "react";
import FilterToggle from "./FilterToggle";
import { Filter, DEFAULT_FILTERS } from "./Filter";

const FilterGrid: FC<PropsWithChildren> = () => {
	function filterToggleHandler(filterId: number): void {
		console.log(`Filter:${filterId} has been toggled!!`);
	}

	const FILTER_BUTTONS = DEFAULT_FILTERS.map((filter: Filter) => (
		<FilterToggle
			styles="toggle toggle-white-outline"
			filter={filter}
			toggled={filter.toggled}
			onClick={() => filterToggleHandler(filter.id)}
		>
			{filter.text}
		</FilterToggle>
	));

	return (
		<div className="container-fluid">
			<div className="col">
				<div className="d-flex flex-wrap justify-content-center">
					{FILTER_BUTTONS.map((filter, i) => (
						<div key={i} className="mx-2 mb-4">
							{filter}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilterGrid;
