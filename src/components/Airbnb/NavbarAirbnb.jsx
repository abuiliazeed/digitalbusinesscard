import React from "react";
import airbnb from "../../assets/airbnb.png";

function NavbarAirbnb() {
  return (
    <>
      <div className="rounded-md shadow-md py-8 px-6">
        <img src={airbnb} alt="" />
      </div>
    </>
  );
}

export default NavbarAirbnb;
