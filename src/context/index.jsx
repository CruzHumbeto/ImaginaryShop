import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Get products
  const [items, setItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by category
  const [filteredCategoryItems, setFilteredCategoryItems] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("");

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

  // Get products from API
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // Get products by title - filtering
  const filteredItemsByTitle = (items, serchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(serchByTitle.toLowerCase())
    );
  };
  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle]);

  // Get products by category
  const filteredItemsByCategory = (items, category) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(category.toLowerCase())
    );
  };
  useEffect(() => {
    setFilteredCategoryItems(filteredItemsByCategory(items, currentCategory));
  }, [items, currentCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItems,
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
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        filteredCategoryItems,
        setFilteredCategoryItems,
        currentCategory,
        setCurrentCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
