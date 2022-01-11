import React, { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import PoemsContext from '../utils/PoemsContext';
import PoetCell from '../components/PoetCell';
import PoetAddModal from '../components/PoetAddModal';
import { useNavigate } from 'react-router-dom';

const Poets = () => {
  const { poets } = useContext(PoemsContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.tokenDashboardPoems)
      navigate('/login');
  });

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Poets</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "12%" }}>First Name</th>
          <th style={{ width: "12%" }}>Last Name</th>
          <th style={{ width: "15%" }}>Photo</th>
          <th style={{ width: "30%" }}>Description</th>
          <th style={{ width: "22%" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {poets.map(poet => (
          <PoetCell key={poet._id} poet={poet} />
          ))}
      </tbody>
      </Table>
      <PoetAddModal show={show} setShow={setShow} />
    </>
  );
}

export default Poets;
