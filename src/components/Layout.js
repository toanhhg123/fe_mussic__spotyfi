import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div id="principal" className="d-flex flex-1">
        <SideBar />
        <div id="feed" className="w-100">
          <Head />
          <main id="main" className="p-4">
            {children}
          </main>
        </div>
      </div>
      <div id="mobiPlay">
        <button type="button" id="mobibtn">
          <svg role="img" height="24" width="24" viewBox="0 0 24 24">
            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Layout;
