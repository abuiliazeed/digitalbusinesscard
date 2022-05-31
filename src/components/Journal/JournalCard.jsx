import React from "react";

function JournalCard(props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row  border-gray-100 border-b max-w-[75%] ">
          <div className="px-4 py-4 min-w-max">
            <img src={props.image} alt="" />
          </div>
          <div className="flex flex-col p-4 items-start">
              <div className="">
                  <span>{props.country}</span><span>{props.geolink}</span>
                  </div>
              <div>{props.title}</div>
              <div>
                  <span>{props.startdate}</span>-<span>{props.enddate}</span>
              </div>
              <div>{props.description}</div>
          </div>
        </div>
      </div>

   

    </>
  );
}

export default JournalCard;
