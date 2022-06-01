import React from "react";
import { AiFillStar } from "react-icons/ai";

import axios from 'axios';


axios.defaults.headers.common = {'Authorization': `bearer 4a7d7af2bb39a3f73709699945644377183125913489f14c05be5ca4d76a9d4cf49fe74848531b235774705da5e6ce3eab8e5d1583dfa329df8010a04b91792bdce18dc4790317bea87f40bcf2ddd9395354bd35e862290c7488573fff5da16dc1bee192ad8f009d6f7fc3aed222dd7dacdd08fcc29f62d61e3fa19d979a47a2`}

axios.get('http://localhost:1337/api/animals').then(response => {
  console.log(response.data.data);
});

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
