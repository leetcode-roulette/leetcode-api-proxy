import React, { Component } from "react";
import { Button } from "../Util";
import { FilterGrid } from "../Util/FilterGrid";
import { Filter } from "../Util/FilterGrid/Filter";
import FilterBar from "../Util/FilterGrid/FilterBar";
import "./styles/content.css";

type contentProps = {
	tags: Array<Filter>;
}

type contentState = {
	tags: Set<string>;
	premium?: boolean;
	difficulty: Set<number>;
}

class Content extends Component<contentProps, contentState> {
	state: contentState = {
		tags: new Set(),
		difficulty: new Set()
	};

	constructor(props: contentProps) {
		super(props);

		this.updateFilters = this.updateFilters.bind(this);
		this.updateTags = this.updateTags.bind(this);
		this.updatePremiumState = this.updatePremiumState.bind(this);
		this.updateDifficulty = this.updateDifficulty.bind(this);
	}

	updateTags(slug: string): void {
		if (this.state.tags.has(slug)) {
			this.state.tags.delete(slug);
		} else {
			this.state.tags.add(slug);
		}
	}

	updatePremiumState(isPremium: boolean): void {
		this.setState(state => ({
			...state,
			premium: isPremium
		}));
	}

	updateDifficulty(difficulty: number): void {
		if (this.state.difficulty.has(difficulty)) {
			this.state.difficulty.delete(difficulty);
		} else {
			this.state.difficulty.add(difficulty);
		}
	}

	updateFilters(filter: Filter): void {
		switch (filter.type) {
			case "tags":
				this.updateTags(filter.data);
				break;
			case "premium":
				this.updatePremiumState(filter.toggled);
				break;
			case "difficulty":
				this.updateDifficulty(parseInt(filter.data));
				break;
		}
	}

	render() {
		return (
			<div className="content px-4">
				<div className="mx-auto pt-2 text-center">
					<div className="col align-self-center">
						<h5 className="logo py-2 fw-normal">
							Welcome to LeetCode<span>Roulette</span>
						</h5>
						<div className="row justify-content-center">
							<p className="w-75 pb-1">
								Leetcode Roulette is a service that allows users to get a random question from <a className="leetcode" href="https://leetcode.com">leetcode.com</a>, 
								similar to a roulette game. Users are able to apply filters and 
								search to find questions. Try it out below!
							</p>
						</div>
						<FilterBar updateFilters={this.updateFilters}></FilterBar>
						<FilterGrid tags={this.props.tags} updateFilters={this.updateFilters}></FilterGrid>
						<div className="my-5">
							<Button size="btn-lrg" styles="btn-primary-solid">Random</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Content;
