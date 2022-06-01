import React from "react";
import group from "../../assets/group.png";

function Hero() {

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="p-6 max-w-4xl ">
        <img src={group} alt="" className="" />
      </div>

      <div className=" p-8 max-w-4xl">
        <h1 className="text-4xl font-bold p-2">Online Experiences</h1>
        <p className="text-lg p-2">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>

    </div>
  );
}

export default Hero;
