import React, { useContext } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';

// firstName - lastName - email - password - avatar 
const UserAddModal = (props) => {
  const { show, setShow } = props;
  const { addUser } = useContext(PoemsContext);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addUser}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" required />
            </Col>
          </Form.Group>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Admin"
            name="isAdmin"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add User
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default UserAddModal;
