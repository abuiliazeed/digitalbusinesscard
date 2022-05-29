import React from "react";
import { HiMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

function Businesscard() {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <div className="text-white w-[550px] h-[868px] bg-[#23252C]">
          <div className="flex flex-col items-center justify-center p-16" >

            <div className="flex flex-col items-center justify-between w-[317px] h-[399px] bg-[#1A1B21]">
              {/* Name */}
              <div className="flex flex-col items-center justify-center p-2">
              <div className="text-white text-3xl">Laura Smith</div>
              <div className="text-[#F3BF99] text-md">Frontend Developer</div>
              <div className="text-white text-sm">laurasmith.website</div>

              </div>


              {/* Buttons */}
              <div className=" flex flex-row items-center justify-between">
                <div className="flex flex-row items-center p-2 justify-center bg-white text-[#374151] w-[115px] h-[34px] text-center rounded-md m-2 ">
                  <div className="p-1"><HiMail /></div>
                  <div className="p-1">Email</div>
                </div>
                <div className="flex flex-row items-center p-2 justify-center  bg-[#5093E2] text-white w-[115px] h-[34px] text-center rounded-md m-2 ">
                  <div className="p-1"><FaLinkedin /></div>
                  <div className="p-1">Linkedin</div>
                </div>
              </div>

              {/* About */}
              <div className="py-2 px-10">
                <div className=" text-lg font-bold">About</div>
                <div className=" text-xs font-thin leading-4">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
              </div>

              {/* Interests */}
              <div className="py-4 px-10">
                <div className=" text-lg font-bold ">Interests</div>
                <div className=" text-xs font-thin leading-4">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
              </div>



            </div>



          </div>
        </div>
      </div>

    </>
  );
}

export default Businesscard;
