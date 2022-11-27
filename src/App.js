import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route element={<PrivateRoute type={["ADMIN"]} />}>
          <Route path="/admin" element={<Admin />}></Route>
        </Route>

        <Route path="*" element={() => <>404</>}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
