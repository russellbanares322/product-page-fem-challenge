import { useState, createContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  return (
    <ProductContext.Provider value={{ quantity, cart, setQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
