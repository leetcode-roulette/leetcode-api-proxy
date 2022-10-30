import React, { FC } from "react";
import FilterToggle from "./FilterToggle";
import { Filter, filterToggleHandler } from "./Filter";

interface FilterGridProps {
  updateFilters: (filter: Filter) => void;
	tags: Array<Filter>;
}

const FilterGrid: FC<FilterGridProps> = ({ updateFilters, tags }: FilterGridProps) => {
	const FILTER_BUTTONS = tags.map((filter: Filter) => (
		<FilterToggle
			styles="toggle toggle-white-outline"
			filter={filter}
			toggled={filter.toggled}
			onClick={() => filterToggleHandler(updateFilters, filter)}
		>
			{filter.text}
		</FilterToggle>
	));

	return (
		<div className="container-fluid pt-4">
			<div className="col">
				<div className="d-flex flex-wrap justify-content-center">
					{FILTER_BUTTONS.map((filter, i) => (
						<div key={i} className="mx-2 mb-3">
							{filter}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilterGrid;
