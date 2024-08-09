import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusIcon } from "@heroicons/react/16/solid";

function Card(data) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
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
          alt="imagen Audifonos"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center m-2 bg-white w-6 h-6 rounded-full transition transform duration-200 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            context.setCount(context.count + 1);
          }}
        >
          <PlusIcon className="h-4 w-4" />
        </div>
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
