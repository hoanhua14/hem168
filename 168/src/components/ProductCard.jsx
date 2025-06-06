import { addItem } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ name, price, id, portionSize, img }) => {
  const formatVND = (number) =>
    number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ name, price, id }));
  };
  const quantityOfAProduct = useSelector((state) => {
    const itemToFind = state.cart.items.find((item) => item.id === id);
    if (itemToFind) {
      return itemToFind.quantity;
    }
  });

  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-img"></img>
      <div className="product-details">
        {name}
        <div>{formatVND(price)}</div>
        <div>Quantity: {quantityOfAProduct}</div>
        <div>Portion Size: {portionSize}</div>
        <button onClick={handleAddToCart}>Add</button>
      </div>
    </div>
  );
};
export default ProductCard;
