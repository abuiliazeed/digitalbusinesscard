import React from "react";
import swim from "../assets/swim.png";
import { AiFillStar } from "react-icons/ai";

function Card() {
  return (
    <div className="p-2 min-w-fit">
      <div className="relative">
        <img src={swim} alt="" />
        <p className="absolute top-3 left-3 px-2 py-2 bg-white text-black text-xs leading-3 rounded-md">
          sold out
        </p>
      </div>
      <div className="p-1">
        <div className="flex flex-row items-center">
          <span className="pr-1 text-[#FE395C] text-2xl">
            <AiFillStar />
          </span>
          5.0 <span className=" pl-1 text-[#918E9B]"> (6) .</span>{" "}
          <span className="text-[#918E9B]">USA</span>{" "}
        </div>
        <div>Life lessons with Katie Zaferes</div>
        <div className="font-bold">
          From $136 <span className="font-normal">/ person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
