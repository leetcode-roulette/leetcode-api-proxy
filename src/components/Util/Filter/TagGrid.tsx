import React, { FC, useCallback, useEffect, useState } from "react";
import { FilterToggle, Filter, filterToggleHandler } from ".";
import { useTagsContext, useFilterContext, useBreakpointContext } from "../../../context";

const TagGrid: FC = () => {

	const [tags] = useTagsContext();
	const [, setFilters] = useFilterContext();
	const [brkPnt] = useBreakpointContext();
	const getFiltersByBreakpoint = useCallback((brkPnt: string): number => {
		switch(brkPnt) {
			case "xs":
				return 9;
			case "sm":
				return 18;
			case "md":
				return 30;
			default:
				return tags.length;
		}
	}, [tags.length]);
	const [defaultNumberOfFilters, setDefaultNumberOfFilters] = useState<number>(getFiltersByBreakpoint(brkPnt));
	const [showMore, setShowMore] = useState<Boolean>(false);
	const [numberOfFilters, setNumberOfFilters] = useState<number>(defaultNumberOfFilters);
	const FILTER_BUTTONS: JSX.Element[] = tags.map((filter: Filter) => (
		<FilterToggle
			styles="toggle toggle-white-outline"
			filter={filter}
			toggled={filter.toggled}
			onClick={() => filterToggleHandler(setFilters, filter)}
		>
			{filter.text}
		</FilterToggle>
	));
	const onClick: () => void = () => setShowMore(!showMore);

	useEffect(() => {
		setDefaultNumberOfFilters(getFiltersByBreakpoint(brkPnt));
	}, [brkPnt, getFiltersByBreakpoint]);

	useEffect(() => {
		setNumberOfFilters(showMore ? FILTER_BUTTONS.length : defaultNumberOfFilters);
	}, [showMore, FILTER_BUTTONS.length, defaultNumberOfFilters]);

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
				</div>
				{ brkPnt === 'lg' || <button className="text-white btn mt-3" onClick={onClick}>
					Show {showMore ? "less" : "more"}
				</button> }
			</div>
		</div>
	)
}

export default TagGrid;
