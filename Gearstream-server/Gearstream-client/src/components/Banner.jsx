import React from "react";
import bannerImg from "/images/home/bannerimg.png";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
        </div>

        <div className="md:w-1/2 px-4 space-y-7">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Elevate Your Production with <span className="text-deepblue">GearStream</span>
          </h2>
          <p className="text-orange text-xl">
            Welcome to GearStream your ultimate destination for premium video and photo production equipment rental
          </p>
          <button className="bg-deepblue font-semibold btn text-white px-8 py-3 rounded-full">
            Rent Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;