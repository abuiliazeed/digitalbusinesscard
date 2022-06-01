import React from "react";
import {MdLocationOn} from 'react-icons/md'
function JournalCard(props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row  border-gray-100 border-b max-w-[75%] ">
          <div className="px-4 py-4 min-w-max">
            <img src={props.image} alt="" />
          </div>
          <div className="flex flex-col p-4 items-start">
              <div className="flex items-center">
                  <span className="mr-1 text-[#F55A5A] "><MdLocationOn /></span>
                  <span className="mr-4 uppercase">{props.country}</span>
                  <span><a href={props.geolink} className="underline text-[#918E9B]">View on Google Maps</a></span>
                  </div>
              <div className="text-2xl font-bold mb-2">{props.title}</div>
              <div>
                  <span className="font-bold">{props.startdate}</span> - <span className="font-bold">{props.enddate}</span>
              </div>
              <div>{props.description}</div>
          </div>
        </div>
      </div>

   

    </>
  );
}

export default JournalCard;
