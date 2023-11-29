import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../index.css";
import MyState from "../../contexts/MyState";

const Layout = () => {
  return (
    <>
      <MyState>
        <Navbar />
        <Outlet />
        <Footer />
      </MyState>
    </>
  );
};

export default Layout;
