import React from 'react';
import { Button, Image, ListGroup, Modal } from "react-bootstrap";

const PoemViewModal = (props) => {
  const { show, setShow, poem } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Poem</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {poem.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {poem.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poster:</strong>{" "}
            <img src={poem.poster} alt="" style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Rating:</strong> {poem.ratingAverage}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Categories:</strong>
            <ListGroup>
              {poem.category.map(category => (
                <ListGroup.Item>{category.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poets:</strong>
            <ListGroup>
              {poem.poets.map(poet => (
                <ListGroup.Item>
                  <Image src={poet.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                  <span style={{ marginLeft: 10 }}>
                    {poet.firstName} {poet.lastName}
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

export default PoemViewModal;
