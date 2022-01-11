import React, { useContext } from 'react';
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import PoemsContext from '../utils/PoemsContext';

const CategoryAddModal = (props) => {
  const { show, setShow } = props;
  const { addCategory } = useContext(PoemsContext);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addCategory}>
        <Modal.Header closeButton>
          <Modal.Title>add Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              name
            </Form.Label>

            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>

          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Category
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CategoryAddModal;
