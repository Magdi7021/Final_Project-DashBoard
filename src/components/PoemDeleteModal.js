import React, { useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
import PoemsContext from '../utils/PoemsContext';

const PoemDeleteModal = (props) => {
  const { deletePoem } = useContext(PoemsContext);
  const { show, setShow, poemId } = props;

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Film</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this film ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deletePoem(poemId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PoemDeleteModal;
