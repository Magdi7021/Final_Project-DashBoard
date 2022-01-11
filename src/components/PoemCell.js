import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PoemDeleteModal from './PoemDeleteModal';
import PoemEditModal from './PoemEditModal';
import PoemViewModal from './PoemViewModal';

const PoemCell = (props) => {
  const { poem } = props;
  const [viewShow, setViewShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  console.log(poem);
  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{poem._id}</td>
      <td>{poem.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word", maxHeight: "200px", display: 'block', overflow: "auto" }}>{poem.description}</td>
      <td>
        <img src={poem.poster} alt="" style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{poem.ratingAverage}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <PoemViewModal show={viewShow} setShow={setViewShow} poem={poem} />
      <PoemDeleteModal show={deleteShow} setShow={setDeleteShow} poemId={poem._id} />
      <PoemEditModal show={editShow} setShow={setEditShow} poem={poem} />
    </tr>
    </>
  );
}

export default PoemCell;
