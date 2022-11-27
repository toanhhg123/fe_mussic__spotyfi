import React from "react";

const FeedHeader = () => {
  return (
    <section id="feedHeader">
      <h2 className="fw-bold" id="greeting">
        Welcome Back
      </h2>

      <ul id="playlistsRecentes" className="mb-5">
        <li>
          <img src="./assets/1.jpeg" alt="playlist.nome" />
          <span className="fw-semibold ms-3 me-auto">sleep deprived</span>
          <button type="button" className="btn me-3">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </button>
        </li>

        <li>
          <img src="./assets/2.jpeg" alt="playlist.nome" />
          <span className="fw-semibold ms-3 me-auto">adrenaline rush</span>
          <button type="button" className="btn me-3">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </button>
        </li>

        <li>
          <img src="./assets/3.jpeg" alt="playlist.nome" />
          <span className="fw-semibold ms-3 me-auto">impulse</span>
          <button type="button" className="btn me-3">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </button>
        </li>

        <li>
          <img src="./assets/4.jpeg" alt="playlist.nome" />
          <span className="fw-semibold ms-3 me-auto">sixth gear</span>
          <button type="button" className="btn me-3">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </button>
        </li>

        <li>
          <img src="./assets/5.jpeg" alt="playlist.nome" />
          <span className="fw-semibold ms-3 me-auto">3:14 am</span>
          <button type="button" className="btn me-3">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </button>
        </li>

        <li>
          <img src="./assets/6.jpeg" alt="playlist.nome" />
          <span className="fw-semibold ms-3 me-auto">serenity</span>
          <button type="button" className="btn me-3">
            <svg role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default FeedHeader;
