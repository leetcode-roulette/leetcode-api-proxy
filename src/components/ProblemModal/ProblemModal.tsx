import { FC, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./styles/problem-modal.css";

const ProblemModal: FC = () => {
	const [show, setShow] = useState<boolean>(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
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
