import Products from "./Products";
import { useSelector } from "react-redux";

const MainPage = () => {
  const totalItems = useSelector((state) => state.cart.items.length);
  const allItems = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="header">
        <img src="/assets/logo.png" alt="logo" className="logo"></img>
        <div>{totalItems}</div>
        <div>{allItems}</div>
      </div>
      <Products category="Signatures" />
      <Products category="Cream Puffs" />
      <Products category="Brownies" />
    </>
  );
};
export default MainPage;
