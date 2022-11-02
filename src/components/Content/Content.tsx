import { FC } from "react";
import { LoadingScreen } from "../LoadingScreen";
import { Button } from "../Util";
import { TagGrid, FilterBar } from "../Util/Filter";
import { useModalContext } from "../../context/ModalProvider";
import "./styles/content.css";
import { useTagsContext } from "../../context/TagProvider";

const Content: FC = () => {
	const [tags] = useTagsContext();
	const [, toggleModalOpen] = useModalContext();

	function onClick(): void {
		toggleModalOpen();
	}

	const Filters = (
		<>
			<FilterBar></FilterBar>
			<TagGrid></TagGrid>
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
					{tags.length > 0 ? Filters : <LoadingScreen />}
				</div>
			</div>
		</div>
	);
};

export default Content;
