import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Form, Modal, Row, Image } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';

const PoetEditModal = (props) => {
  const { show, setShow, poet } = props;
  const { poems, editPoet } = useContext(PoemsContext);
  const [checkedPoem, setCheckedPoems] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    console.log(poet.firstName, ' => ', poet.poems);
    poems.map(poem => {
      if (poet.poems.includes(poem._id)) {
        console.log(poet.firstName, 'has a ', poem._id); 
        setChecked([...checked, poem._id]);
      }
    });
    console.log({ checked });
  }, [poems])

  useEffect(() => { 
    console.log({ checkedPoem })
  }, [checkedPoem, checked]);

  useEffect(() => {
    setCheckedPoems([...new Set(...checked)]);
  },[]);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editPoet(e, poet._id, checkedPoem)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Poet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" defaultValue={poet.firstName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={poet.lastName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={poet.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={poet.photo} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poems
            </Form.Label>
            <Col md="8" style={{ maxHeight: 250, overflowY: "scroll", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
              {poems.map((poem, index) => (
                <Row style={{ height: 30, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="poets"
                      // defaultChecked={poem.poets.find(poetPoem => poetPoem._id === poet._id)}
                      defaultChecked={ checked.includes(poem._id) }
                      value={poem._id}
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
                  <Col md="7">
                    {/* <Image src={poem.avatar} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} /> */}
                    <span style={{ marginLeft: 10 }}>
                      {poem.title}
                    </span>
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PoetEditModal;
