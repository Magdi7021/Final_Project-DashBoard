import React, { useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
import PoemsContext from '../utils/PoemsContext';

const CategoryDeleteModal = (props) => {
  const { deleteCategory } = useContext(PoemsContext);
  const { show, setShow, categoryId } = props;

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Category ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCategory(categoryId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CategoryDeleteModal;
