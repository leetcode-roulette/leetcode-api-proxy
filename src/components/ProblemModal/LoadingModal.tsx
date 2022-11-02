import { FC } from "react";
import { Modal, Spinner } from "react-bootstrap";

const LoadingModal: FC = () => {
  return (
    <>
      <Modal.Header>
        <Modal.Title>Searching for problems</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto py-5">
        <Spinner className="my-5" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Modal.Body>
    </>
  );
}

export default LoadingModal;
