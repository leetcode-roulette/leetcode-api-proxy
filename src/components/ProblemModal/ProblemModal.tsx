import { FC } from "react";
import Modal from "react-bootstrap/Modal";
import { useModalContext } from "../../context/ModalProvider";

import "./styles/problem-modal.css";

const ProblemModal: FC = () => {
	const [open, toggleModalOpen] = useModalContext();

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
