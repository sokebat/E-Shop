import React, { useContext } from "react";
import Image from "../../components/MainImage/Image";
import ProductCard from "../../components/ProductCard/ProductCard";
import Testimonal from "../../components/Testimonial/Testimonial";
import MyContext from "../../contexts/MyContext";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };
  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };
  return (
    <>
      <Image />
      <ProductCard />
      <Filter />
      <Testimonal />
      <button onClick={addCart}> add</button>
      <button onClick={deleteCart}> del</button>
    </>
  );
};

export default Home;
