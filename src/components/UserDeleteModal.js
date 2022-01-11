import React, { useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
import PoemsContext from '../utils/PoemsContext';

const UserDeleteModal = (props) => {
  const { deleteUser } = useContext(PoemsContext);
  const { show, setShow, userId } = props;

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this User ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteUser(userId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserDeleteModal;
