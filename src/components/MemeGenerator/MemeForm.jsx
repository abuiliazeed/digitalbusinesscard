import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import memesData from "../../data/memesData";

function MemeForm() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center p-2">
        <input
          type="text"
          placeholder="Top text"
          className="border rounded-md border-gray-200 m-2 text-lg p-2  max-w-md focus:outline-[#A626D3] hover:border-[#A626D3]"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="border rounded-md border-gray-200 m-2 text-lg p-2  max-w-md focus:outline-[#A626D3] hover:border-[#A626D3]"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          className="rounded-md p-2 flex flex-row items-center justify-center bg-gradient-to-r from-[#672280]  to-[#A626D3] text-white text-lg max-w-lg w-[80%] hover:scale-105"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
        <img
          src={memeImage}
          alt=""
          className=" max-w-lg py-6 "
        />
      </div>
    </>
  );
}

export default MemeForm;
