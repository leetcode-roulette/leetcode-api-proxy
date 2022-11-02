import { FC, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useFilterContext, useModalContext } from "../../context";
import { api, Problem } from "../../api";
import Roulette from "@leetcoderoulette/roulette";
import { ProblemData, LoadingModal } from ".";

import "./styles/problem-modal.css";

const ProblemModal: FC = () => {
	const [open, toggleModalOpen] = useModalContext();
	const [filters] = useFilterContext();
	const [currentProblem, setCurrentProblem] = useState<Problem>();
	const [isLoadingProblems, setIsLoadingProblems] = useState<boolean>(true);
	const [roulette, setRoulette] = useState<Roulette<Problem> | undefined>();

	useEffect(() => {
		if (open) {
			setIsLoadingProblems(true);
			const tags = Array.from(filters.tags);
			const difficulty = Array.from(filters.difficulty);
			const premium = filters.premium;
			api.getProblems({ tags, difficulty, premium }).then((problems) => {
				setRoulette(new Roulette(problems));
				setIsLoadingProblems(false);
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
			<Modal size="lg" centered scrollable={true} show={open} onHide={() => toggleModalOpen()}>
				{!isLoadingProblems ? <>
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
				</> : <LoadingModal />}
			</Modal>
		</>
	);
};
export default ProblemModal;
