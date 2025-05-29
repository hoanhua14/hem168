import Button from "./Button";

const ProductCard = ({ name, price }) => {
  const formatVND = (number) =>
    number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  return (
    <div className="product-card">
      {name}
      <div>{formatVND(price)}</div>
      <Button></Button>
    </div>
  );
};
export default ProductCard;
