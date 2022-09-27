import { FC } from "react";
import { Button } from "../Util";
import { FilterGrid } from "../Util/FilterGrid";
import "./styles/content.css";

const Content: FC = () => {
	return (
		<div className="content px-4">
			<div className="mx-auto pt-3 text-center">
				<div className="col align-self-center">
					<h5 className="logo py-4 fw-normal">
						Welcome to LeetCode<span>Roulette</span>
					</h5>
					<div className="row justify-content-center">
						<p className="w-75 pb-1">
							Leetcode Roulette is a service that allows users to get a random question from <a className="leetcode" href="https://leetcode.com">leetcode.com</a>, 
							similar to a roulette game. Users are able to apply filters and 
							search to find questions. Try it out below!
						</p>
					</div>
					<FilterGrid></FilterGrid>
					<div className="my-5">
						<Button size="btn-lrg" styles="btn-primary-solid">Random</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
