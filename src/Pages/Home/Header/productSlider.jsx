import React, { useState, useEffect } from "react";
import { Virtual, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import Comp_SmCard from "../Component/SmallCard/component/Smallc/componant/CompSmCard";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../Config/firebase";
import { useNavigate } from "react-router-dom";
import "../Component/Slider/Hero.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProductSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "add product"),
      (snapshot) => {
        const productArr = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(productArr);
      }
    );
    return () => unsubscribe(); 
  }, []);

  const nav = useNavigate();
  function goToProducts() {
    nav("/earnings");
  }

  return (
    <div className="mb-24 my-[20px]">
      <div className="flex justify-between items-center my-10">
        <h2
          className=" text-6xl  text-[#025048] "
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          Our Gallary
        </h2>

        <button
          onClick={goToProducts}
          className="bg-[#025048] px-7 py-3 rounded-lg text-white animate-pulse"
        >
          <span className="text-nowrap">See All</span>
        </button>
      </div>

      <Swiper
  className=""
  modules={[Virtual, Autoplay]}
  spaceBetween={10}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
  640: {
      slidesPerView: 1, 
     
    },
    768: {
      slidesPerView: 2, 
      
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>
  {products.map((product) => (
    <SwiperSlide key={product.id}>
      <Comp_SmCard
        url={product.img}
     
      />
  
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
}
