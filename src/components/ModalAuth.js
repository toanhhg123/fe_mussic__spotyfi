import React, { useMemo, useState } from "react";
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../src/features/auth";

const ModalAuth = ({ show, handleClose, type }) => {
  const { error, isLoading, isLogin } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e?.preventDefault();
    dispatch(loginReducer(user));
  };
  useMemo(() => {
    if (isLogin) handleClose();
  }, [isLogin, handleClose]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant={"danger"}>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          {isLoading && (
            <Spinner
              as="span"
              animation="border"
              className="mx-2"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          {type}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAuth;
