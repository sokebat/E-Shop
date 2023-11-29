import React, { useContext } from "react";
import Image from "../../components/MainImage/Image";
import ProductCard from "../../components/ProductCard/ProductCard";
import Testimonal from "../../components/Testimonial/Testimonial";
import MyContext from "../../contexts/MyContext";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  return (
    <>
      <Image />
      <ProductCard />
      <Filter />
      <Testimonal />
    </>
  );
};

export default Home;
