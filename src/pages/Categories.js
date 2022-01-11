import React, { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import PoemsContext from '../utils/PoemsContext';
import CategoryCell from '../components/CategoryCell';
import { useNavigate } from 'react-router-dom';
import CategoryAddModal from '../components/CategoryAddModal';


const Categories = () => {
  const { categories } = useContext(PoemsContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.tokenDashboardPoems)
      navigate('/login');
  });

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Categories</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "20%" }}>#</th>
          <th style={{ width: "30%" }}>Name</th>
          <th style={{ width: "40%" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <CategoryCell key={category._id} category={category} />
          ))}
      </tbody>
      </Table>
      <CategoryAddModal show={show} setShow={setShow} />
    </>
  );
}

export default Categories;
