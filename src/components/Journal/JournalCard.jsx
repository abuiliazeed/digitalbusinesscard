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
                  <span className="mr-1">{props.country}</span>
                  <span><a href={props.geolink}>View on Google Maps</a></span>
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
