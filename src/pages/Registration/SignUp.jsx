import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-xl w-full max-w-md">
        <h1 className="text-center text-white text-3xl mb-6 font-bold">
          Signup
        </h1>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              className="bg-gray-600 w-full px-4 py-2 rounded-lg text-white placeholder-text-gray-200 outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              className="bg-gray-600 w-full px-4 py-2 rounded-lg text-white placeholder-text-gray-200 outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-red-500 w-full text-white font-bold px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              Signup
            </button>
          </div>
        </form>
        <div className="text-center text-white mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
