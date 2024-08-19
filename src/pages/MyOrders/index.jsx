import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import Layout from "../../components/Layuot";
import OrdersCard from "../../components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My Orders
      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        );
      })}
    </Layout>
  );
}

export default MyOrders;
