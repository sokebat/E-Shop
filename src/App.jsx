import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Layout,
  Login,
  Signup,
  NoPage,
  Home,
  ProductInfo,
  Cart,
  Dashboard,
  UpdateProduct,
  AddProduct,
  Order,
} from "./pages/index";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<Order />} />
      <Route
        path="/dashboard"
        element={
          // <ProtectedRoutesForAdmin>
          <Dashboard />
          // </ProtectedRoutesForAdmin>
        }
      />
      <Route
        path="/updateproduct"
        element={
          // <ProtectedRoutesForAdmin>
          <UpdateProduct />
          // </ProtectedRoutesForAdmin>
        }
      />
      <Route
        path="/addproduct"
        element={
          // <ProtectedRoutesForAdmin>
          <AddProduct />
          // </ProtectedRoutesForAdmin>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/productinfo/:id" element={<ProductInfo />} />
      <Route path="/*" element={<NoPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "chilpill@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
