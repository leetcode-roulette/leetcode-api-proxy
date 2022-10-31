import React, { FC, useEffect, useState } from "react";
import FilterToggle from "./FilterToggle";
import { Filter, filterToggleHandler } from "./Filter";

type FilterGridProps = {
	updateFilters: (filter: Filter) => void;
	tags: Array<Filter>;
}

const FilterGrid: FC<FilterGridProps> = ({ updateFilters, tags }: FilterGridProps) => {
	const DEFAULT_NUMBER_OF_FILTERS = 39;
	const [showMore, setShowMore] = useState<Boolean>(false);
	const [numberOfFilters, setNumberOfFilters] = useState<number>(DEFAULT_NUMBER_OF_FILTERS);
	const FILTER_BUTTONS: JSX.Element[] = tags.map((filter: Filter) => (
		<FilterToggle
			styles="toggle toggle-white-outline"
			filter={filter}
			toggled={filter.toggled}
			onClick={() => filterToggleHandler(updateFilters, filter)}
		>
			{filter.text}
		</FilterToggle>
	));
	const onClick: () => void = () => setShowMore(!showMore);

	useEffect(() => {
		setNumberOfFilters(showMore ? FILTER_BUTTONS.length : DEFAULT_NUMBER_OF_FILTERS);
	}, [showMore, FILTER_BUTTONS.length]);

	return (
		<div className="container-fluid pt-4">
			<div className="col">
				<div className="d-flex flex-wrap justify-content-center">
					{FILTER_BUTTONS.map(
						(filterToggle, index) =>
							index < numberOfFilters && (
								<div key={filterToggle.props.filter.id} className="mx-2 my-2">
									{filterToggle}
								</div>
							)
					)}
					<div className="mx-0 my-0">
						<button className="text-white btn mt-2" onClick={onClick}>
							Show {showMore ? "less" : "more"}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FilterGrid;
