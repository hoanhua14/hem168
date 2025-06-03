import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { addItem, removeItem } from "../features/cartSlice";
export default function Summary() {
  const formatVND = (number) =>
    number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      {console.log(items)}
      <div>
        {items.map((item, index) => (
          <h1 key={index}>
            {item.name}, {formatVND(item.price)}, {item.quantity},
            <button onClick={() => dispatch(addItem(item))}>+</button>
            <button onClick={() => dispatch(removeItem(item))}>-</button>
          </h1>
        ))}
      </div>
      <div>Total is {formatVND(totalPrice)}</div>
    </>
  );
}
