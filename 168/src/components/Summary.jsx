import { useSelector } from "react-redux";
import Header from "./Header";
export default function Summary() {
  const formatVND = (number) =>
    number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <Header />
      {console.log(items)}
      <div>
        {items.map((item, index) => (
          <h1 key={index}>{item.name}</h1>
        ))}
      </div>
      <div>Total is {formatVND(totalPrice)}</div>
    </>
  );
}
