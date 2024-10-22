/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// import React from "react";
import Slider from "./Component/Slider/Slider";
import RoundedCard from "./Component/RoundedCard/RoundedCard";

import Login from "./Component/LoginModal/Login";

import ImgCard from "./Component/ImgCard/ImgCard";
import Eventshome from "./Header/Eventshome";
import Actions from "./Header/Actions";
import Gallery from "./Component/Gallery/Gallery";
import ProductSlider from "./Header/productSlider";
import "../Home/Component/Slider/Hero.css";

function MainContent() {
  return (
    <>
    <div className="w-[95%] mx-auto ">
      <Login />
      <Slider />
      <ImgCard />
    </div>
      <RoundedCard />
      <ProductSlider />
      <Eventshome />
      <Gallery />
      <Actions />
    </>
  );
}

export default MainContent;
