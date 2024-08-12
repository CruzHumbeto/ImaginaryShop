import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart - Increment quantity
  const [count, setCount] = useState(0);

  // shoppping cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // shoppping cart - add or update the product quantity
  const updateProductQuantity = (id, quantity) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: quantity } : product
      )
    );
  };

  // Product detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product detail - show product
  const [productToShow, setProductToShow] = useState({});

  // Chechout side menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Chechout side menu - checkout order
  const [order, setOrder] = useState([]);

  console.log("Count " + count);
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        updateProductQuantity,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
