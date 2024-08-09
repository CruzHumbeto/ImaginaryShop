import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";

function ProductDetail() {
  const context = useContext(ShoppingCartContext);
  console.log("Product to show: ", context.productToShow);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100vh-56px)] flex-col fixed top-[56px] right-0 backdrop-blur-xl bg-slate-100/80 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XCircleIcon
            className="size-6 hover:text-red-600"
            onClick={() => context.closeProductDetail()}
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          alt={context.productToShow.title}
          src={context.productToShow.images}
          className="w-full h-full rounded-lg"
        />
      </figure>
      <p className="p-8 flex flex-col">
        <span className="font-bold text-2xl">
          $ {context.productToShow.price}
        </span>
        <span className="font-semibold text-md bg-amber-50">
          {context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
}

export default ProductDetail;
