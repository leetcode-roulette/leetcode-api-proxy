import { FC } from "react";
import Modal from "react-bootstrap/Modal";
import { useModal, useToggleModalOpen } from "../../context/ModalProvider";

import "./styles/problem-modal.css";

const ProblemModal: FC = () => {
	const open = useModal();
	const toggleModalOpen = useToggleModalOpen();

	const handleClose = () => toggleModalOpen();

	return (
		<>
			<Modal show={open} onHide={handleClose}>
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
