import React, { useContext } from "react";
import { BasketContext } from "../BasketContext";
import BasketImage from "../public/basket.svg";
import AppleImage from "../public/apple.svg";

const AppleBasket = () => {
  const [Baskets, setBaskets] = useContext(BasketContext);
  const renderApples = (Baskets) => {
    return Baskets.map((apple, index) => (
      <div key={index} className="w-8 h-8 top-0 left-0">
        <AppleImage />
      </div>
    ));
  };
  return (
    <div className="w-28 h-32  mx-auto z-50 relative">
      <BasketImage />
      <div className="flex absolute bottom-5 left-2">
        {Baskets.length > 0 && renderApples(Baskets)}
      </div>
    </div>
  );
};

export default AppleBasket;
