import React from "react";
import { AiFillStar } from "react-icons/ai";

function Card(props) {
  return (
    <div className="p-2 min-w-fit">
      <div className="relative ">
        <img src={props.imgsrc} alt="" />
        {props.openSpots === 0 &&<p className="absolute top-3 left-3 px-2 py-2 bg-white text-black text-xs leading-3 rounded-md">sold out</p>}
        {props.openSpots != 0 &&<p className="absolute top-3 left-3 px-2 py-2 bg-white text-black text-xs leading-3 rounded-md">Available</p>}
      </div>
      <div className="p-1">
        <div className="flex flex-row items-center">
          <span className="pr-1 text-[#FE395C] text-2xl">
            <AiFillStar />
          </span>
          <span>
          {props.rating} 

          </span>
          <span className=" pl-1 text-[#918E9B]"> ({props.reviews}) .</span>{" "}
          <span className="text-[#918E9B]">{props.country}</span>{" "}
        </div>
        <div>{props.title}</div>
        <div className="font-bold">
          From {props.price} <span className="font-normal">/ person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
