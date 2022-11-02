import { FC, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useFilterContext, useModalContext } from "../../context";
import { api, Problem } from "../../api";
import Roulette from "@leetcoderoulette/roulette";
import { ProblemData } from ".";

import "./styles/problem-modal.css";

const ProblemModal: FC = () => {
	const [open, toggleModalOpen] = useModalContext();
	const [filters] = useFilterContext();
	const [currentProblem, setCurrentProblem] = useState<Problem>();

	const [roulette, setRoulette] = useState<Roulette<Problem> | undefined>();

	useEffect(() => {
		if (open) {
			const tags = Array.from(filters.tags);
			const difficulty = Array.from(filters.difficulty);
			const premium = filters.premium;
			api.getProblems({ tags, difficulty, premium }).then((problems) => {
				setRoulette(new Roulette(problems));
			});
		}
	}, [open, filters.tags, filters.difficulty, filters.premium]);

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
					{currentProblem && <>
						<ProblemData problem={currentProblem} />
					</> }
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" rel="noreferrer" target="_blank" href={`https://leetcode.com/problems/${currentProblem?.title_slug}`}>Solve it</Button>
					<Button onClick={() => {
						setCurrentProblem(roulette?.problem);
						setRoulette(roulette);
					}} variant="danger">Reroll</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default ProblemModal;
