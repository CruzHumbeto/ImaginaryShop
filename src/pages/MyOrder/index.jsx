import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../../components/OrderCard";
import Layout from "../../components/Layuot";
import { ChevronDoubleLeftIcon } from "@heroicons/react/16/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  //console.log("my order", context.order);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className="w-80 my-4 flex items-center justify-center relative">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="w-5 h-5 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="mx-3 my-2 rounded-lg bg-amber-50">
        {context.order?.[index].products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              quantity={product.quantity || 1}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default MyOrder;
