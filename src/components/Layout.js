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
    </>
  );
};

export default Layout;
