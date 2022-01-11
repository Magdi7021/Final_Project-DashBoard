import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import PoemsContext from '../utils/PoemsContext';

const PoemAddModal = (props) => {
  const { show, setShow } = props;
  const [category, setCategory] = useState([]);
  const [checkedPoet, setCheckedPoet] = useState([]);
  const { categories, addPoem, poets } = useContext(PoemsContext);

  useEffect(() => {
  }, [category, checkedPoet])

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={(e) => addPoem(e, category, checkedPoet)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Poem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
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
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Categories
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
              {categories.map(categoryObject => (
                <Row>
                  <Col md="3">
                    <Form.Check
                      type="checkbox"
                      name="category"
                      value={categoryObject._id}
                      onChange={(e) => {
                        const target = e.target;
                        let value = target.value;
                        if (target.checked) {
                          setCategory([...category, value]);
                        } else {
                          setCategory(e => e.filter(id => id !== value))
                        }
                      }}
                    />
                  </Col>
                  <Col md="2">
                    <span>{categoryObject.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poets
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
              {poets.map(poet => (
                <Row style={{ height: 30, display: "flex", alignItems: "center" }}>
                  <Col md="3">
                    <Form.Check
                      type="radio"
                      name="poets"
                      value={poet._id}
                      onChange={(e) => {
                        const target = e.target;
                        let value = target.value;
                        if (target.checked) {
                          setCheckedPoet([...checkedPoet, value]);
                        } else {
                          setCheckedPoet(e => e.filter(id => id !== value));
                        }
                      }}
                    />
                  </Col>
                  <Col md="7">
                    {/* <Image src={poet.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} /> */}
                    <span style={{ marginLeft: 10 }}>
                      {poet.firstName} {poet.lastName}
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
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add poem
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PoemAddModal;
