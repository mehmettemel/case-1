import React, { useState, createContext } from "react";

const BasketContext = createContext();

function BasketProvider(props) {
  const [Baskets, setBaskets] = useState([]);

  return (
    <BasketContext.Provider value={[Baskets, setBaskets]}>
      {props.children}
    </BasketContext.Provider>
  );
}

export { BasketContext, BasketProvider };
