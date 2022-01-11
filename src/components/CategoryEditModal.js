import React, { useContext } from 'react';
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PoemsContext from '../utils/PoemsContext';

const CategoryEditModal = (props) => {
  const { show, setShow, category } = props;
  const { editCategory } = useContext(PoemsContext);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editCategory(e, category._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Name
          </Form.Label>
          <Col md="8">
            <Form.Control type="text" name="name" defaultValue={category.name} required />
          </Col>
        </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CategoryEditModal;
