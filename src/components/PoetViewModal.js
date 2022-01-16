import React from 'react';
import { Button, ListGroup, Modal } from "react-bootstrap";


const PoetViewModal = (props) => {
  const { show, setShow, poet } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Poet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>First Name:</strong> {poet.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {poet.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>{" "}
            <img src={poet.photo} alt="" style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type:</strong> {poet.type}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poems:</strong>
            <ListGroup>
              {poet.poems.map(poem => (
                <ListGroup.Item>
                  <img src={poem.poster} alt="" width="100%" style={{ maxHeight: 200 }} />
                  <span style={{ marginLeft: 10 }}>
                    {poem.title}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PoetViewModal;
