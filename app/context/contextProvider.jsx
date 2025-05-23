"use client";
import { useState } from "react";
import { cartContext } from "./context.js";

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextProvider;
