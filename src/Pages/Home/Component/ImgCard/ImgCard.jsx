
import React from "react";
import "../../Component/Slider/Hero.css";


function ImgCard() {
  return (
    <>

      <div className="">

        <div className="  page-fade-in  ">
            <h1 className="text-6xl  text-[#025048] ml-[160px] " style={{fontFamily:"Abril Fatface, serif"}}> About Us </h1>
          <div className="flex justify">
            <div className="">
              <img
                src="./src/assets/imges/heroo.jpeg"
                alt="Image"
                className="rounded-lg shadow-lg h-[500px]"
              />
            </div>

            <div className=" h-96 bg-[#6A9C89] p-20 rounded-lg shadow-lg w-[1100px]  about">
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "Abril Fatface, serif" }}
              >
                About Us !
              </h2>
              <p className="text-white mb-6 text-xl">
                Our platform is the perfect destination for art and handmade
                craft lovers, where artists can showcase their handmade
                creations for sale or organize exclusive art auctions. The
                platform also offers the opportunity to participate in special
                events, both online and offline, with easy ticket booking. We
                provide a comprehensive experience that blends creativity, art,
                and community engagement, giving customers multiple options to
                purchase art or attend events
              </p>
            </div>
          </div>
        </div>

     
      </div>
    </>
  );
}

export default ImgCard;


