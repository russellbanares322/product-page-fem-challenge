import { useState, createContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        quantity,
        isAddedToCart,
        setQuantity,
        setIsAddedToCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
