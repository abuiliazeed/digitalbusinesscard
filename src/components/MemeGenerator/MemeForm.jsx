import React from "react";
import { BsCardImage } from "react-icons/bs";

function MemeForm() {
  return (
    <>
      <form>
        <div className="flex flex-row justify-center p-2">
          <input
            type="text"
            placeholder="Top Text"
            className="border rounded-md border-gray-200 m-2 text-lg p-2 min-w-[40%] focus:outline-[#A626D3] hover:border-[#A626D3]"
          />
          <input
            type="text"
            placeholder="Bottom Text"
            className="border rounded-md border-gray-200 m-2 text-lg p-2 min-w-[40%] focus:outline-[#A626D3] hover:border-[#A626D3]"
          />
        </div>

        <div className="flex justify-center">
          <button className="rounded-md p-2 flex flex-row items-center justify-center bg-gradient-to-r from-[#672280]  to-[#A626D3] text-white text-lg w-[80%] hover:scale-105">
            Get a new meme image{" "}
            <BsCardImage className="ml-2 text-green-500 border-yellow-500 border-2" />
          </button>
        </div>
      </form>
    </>
  );
}

export default MemeForm;
