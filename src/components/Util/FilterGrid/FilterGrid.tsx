import React, { Component } from "react";
import FilterToggle from "./FilterToggle";
import { Filter, filterToggleHandler } from "./Filter";

type FilterGridProps = {
	updateFilters: (filter: Filter) => void;
	tags: Array<Filter>;
}

type FilterGridState = {
	showMore: boolean;
}

class FilterGrid extends Component<FilterGridProps, FilterGridState> {
	state: FilterGridState = {
		showMore: false
	}

	constructor(props: FilterGridProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState(state => ({
			...state,
			showMore: !state.showMore
		}));
	}

	render() {
		const DEFAULT_NUMBER_OF_FILTERS = 39;
		const FILTER_BUTTONS = this.props.tags.map((filter: Filter) => (
			<FilterToggle
				styles="toggle toggle-white-outline"
				filter={filter}
				toggled={filter.toggled}
				onClick={() => filterToggleHandler(this.props.updateFilters, filter)}
			>
				{filter.text}
			</FilterToggle>
		));

		return (
			<div className="container-fluid pt-4">
				<div className="col">
					<div className="d-flex flex-wrap justify-content-center">
						{FILTER_BUTTONS.map(
							(filterToggle, index) =>
								index < (this.state.showMore ? FILTER_BUTTONS.length : DEFAULT_NUMBER_OF_FILTERS) && (
									<div key={filterToggle.props.filter.id} className="mx-2 my-2">
										{filterToggle}
									</div>
								)
						)}
						<div className="mx-0 my-0">
							<button className="text-white btn mt-2" onClick={this.onClick}>
								Show {this.state.showMore ? "less" : "more"}
							</button>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}

export default FilterGrid;
