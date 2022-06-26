import React,{useState} from "react";

function Yes() {
   const [result, setResult] =  useState("Yes")
   const handleClick = () => {
    if (result === "Yes") {setResult("No")}else {setResult("Yes")}
} 
  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center p-4">
        <h1 className="text-white text-4xl font-bold p-4">Is state Important to know?</h1>
        <div onClick={handleClick} className="rounded-full bg-white w-60 h-60 flex items-center justify-center m-8 hover:scale-105 hover:cursor-pointer">
          <h1 className="text-[90px] font-bold text-center">{result}</h1>
        </div>
      </div>
    </>
  );
}

export default Yes;
