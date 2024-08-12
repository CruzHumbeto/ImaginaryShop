import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusIcon, CheckIcon } from "@heroicons/react/16/solid";

function Card(data) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  /*  
  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    console.log(context.cartProducts);
  };
*/

  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);

    const productIndex = context.cartProducts.findIndex(
      (item) => item.id === productData.id
    );

    if (productIndex >= 0) {
      const updatedCartProducts = [...context.cartProducts];
      updatedCartProducts[productIndex].quantity =
        (updatedCartProducts[productIndex].quantity || 1) + 1;
      context.setCartProducts(updatedCartProducts);
    } else {
      context.setCartProducts([
        ...context.cartProducts,
        { ...productData, quantity: 1 },
      ]);
    }

    context.openCheckoutSideMenu();
    console.log(context.cartProducts);
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center m-2 bg-lime-500 w-6 h-6 rounded-full text-white transition transform duration-200 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            context.openCheckoutSideMenu();
          }}
        >
          <CheckIcon className="h-4 w-4" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center m-2 bg-white w-6 h-6 rounded-full transition transform duration-200 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            addProductsToCart(data.data);
          }}
        >
          <PlusIcon className="h-4 w-4" />
        </div>
      );
    }
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure
        className="relative mb-2 w-full h-4/5"
        onClick={() => {
          showProduct(data.data);
        }}
      >
        <span className="absolute bottom-0 right-0 px-2 py-0.5 m-2 bg-white/60 text-black text-xs rounded-lg">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg text-center font-medium min-w-12">
          $ {data.data.price}
        </span>
      </p>
    </div>
  );
}

export default Card;
