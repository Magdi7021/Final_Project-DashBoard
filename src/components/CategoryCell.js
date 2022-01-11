import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CategoryDeleteModal from './CategoryDeleteModal';
import CategoryEditModal from './CategoryEditModal';
import CategoryViewModal from './CategoryViewModal';

const CategoryCell = (props) => {
  const { category } = props;
  const [viewShow, setViewShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word", maxHeight: "200px" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{category._id}</td>
        <td>{category.name}</td>
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
        <CategoryViewModal show={viewShow} setShow={setViewShow} category={category} />
        <CategoryDeleteModal show={deleteShow} setShow={setDeleteShow} categoryId={category._id} />
        <CategoryEditModal show={editShow} setShow={setEditShow} category={category} />
      </tr>
    </>
  );
}

export default CategoryCell;
