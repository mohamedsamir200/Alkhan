import React from "react";
import pic1 from "../../../../assets/imges/newww/pic1.jpeg";
import hero from "../../../../assets/imges/hero.jpg";
function Slider() {
  return (
    <>
      <section className=" page-fade-in flex justify-between items-center">
        <div
          className="w-[50%]
         Md:w-full Md:text-center
         
         "
        >
          <div className=" flex flex-col    ">
            <p className=" text-6xl   text-[#344646] top">
              <span className="text-[#6A9C89]">One</span> of aKind
            </p>
            <p className=" ms-16 leading-normal    text-6xl text-[#344646] Md:text-5xl Md:ms-[0px]">
              Just Like{" "}
              <span span className="text-[#6A9C89]">
                You
              </span>
              .
            </p>
            <p className=" text-2xl   leading-normal  text-[#344646] top">
              "AlKhan" offers unique handmade crafts and antiques, blending
              heritage and creativity. we connect you to the world through
              authentic artistry.
            </p>
          </div>
        </div>
        <div className="  relative Md:hidden">
          <div className="relative z-10 end-[7rem] top-8">
            <img
              src={pic1}
              className="h-[690px] w-[300px] rounded-[200px]"
              alt="nnn"
              loading="lazy"
            />
          </div>
          <img
            src={hero}
            className="h-[650px] w-[350px] rounded-b-[200px] absolute top-0 "
            alt="nnn"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Slider;
