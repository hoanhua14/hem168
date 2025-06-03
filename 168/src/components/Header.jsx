import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" className="logo"></img>
        </Link>
        <div>{totalItems}</div>
        <Link to="/summary">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />
        </Link>
      </div>
    </>
  );
}
