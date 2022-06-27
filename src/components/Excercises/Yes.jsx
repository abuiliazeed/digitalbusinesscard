import React, { useState } from "react";
import Block from "./Block";

function Yes() {
  // Yes/no Toggle
  const [result, setResult] = useState("Yes");
  const handleClick = () => {
    if (result === "Yes") {
      setResult("No");
    } else {
      setResult("Yes");
    }
  };

  // Counter
  const [counter, setCounter] = useState(0);
  const handleCountup = () => {
    setCounter(counter + 1);
  };
  const handleCountdown = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  // rows Up/Down
  const [uprow, setUprow] = useState([
    { title: "0" },
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
  ]);
  const [downrow, setDownrow] = useState([
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8" },
    { title: "9" },
  ]);

  const upArrow = (item) => {
    setUprow(...uprow, { item });
    setDownrow(...downrow.filter((item) => item.title !== item));
  };
  const downArrow = (item) => {
    setDownrow(...downrow, { item });
    setUprow(...uprow.filter((item) => item.title !== item));
  };
  const uprowRender = uprow.map((item) => {
    return <Block {...item} 
    onClick={console.log("up")} 
    />;
  });
  const downrowRender = downrow.map((item) => {
    return <Block {...item} 
    onClick={console.log("down")} 
    />;
  });

  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center p-4">
        {/* Yes / NO Toggle */}
        <h1 className="text-white text-4xl font-bold p-4">
          Is state Important to know?
        </h1>
        <div
          onClick={handleClick}
          className="rounded-full bg-white w-60 h-60 flex items-center justify-center m-8 hover:scale-105 hover:cursor-pointer"
        >
          <h1 className="text-[90px] font-bold text-center">{result}</h1>
        </div>

        {/* Counter */}
        <div className="flex items-baseline justify-center ">
          <div
            onClick={handleCountdown}
            className="rounded-full bg-gray-500 w-20 h-20 flex items-center justify-center hover:scale-105 hover:cursor-pointer"
          >
            <h1 className="text-[60px] font-bold text-center text-white">-</h1>
          </div>
          <div
            onClick={handleReset}
            className="rounded-full bg-white w-60 h-60 flex items-center justify-center  hover:scale-105 hover:cursor-pointer"
          >
            <h1 className="text-[90px] font-bold text-center">{counter}</h1>
          </div>
          <div
            onClick={handleCountup}
            className="rounded-full bg-gray-500 w-20 h-20 flex items-center justify-center  hover:scale-105 hover:cursor-pointer"
          >
            <h1 className="text-[60px] font-bold text-center text-white">+</h1>
          </div>
        </div>

        {/* Row changer */}
        <div className="bg-black flex flex-col m-2 items-center justify-center">
          {/* up row */}
          <div className="bg-black flex flex-row m-2 items-center justify-center text-white">
            {uprowRender}
          </div>
          {/* down row */}
          <div className="bg-black flex flex-row m-2 items-center justify-center">
            {downrowRender}
          </div>
        </div>
      </div>
    </>
  );
}

export default Yes;
