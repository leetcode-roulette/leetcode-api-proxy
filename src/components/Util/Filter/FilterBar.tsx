import React, { FC } from "react";
import { Filter, FilterToggle, filterToggleHandler } from ".";
import { useFilterContext } from "../../../context/FilterProvider";

const FilterBar: FC = () => {
	const [, setFilters] = useFilterContext();

	const premium: Filter = {
		id: 1,
		text: "Premium",
		data: "premium",
		type: "premium",
		toggled: false,
	};

	const difficulties: Filter[] = ["Easy", "Medium", "Hard"].map((difficulty, id): Filter => {
		return {
			id,
			text: difficulty,
			data: (id + 1).toString(),
			type: "difficulty",
			toggled: false,
		};
	});

	const Premium = (
		<FilterToggle
			styles="toggle toggle-white-outline"
			filter={premium}
			toggled={premium.toggled}
			onClick={() => filterToggleHandler(setFilters, premium)}
		>
			{premium.text}
		</FilterToggle>
	);

	const Difficulties = difficulties.map((difficulty) => {
		return (
			<FilterToggle
				styles="toggle toggle-white-outline"
				filter={difficulty}
				toggled={difficulty.toggled}
				onClick={() => filterToggleHandler(setFilters, difficulty)}
			>
				{difficulty.text}
			</FilterToggle>
		);
	});

	return (
		<div className="container-fluid pt-3">
			<div className="col">
				<div className="d-flex flex-wrap justify-content-center mb-2">
					{Difficulties.map((Difficulty, i) => (
						<div key={i} className="mx-2">
							{Difficulty}
						</div>
					))}
					<div className="mx-2">{Premium}</div>
				</div>
			</div>
		</div>
	);
};

export default FilterBar;
