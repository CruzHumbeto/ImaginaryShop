import { useContext } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";
import { totalPrice } from "../../utils";
import OrderCard from "../OrderCard";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  //console.log("cart products: ", context.cartProducts);
  //console.log("Product to show: ", context.productToShow);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "11-08-2024",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100vh-56px)] flex-col fixed top-[56px] right-0 backdrop-blur-xl bg-slate-100/80 border border-black rounded-lg overflow-y-scroll`}
    >
      <div className="flex justify-between items-center py-4 px-6">
        <h2 className="font-medium text-xl">MY ORDER</h2>
        <div>
          <XCircleIcon
            className="size-6 hover:text-red-600"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="mx-3 my-2 rounded-lg bg-amber-50">
        {context.cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              quantity={product.quantity || 1}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="w-full px-6 py-4 sticky bottom-0 backdrop-blur-lg">
        <p className="flex justify-between">
          <span className="text-lg font-medium">Total: </span>
          <span className="text-2xl font-bold">
            $ {totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full mx-2 my-1 py-2 rounded-lg bg-slate-900 text-white"
            onClick={() => {
              context.closeCheckoutSideMenu();
              handleCheckout();
            }}
          >
            Chechout my order
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
