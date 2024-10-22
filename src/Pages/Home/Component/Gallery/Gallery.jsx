


// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "./component/Title";
import ArtistSlider from "./component/ArtistSlider";
import "../../Component/Slider/Hero.css"




function Gallery() {
  return (
    <section className="mt-40 animate-slide-up">
      <div className="  flex flex-col pb-10">
        <Title />
        <ArtistSlider />
      </div>
    </section>
  );
}

export default Gallery;
