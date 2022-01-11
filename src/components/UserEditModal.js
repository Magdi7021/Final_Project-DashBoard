import React, { useState, useContext } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';

// firstName - lastName - email - password - avatar 
const UserEditModal = (props) => {
  const { show, setShow, user } = props;
  const [ checkBox, setCheckBox ] = useState(user.role === 'Admin');
  const { editUser } = useContext(PoemsContext);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editUser(e, user._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" defaultValue={user.firstName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={user.lastName} required />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={user.email} required />
            </Col>
          </Form.Group> */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" defaultValue={user.password} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" defaultValue={user.avatar} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Check
              checked={checkBox}
              onChange={() => setCheckBox(!checkBox)}
              type="switch"
              label="Admin"
              name="isAdmin"
            />
            {/* {user.role === 'Admin' ?
              (
                <Form.Check 
                  checked
                  type="switch"
                  id="custom-switch"
                  label="Admin"
                  name="isAdmin"
                />
              ):
              (
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Admin"
                  name="isAdmin"
                />
              )} */}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Edit User
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default UserEditModal;
