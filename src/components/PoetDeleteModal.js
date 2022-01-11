import React, { useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
import PoemsContext from '../utils/PoemsContext';

const PoetDeleteModal = (props) => {
  const { deletePoet } = useContext(PoemsContext);
  const { show, setShow, poetId } = props;

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Poet</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Poet ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deletePoet(poetId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PoetDeleteModal;
