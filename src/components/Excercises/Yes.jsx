import React,{useState} from "react";

function Yes() {
   const [result, setResult] =  useState("Yes")
   const handleClick = () => {
    if (result === "Yes") {setResult("No")}else {setResult("Yes")}
} 

const [counter, setCounter] = useState(0);
const handleCountup = () => {
    setCounter(counter + 1);
}
const handleCountdown = () => {
    setCounter(counter - 1);
}
const handleReset = () => {
    setCounter(0);
}



  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center p-4">
        <h1 className="text-white text-4xl font-bold p-4">Is state Important to know?</h1>
        <div onClick={handleClick} className="rounded-full bg-white w-60 h-60 flex items-center justify-center m-8 hover:scale-105 hover:cursor-pointer">
          <h1 className="text-[90px] font-bold text-center">{result}</h1>
        </div>

        <div className="flex items-baseline justify-center ">
        <div onClick={handleCountdown} className="rounded-full bg-gray-500 w-20 h-20 flex items-center justify-center hover:scale-105 hover:cursor-pointer">
          <h1 className="text-[60px] font-bold text-center text-white">-</h1>
        </div>
        <div onClick={handleReset} className="rounded-full bg-white w-60 h-60 flex items-center justify-center  hover:scale-105 hover:cursor-pointer">
          <h1 className="text-[90px] font-bold text-center">{counter}</h1>
        </div>
        <div onClick={handleCountup} className="rounded-full bg-gray-500 w-20 h-20 flex items-center justify-center  hover:scale-105 hover:cursor-pointer">
          <h1 className="text-[60px] font-bold text-center text-white">+</h1>
        </div>

        </div>
        

      </div>
    </>
  );
}

export default Yes;
