import { totalPrice } from "../../utils";
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;
  return (
    <article className="p-2 m-2 flex justify-between items-center border-blacks rounded-lg bg-amber-50">
      <div className="p-2">
        <p className="flex justify-between mx-3">
          <CalendarDaysIcon className="mx-2 size-7" />

          <span className=" mr-2 font-light text-lg">Date: </span>
          <span className="font-semibold text-lg">17-8-2024</span>
        </p>
        <p className="flex justify-between mx-3">
          <ShoppingCartIcon className="mx-2 size-7 " />

          <span className=" mr-2 font-light text-lg">Total products: </span>
          <span className="font-semibold text-lg">{totalProducts}</span>
        </p>
      </div>
      <div className="flex items-center">
        <p className="mx-2 flex justify-between items-center">
          <CurrencyDollarIcon className="size-7 mx-1" />
          <span className="font-bold text-xl">{totalPrice}</span>
        </p>

        <ChevronDoubleRightIcon className="mx-1 size-5" />
      </div>
    </article>
  );
}

export default OrdersCard;
