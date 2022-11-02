import { FC, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useFilterContext } from "../../context/FilterProvider";
import { useModalContext } from "../../context/ModalProvider";

import "./styles/problem-modal.css";

const ProblemModal: FC = () => {
	const [filters] = useFilterContext(); 
	const [open, toggleModalOpen] = useModalContext();

	useEffect(() => console.log(filters), [filters]);
	return (
		<>
			<Modal show={open} onHide={() => toggleModalOpen()}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body></Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
};
export default ProblemModal;
