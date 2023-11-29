import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            Products
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Cart
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
