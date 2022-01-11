import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PoetDeleteModal from './PoetDeleteModal';
import PoetViewModal from './PoetViewModal';
import PoetEditModel from './PoetEditModal';

const PoetCell = (props) => {
  const { poet } = props;
  const [viewShow, setViewShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{poet._id}</td>
      <td>{poet.firstName}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{poet.lastName}</td>
      <td>
        <img src={poet.photo} alt="" style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word", maxHeight: "200px", display: 'block', overflow: "auto" }}>{poet.description}</td>
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
      <PoetViewModal show={viewShow} setShow={setViewShow} poet={poet} />
      <PoetDeleteModal show={deleteShow} setShow={setDeleteShow} poetId={poet._id} />
      <PoetEditModel show={editShow} setShow={setEditShow} poet={poet}/>
    </tr>
  );
}

export default PoetCell;
