import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';

// firstName - lastName - poems - photo - description
const PoetAddModal = (props) => {
  const { show, setShow } = props;
  const { poems, addPoet } = useContext(PoemsContext);
  const [checkedPoem, setCheckedPoems] = useState([]);

  useEffect(() => { }, [checkedPoem]);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={(e) => addPoet(e, checkedPoem)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Poet</Modal.Title>
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
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poems
            </Form.Label>
            <Col md="8" style={{ maxHeight: 250, overflowY: "scroll", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
              {poems.map(poemObject => (
                <Row style={{ height: 30, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="poems"
                      value={poemObject._id}
                      onChange={(e) => {
                        const target = e.target;
                        let value = target.value;
                        if (target.checked) {
                          setCheckedPoems([...checkedPoem, value]);
                        } else {
                          setCheckedPoems(e => e.filter(id => id !== value));
                        }
                      }}
                    />
                  </Col>
                  <Col md="2">
                    <span>{poemObject.title}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Poet
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PoetAddModal;
