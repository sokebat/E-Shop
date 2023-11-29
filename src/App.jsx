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
} from "./pages/index";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/updateproduct" element={<UpdateProduct />} />
      <Route path="/addproduct" element={<AddProduct />} />
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
