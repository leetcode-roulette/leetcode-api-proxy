import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import FilterToggle from "./FilterToggle";
import { Filter, getTags, filterToggleHandler } from "./Filter";

const FilterGrid: FC<PropsWithChildren> = () => {
	const [tags, setTags] = useState<Filter[]>([]);
	useEffect(() => {
		getTags().then(data => {
			setTags(data);
		});
	}, []);
	const FILTER_BUTTONS = tags.map((filter: Filter) => (
		<FilterToggle
			styles="toggle toggle-white-outline"
			filter={filter}
			toggled={filter.toggled}
			onClick={() => filterToggleHandler(filter)}
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
