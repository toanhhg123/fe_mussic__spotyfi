import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../src/features/auth";
import ModalAuth from "./ModalAuth";
import { getAllMussic } from "../Api/mussic.axios";
import { getAllMussicReduce } from "../src/features/mussic";

const Head = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropDownUser, setShowDropDownUser] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [typeAuth, setTypeAuth] = useState("login");
  const [keyword, setKeyWord] = useState("");
  const {
    isLogin,
    data: { userInfo },
  } = useSelector((state) => state.auth);
  return (
    <nav
      id="topNav"
      className="d-flex justify-content-between align-items-center px-4 py-2"
    >
      <ModalAuth
        show={show}
        handleClose={handleClose}
        type={typeAuth}
        setType={setTypeAuth}
      />
      <div id="arrowMenu">
        <InputGroup className="mb-3">
          <InputGroup.Text
            id="basic-addon1"
            role={"button"}
            onClick={() => {
              dispatch(getAllMussicReduce({ keyword }));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </InputGroup.Text>
          <Form.Control
            placeholder="search"
            aria-label="search"
            aria-describedby="basic-addon1"
            onChange={(e) => setKeyWord(e.target.value)}
          />
        </InputGroup>
      </div>

      <div id="btnTopNav" className="d-flex">
        {isLogin ? (
          <div className="dropdown ms-3" id="user_bttn">
            <button
              className="btn btn-secondary"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setShowDropDownUser(!showDropDownUser)}
            >
              <div className="imgUsuario bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </div>
              {userInfo.lastName}
            </button>
            <div
              className={`dropdownMenuButton1-dropContent ${
                showDropDownUser && "show"
              }`}
            >
              <span
                role={"button"}
                href="./login.html"
                onClick={() => {
                  dispatch(logOut());
                  setShowDropDownUser(false);
                  navigate("/home");
                }}
              >
                Log Out
              </span>
            </div>
          </div>
        ) : (
          <div className="dropdown ms-3" id="user_bttn">
            <button
              className="btn btn-secondary"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={handleShow}
            >
              <div className="imgUsuario bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </div>
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Head;
