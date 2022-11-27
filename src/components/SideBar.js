import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav id="latNav" className="w-100 pt-4 d-flex flex-column">
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
        <li className="nav-item">
          <a href="#/" className="nav-link">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
            </svg>{" "}
            Your Library
          </a>
        </li>
      </ul>

      <div id="underList">
        <button>
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

        <button>
          <div className="heart_bttn">
            <svg
              role="img"
              height="12"
              width="12"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
            </svg>
          </div>
          Liked Songs
        </button>
      </div>

      <hr className="mx-4 mb-0 mt-2" />

      <ul id="playlistSidebar" className="nav px-2">
        <li className="nav-item">
          <a
            href="https://open.spotify.com/playlist/3DCIpP8UPdnLnUGsuEsr97"
            className="nav-link"
          >
            <br />
            sleep deprived
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://open.spotify.com/playlist/5lwd9A96hNLfiYCLKBQRN2"
            className="nav-link"
          >
            adrenaline rush
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://open.spotify.com/playlist/0q0SddIoqUIMGm3Sgz3oMi"
            className="nav-link"
          >
            impulse
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://open.spotify.com/playlist/5ZPjSoSwQs5QVlZDZjfiFI"
            className="nav-link"
          >
            sixth gear
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://open.spotify.com/playlist/3zA5kLtGx3ghhhdoO7mdvF"
            className="nav-link"
          >
            3:14 am
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://open.spotify.com/playlist/60HGr7YPE45JP6xaTWSbg4"
            className="nav-link"
          >
            serenity
          </a>
        </li>
      </ul>

      <a href="login.html" id="installApp" className="d-block px-4 py-2">
        Log Out
      </a>
      <a href="#/" id="installApp" className="d-block px-4 py-2">
        <svg role="img" height="24" width="24" viewBox="0 0 24 24">
          <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
          <path d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path>
        </svg>{" "}
        Install App
      </a>
    </nav>
  );
};

export default SideBar;
