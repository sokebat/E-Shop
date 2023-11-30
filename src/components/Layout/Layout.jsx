import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../index.css";
import MyState from "../../contexts/MyState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <MyState>
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
      </MyState>
    </>
  );
};

export default Layout;
