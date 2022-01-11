import React, { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import PoemsContext from '../utils/PoemsContext';
import UserCell from '../components/UserCell';
import UserAddModal from '../components/UserAddModal';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const { users } = useContext(PoemsContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.tokenDashboardPoems)
      navigate('/login');
  });

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Users</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div> 
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>#</th>
            <th style={{ width: "15%" }}>First Name</th>
            <th style={{ width: "15%" }}>Last Name</th>
            <th style={{ width: "15%" }}>Email</th>
            <th style={{ width: "15%" }}>Avatar</th>
            <th style={{ width: "10%" }}>Role</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserCell key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
      <UserAddModal show={show} setShow={setShow} />
    </>
  );
}

export default Users;
