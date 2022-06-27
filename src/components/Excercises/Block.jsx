import React from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'

function Block(props) {
  return (
    <>
      <div className="w-40 h-40 bg-white m-2 flex flex-col items-center justify-center text-4xl font-bold ">
        <div className="w-10 h-10 bg-green-400 m-2 flex flex-col items-center justify-center text-2xl font-bold text-white hover:cursor-pointer hover:scale-105">
          <AiOutlineArrowUp />
        </div>
        <h1 className="text-black">{props.title}</h1>
        <div className="w-10 h-10 bg-red-400 m-2 flex flex-col items-center justify-center text-2xl font-bold text-white hover:cursor-pointer hover:scale-105">
          <AiOutlineArrowDown />
        </div>
      </div>
    </>
  );
}

export default Block;
