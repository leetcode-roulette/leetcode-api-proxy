import React, { FC, useEffect, useState } from "react";
import FilterToggle from "./FilterToggle";
import { Filter, filterToggleHandler } from "./Filter";

interface FilterGridProps {
	updateFilters: (filter: Filter) => void;
	tags: Array<Filter>;
}

const FilterGrid: FC<FilterGridProps> = ({ updateFilters, tags }: FilterGridProps) => {
	const [showMore, setShowMore] = useState<boolean>(false);
	const [numberOfItems, setNumberOfItems] = useState<number>(20);
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

	useEffect(() => {
		if (showMore) {
			setNumberOfItems(FILTER_BUTTONS.length);
		} else {
			setNumberOfItems(20);
		}
	}, [showMore]);

	return (
		<div className="container-fluid pt-4">
			<div className="col">
				<div className="d-flex flex-wrap justify-content-center">
					{FILTER_BUTTONS.map(
						(filterToggle, index) =>
							index < numberOfItems && (
								<div key={filterToggle.props.filter.id} className="mx-2 my-2">
									{filterToggle}
								</div>
							)
					)}
					<div className="mx-2 my-2">
						<button className="toggle toggle-white-outline" onClick={() => setShowMore(!showMore)}>
							Show {(showMore && "less") || "more"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterGrid;
