import { useContext } from "react";

import { ShoppingCartContext } from "../../context";
import Layout from "../../components/Layuot";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

function Home() {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    const itemsToRender =
      context.searchByTitle?.length > 0 ? context.filteredItems : context.items;
    if (itemsToRender?.length > 0) {
      return itemsToRender.map((item) => <Card key={item.id} data={item} />);
    } else {
      return (
        <div className="m-10 p-4 h-44 col-span-5 flex flex-col items-center justify-center bg-amber-50 rounded-lg">
          <FaceFrownIcon className="m-2 size-20" />
          <h2>{"Sorry, we can't find your product"}</h2>
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="m-2 p-1 ">
        <h1 className="text-center text-lg font-medium">Our Products</h1>
        <input
          type="text"
          placeholder="find your products"
          className="mb-2 p-2 w-72 text-center text-sm border border-black rounded-lg focus:outline-none focus:shadow-lg"
          onChange={(e) => context.setSearchByTitle(e.target.value)}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:max-w-screen-xl justify-items-center w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;
