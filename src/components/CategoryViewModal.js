import React from 'react';
import { Button, ListGroup, Modal } from "react-bootstrap"

const CategoryViewModal = (props) => {
  const { show, setShow, category } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <ListGroup.Item>
            <strong>Name:</strong> {category.name}
          </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CategoryViewModal;
