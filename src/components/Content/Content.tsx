import { Problem } from "leetcode-roulette-api";
import { Component } from "react";
import { api } from "../../api";
import { LoadingScreen } from "../LoadingScreen";
import { Button } from "../Util";
import { FilterGrid } from "../Util/FilterGrid";
import { Filter } from "../Util/FilterGrid/Filter";
import FilterBar from "../Util/FilterGrid/FilterBar";
import "./styles/content.css";

type contentProps = {
	tags: Array<Filter>;
};

type contentState = {
	tags: Set<string>;
	premium?: boolean;
	difficulty: Set<number>;
};

class Content extends Component<contentProps, contentState> {
	state: contentState = {
		tags: new Set(),
		difficulty: new Set(),
	};

	constructor(props: contentProps) {
		super(props);

		this.updateFilters = this.updateFilters.bind(this);
		this.updateTags = this.updateTags.bind(this);
		this.updatePremiumState = this.updatePremiumState.bind(this);
		this.updateDifficulty = this.updateDifficulty.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	getNewSet<T>(oldSet: Set<T>, val: T): Set<T> {
		const newSet: Set<T> = new Set(oldSet);

		if (newSet.has(val)) {
			newSet.delete(val);
		} else {
			newSet.add(val);
		}

		return newSet;
	}

	updateTags(slug: string): void {
		this.setState(state => ({
			...state,
			tags: this.getNewSet(state.tags, slug)
		}));
	}

	updatePremiumState(isPremium: boolean): void {
		this.setState(state => ({
			...state,
			premium: isPremium
		}));
	}

	updateDifficulty(difficulty: number): void {
		this.setState(state => ({
			...state,
			difficulty: this.getNewSet(state.difficulty, difficulty)
		}));
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

	async onClick(): Promise<void> {
		let problems: Array<Problem>;

		try {
			problems = await api.getProblems({
				tags: Array.from(this.state.tags),
				difficulty: Array.from(this.state.difficulty),
				premium: this.state.premium !== undefined ? !this.state.premium : false,
			});

			console.log(problems);
		} catch (e) {
			console.log("Error fetching problems: " + e);
		}
	}

	render() {
		const Filters = (
			<>
				<FilterBar updateFilters={this.updateFilters}></FilterBar>
				<FilterGrid tags={this.props.tags} updateFilters={this.updateFilters}></FilterGrid>
				<div className="my-5">
					<Button onClick={this.onClick} size="btn-lrg" styles="btn-primary-solid">Random</Button>
				</div>
			</>
		)

		return (
			<div className="content px-4">
				<div className="h-100 mx-auto pt-2 text-center">
					<div className="col h-100 align-self-center">
						<h5 className="logo py-2 fw-normal">
							Welcome to LeetCode<span>Roulette</span>
						</h5>
						<div className="row justify-content-center">
							<p className="w-75 pb-1">
								Leetcode Roulette is a service that allows users to get a random question from{" "}
								<a rel="noreferrer" target="_blank" className="leetcode" href="https://leetcode.com">
									leetcode.com
								</a>
								, similar to a roulette game. Users are able to apply filters and search to find questions. Try it
								out below!
							</p>
						</div>
						{ this.props.tags.length > 0 ? 
							Filters
								:
							<LoadingScreen />
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Content;
