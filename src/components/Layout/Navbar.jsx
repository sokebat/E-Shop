import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import MyContext from "../../contexts/MyContext";


const Navbar = () => {
  const context = useContext(MyContext)
  const { toggleMode, mode } = context
  return (
    <nav className="bg-zinc-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold">
          E-Shop
        </Link>
        <div className="space-x-4">
          <Link
            to="/products"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            All Products
          </Link>
          <Link
            to="/order"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Order
          </Link>
          <Link
            to="/dashboard"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Admin
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Cart
          </Link>
          <button className="" onClick={toggleMode}>
            {mode === "light" ? (
              <FiSun className="text-white" size={30} />
            ) : "dark" ? (
              <BsFillCloudSunFill className="text-white" size={30} />
            ) : (
              "gdsg"
            )}
          </button>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
