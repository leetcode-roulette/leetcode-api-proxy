import { FC, useState } from "react";
import { LoadingScreen } from "../LoadingScreen";
import { Button } from "../Util";
import { FilterGrid } from "../Util/FilterGrid";
import { Filter } from "../Util/FilterGrid/Filter";
import FilterBar from "../Util/FilterGrid/FilterBar";
import { useModalContext } from "../../context/ModalProvider";
import "./styles/content.css";
import { useTagsContext } from "../../context/AppProvider";

const Content: FC = () => {
	const [_tags, _setTags] = useTagsContext();
	const [tags, setTags] = useState<Set<string>>(new Set());
	const [difficulty, setDifficulty] = useState<Set<number>>(new Set());
	const [premium, setPremium] = useState<boolean>(false);
	const [openModal, toggleModalOpen] = useModalContext();

	function getNewSet<T>(oldSet: Set<T>, val: T): Set<T> {
		const newSet: Set<T> = new Set(oldSet);

		if (newSet.has(val)) {
			newSet.delete(val);
		} else {
			newSet.add(val);
		}

		return newSet;
	}

	function updateFilters(filter: Filter): void {
		switch (filter.type) {
			case "tags":
				setTags(getNewSet(tags, filter.data));
				break;
			case "premium":
				setPremium(!premium);
				break;
			case "difficulty":
				setDifficulty(getNewSet(difficulty, parseInt(filter.data)));
				break;
		}
	}

	function onClick(): void {
		toggleModalOpen();
		console.log({
			difficulty,
			tags,
			premium,
		});
	}

	const Filters = (
		<>
			<FilterBar updateFilters={updateFilters}></FilterBar>
			<FilterGrid tags={_tags} updateFilters={updateFilters}></FilterGrid>
			<div className="my-5">
				<Button onClick={onClick} size="btn-lrg" styles="btn-primary-solid">
					Random
				</Button>
			</div>
		</>
	);

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
							, similar to a roulette game. Users are able to apply filters and search to find questions. Try it out
							below!
						</p>
					</div>
					{_tags.length > 0 ? Filters : <LoadingScreen />}
				</div>
			</div>
		</div>
	);
};

export default Content;
