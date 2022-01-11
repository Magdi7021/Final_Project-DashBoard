import React, { useEffect, useContext } from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";
import PoemsContext from '../utils/PoemsContext';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const { login } = useContext(PoemsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.tokenDashboardPoems)
    navigate(-1);
      // history.pop();
  });

  return (
    <div className="ms-4">
      <h1>Login</h1>
      <Form className="mt-5" onSubmit={login}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
