import React from "react";
import Card from "./card";
import airbnbdata from "../data/airbnbdata.js";

const cardArray = airbnbdata.map((item) => {
  return (
    <Card
      imgsrc={item.imgsrc}
      status={item.status}
      rating={item.rating}
      reviews={item.reviews}
      country={item.country}
      title={item.title}
      price={item.price}
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
