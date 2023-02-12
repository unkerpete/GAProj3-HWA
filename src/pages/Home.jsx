import React from "react";
import Hero from "../Components/Home/Hero";
import Category from "../Components/Home/Category";
import Usp from "../Components/Home/Usp";
import Blog from "../Components/Home/Blog";
import Banner from "../Components/Home/Banner";
import Cta from "../Components/Home/Cta";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Usp />
      <Blog />
      <Banner />
      <Cta />
    </div>
  );
};
export default Home;
