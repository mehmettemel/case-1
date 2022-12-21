import React, { useContext, useEffect, useRef } from "react";
import { BasketContext } from "../BasketContext";
import AppleImage from "../public/apple.svg";

const Apple = ({ position, count, drop }) => {
  const appleEl = useRef(null);
  const [Baskets, setBaskets] = useContext(BasketContext);
  useEffect(() => {
    if (drop) {
      setTimeout(() => {
        appleEl.current.classList.add("topToBottom");
      }, count * 1000);
      setTimeout(() => {
        setBaskets((prev) => {
          return [...prev, { count: count }];
        });
      }, count * 3000);
    }
  }, [drop]);

  return (
    <div ref={appleEl} className={`w-12 h-12 absolute z-20 mt-2  ${position}`}>
      <AppleImage />
    </div>
  );
};

export default Apple;
