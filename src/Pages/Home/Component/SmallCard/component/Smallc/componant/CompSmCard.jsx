import React from "react";
import {  useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Comp_SmCard({ url, title }) {
  const flag = useSelector((state) => state.homeReducer.flag);

  return (
    <div className="carousel-item">
      {/* صورة المنتج */}
      <LazyLoadImage

        effect="blur"
        src={url}
        alt={title}
        className="w-full rounded h-[400px]"
        wrapperProps={{
          style: { transitionDelay: "1s" },
        }}

      
      />
    
    </div>
  );
}

export default Comp_SmCard;
