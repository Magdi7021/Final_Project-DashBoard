import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UserEditModal from './UserEditModal';
import UserViewModal from './UserViewModal';
import UserDeleteModal from './UserDeleteModal';

const UserCell = (props) => {
  const { user } = props;
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user.firstName}</td>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user.lastName}</td>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user.email}</td>
        <td>
        <img src={user.avatar} alt="" style={{ objectFit: "contain", height: "100%", width: "100px" }} />
        </td>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user.role}</td>
        <td>
          <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
          </Button>
          <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
          </Button>
          <Button variant="danger" className="me-2" onClick={() => setDeleteShow(true)}>
          Delete
          </Button>
        </td>
        <UserViewModal show={viewShow} setShow={setViewShow} user={user} />
        <UserEditModal show={editShow} setShow={setEditShow} user={user} />
        <UserDeleteModal show={deleteShow} setShow={setDeleteShow} userId={user._id} />
      </tr>
    </>
  );
}

export default UserCell;
