import React from "react";
import Card from "./card";
import airbnbdata from "../data/airbnbdata.js";

const cardArray = airbnbdata.map((item) => {
  return (
    <Card
    {...item}
    />
  );
});
function CardRow() {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap">
      {cardArray}

    </div>
  );
}

export default CardRow;
