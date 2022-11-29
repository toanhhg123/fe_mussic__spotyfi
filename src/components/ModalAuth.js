import { DatePicker } from "antd";
import React, { useMemo, useState } from "react";
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginReducer, registerReducer } from "../src/features/auth";

const ModalAuth = ({ show, handleClose, type, setType }) => {
  const { error, isLoading, isLogin } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    firstName: "user",
    lastName: "user",
    password: "123123",
    dateOfBirth: "11/02/2002",
    schoolId: "63647ff55ad86d72f4a7a2b8",
    role: "USER",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e?.preventDefault();
    if (type === "login") dispatch(loginReducer(user));
    else if (type === "register") {
      dispatch(registerReducer(user));
    }
  };
  useMemo(() => {
    if (isLogin) handleClose();
  }, [isLogin, handleClose]);

  console.log(user);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type}</Modal.Title>
        {type === "login" ? (
          <Button
            className="btn btn-danger mx-2"
            onClick={() => setType("register")}
          >
            Register
          </Button>
        ) : (
          <Button
            className="btn btn-danger mx-2"
            onClick={() => setType("login")}
          >
            Login
          </Button>
        )}
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
          {type === "register" && (
            <>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>confirmPassword</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>first name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="lastname"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Date: </Form.Label>

                <Form.Control
                  type="date"
                  placeholder="date or birth"
                  onChange={(e) =>
                    setUser({ ...user, dateOfBirth: e.target.value })
                  }
                />
              </Form.Group>
            </>
          )}
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
