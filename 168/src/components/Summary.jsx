import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { addItem, removeItem } from "../features/cartSlice";
import EmptyCart from "./EmptyCart";
export default function Summary() {
  const formatVND = (number) =>
    number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const { name, add, phone, deliveryTime, note } = useSelector(
    (state) => state.user
  );
  return (
    <div className="summary">
      <Header />
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div>
            <h2>Order Summary</h2>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Address:</strong> {add}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Delivery Time:</strong> {deliveryTime}
            </p>
            <p>
              <strong>Note:</strong> {note}
            </p>
          </div>
          <div>
            {items.map((item, index) => (
              <h1 key={index}>
                {item.name}, {formatVND(item.price)}, {item.quantity},
                <button onClick={() => dispatch(addItem(item))}>+</button>
                <button onClick={() => dispatch(removeItem(item))}>-</button>
              </h1>
            ))}
          </div>
          <div>Total is {formatVND(totalPrice + 30000)}</div>
        </>
      )}
    </div>
  );
}
