import React, { useContext, useState, useEffect } from 'react';
import PoemsContext from '../utils/PoemsContext';
import { Button, Table } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import PoemCell from '../components/PoemCell';
import PoemAddModal from '../components/PoemAddModal';
import { useNavigate } from 'react-router-dom';

const Poems = () => {
  const { poems } = useContext(PoemsContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.tokenDashboardPoems)
      navigate('/login');
  });
  poems.map(poem => console.log(poem));
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Poems</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "18%" }}>Description</th>
            <th style={{ width: "18%" }}>Poster</th>
            <th style={{ width: "9%" }}>Rating</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {poems.map((poem, i) => (
            <PoemCell key={poem._id} poem={poem} />
          ))}
        </tbody>
      </Table>
      <PoemAddModal show={show} setShow={setShow} />
    </>
  );
}

export default Poems;
