import React from "react";
import PlayMussic from "./PlayMussic";

const Footer = () => {
  return (
    <div id="footer">
      <div id="audioBar" className="p-3 d-flex justify-content-between">
        <div id="musicaPlay"></div>

        <div id="botomIcon">
          <ul className="nav flex-row px-2 my-4">
            <li className="nav-item">
              <a
                href="/#"
                className="nav-link ativo d-flex flex-column align-items-center"
              >
                <svg
                  role="img"
                  height="20"
                  width="20"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
                </svg>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#"
                className="nav-link d-flex flex-column align-items-center"
              >
                <svg
                  role="img"
                  height="20"
                  width="20"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                </svg>
                Search
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#"
                className="nav-link d-flex flex-column align-items-center"
              >
                <svg
                  role="img"
                  height="20"
                  width="20"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
                </svg>
                Your Library
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="nav-link d-flex flex-column align-items-center"
              >
                <svg
                  role="img"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 3 16 10"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"></path>
                </svg>
                Get App
              </a>
            </li>
          </ul>
        </div>

        <PlayMussic />
      </div>
    </div>
  );
};

export default Footer;
