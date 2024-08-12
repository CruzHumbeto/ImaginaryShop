import { useState, useEffect } from "react";

import Layout from "../../components/Layuot";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      Home
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center w-full max-w-screen-lg">
        {items?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;
