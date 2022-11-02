import { FC, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFilterContext, useModalContext } from "../../context";
import { api, Problem } from "../../api";
import Roulette from "@leetcoderoulette/roulette";

import "./styles/problem-modal.css";

const ProblemModal: FC = () => {
	const [open, toggleModalOpen] = useModalContext();
	const [filters] = useFilterContext();
	const [problems, setProblems] = useState<Problem[]>([]);
	const [currentProblem, setCurrentProblem] = useState<Problem>();

	const [roulette, setRoulette] = useState<Roulette<Problem> | undefined>();

	useEffect(() => {
		if (open) {
			const tags = Array.from(filters.tags);
			const difficulty = Array.from(filters.difficulty);
			const premium = filters.premium;
			api.getProblems({ tags, difficulty, premium }).then((problems) => {
				setProblems(problems);
				setRoulette(new Roulette(problems));
			});
		}
	}, [open]);

	useEffect(() => {
		if (roulette && roulette.size !== 0) {
			setCurrentProblem(roulette.problem);
		}
	}, [roulette]);

	useEffect(() => {
		console.log(currentProblem);
	}, [currentProblem]);
	return (
		<>
			<Modal className={`mx-auto`} size="lg" centered scrollable={true} show={open} onHide={() => toggleModalOpen()}>
				<Modal.Header closeButton>
					<Modal.Title>{currentProblem?.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{currentProblem && (
						<>
							<div
								dangerouslySetInnerHTML={{
									__html: currentProblem?.description || "<p>No Description</p>",
								}}
							></div>
							{currentProblem?.hints.length && (
								<div>
									<p>
										<strong>Hints:</strong>
									</p>
									<ul>
										{currentProblem?.hints.map((hint) => {
											return <li>{hint}</li>;
										})}
									</ul>
								</div>
							)}
						</>
					)}
				</Modal.Body>
				<Modal.Footer>{problems.length}</Modal.Footer>
			</Modal>
		</>
	);
};
export default ProblemModal;
