import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';
const PoemEditModal = (props) => {
  const { show, setShow, poem } = props;
  const [category, setCategory] = useState([]);
  const [checkedPoet, setCheckedPoet] = useState([]);
  const { categories, editPoem, poets } = useContext(PoemsContext);

  useEffect(() => {
  }, [category, checkedPoet])

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editPoem(e, poem._id, category, checkedPoet)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Poem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={poem.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={poem.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" defaultValue={poem.poster} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Categories
            </Form.Label>
            <Col md="8">
              {categories.map(categoryObject => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="categories"
                      defaultChecked={poem.category.find(categoryPoem => categoryPoem._id === categoryObject._id)}
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
            <Col md="8" style={{ maxHeight: 250, overflowY: "scroll", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
              {poets.map(poet => (
                <Row style={{ height: 30, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="poets"
                      defaultChecked={poem.poets.find(poetPoem => poetPoem._id === poet._id)}
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
                    <span style={{ marginLeft: 10, display: "inline-block" }}>
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
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PoemEditModal;
