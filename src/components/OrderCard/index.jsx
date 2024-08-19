import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { TrashIcon } from "@heroicons/react/16/solid";

function OrderCard(props) {
  const { id, title, imageUrl, price, handleDelete, quantity } = props;
  const context = useContext(ShoppingCartContext);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    context.updateProductQuantity(id, newQuantity);
  };

  let renderDeleteButton;
  if (handleDelete) {
    renderDeleteButton = (
      <button
        className="p-2 rounded-lg flex shadow-lg text-gray-400 hover:text-gray-600"
        onClick={() => handleDelete(id)}
      >
        Remove
        <TrashIcon className="size-6" />
      </button>
    );
  }

  let renderQuantity;
  if (handleDelete) {
    renderQuantity = (
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={handleQuantityChange}
        className="w-1/6 h-4 text-center"
      />
    );
  } else {
    renderQuantity = (
      <p className="w-full mt-4">
        <span className="text-sm font-medium"> Quantity product: </span>
        <span className="text-md font-semibold">{quantity}</span>
      </p>
    );
  }

  return (
    <article className="p-2 flex justify-between items-center">
      <figure className="w-20 h-20">
        <img src={imageUrl} alt={title} className="w-full h-full rounded-lg " />
      </figure>
      <div className="p-2">
        <p className="flex justify-between">
          <span className="max-w-[152px] font-medium text-sm">{title}</span>
          <span className=" mx-2 font-semibold text-lg">
            $ {price * quantity}
          </span>
        </p>
        <div className="flex justify-around items-center">
          {renderQuantity}
          {renderDeleteButton}
        </div>
      </div>
    </article>
  );
}

export default OrderCard;
