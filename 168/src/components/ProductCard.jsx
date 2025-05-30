import { addItem } from "../features/cartSlice";
import { useDispatch } from "react-redux";
const ProductCard = ({ name, price, id }) => {
  const formatVND = (number) =>
    number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ name, price, id }));
  };
  return (
    <div className="product-card">
      {name}
      <div>{formatVND(price)}</div>
      <button onClick={handleAddToCart}>Add</button>
    </div>
  );
};
export default ProductCard;
