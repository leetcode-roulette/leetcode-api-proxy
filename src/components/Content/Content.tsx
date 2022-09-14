import React, { FC } from "react";
import { Button, ButtonBar } from "../Util";
import "./styles/content.css";

const Content: FC = () => {
	return (
		<div className="content px-4">
			<div className="mx-auto pt-5 text-center">
				<div className="col align-self-center">
					<h5 className="logo py-4 fw-normal">
						Welcome to LeetCode<span>Roulette</span>
					</h5>
					<div className="row justify-content-center">
						<p className="w-50">
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
							et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum."
						</p>
					</div>
					<ButtonBar></ButtonBar>
					<div className="flex-row mt-5">
						<Button>Search</Button>
						<Button>Random</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
