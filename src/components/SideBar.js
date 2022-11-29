import { Input, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPlayList } from "../src/features/playList";

const SideBar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setName] = useState("");
  const { playLists } = useSelector((state) => state.playList);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    if (name) {
      dispatch(addPlayList(name));
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    }
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <nav id="latNav" className="w-100 pt-4 d-flex flex-column">
      <Modal
        title="Name PlayList"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
      <a href="#/" className="d-flex px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-spotify"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
        </svg>
        <span
          className="fw-semibold ms-2"
          style={{
            fontSize: "1.5em",
          }}
        >
          Spotify
        </span>
      </a>

      <ul className="nav flex-column px-2 my-4">
        <li className="nav-item">
          <Link to="/" className="nav-link ativo">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
            </svg>{" "}
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/admin"} className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
            Admin
          </Link>
        </li>
      </ul>

      <div id="underList">
        <button onClick={showModal}>
          <div className="plus_bttn">
            <svg
              role="img"
              height="12"
              width="12"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
            </svg>
          </div>
          Create Playlist
        </button>
        <ul className="list-playList">
          {playLists.map((x) => (
            <li>
              <Link to={"/playlist/" + x.name}>{x.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <hr className="mx-4 mb-0 mt-2" />
    </nav>
  );
};

export default SideBar;
