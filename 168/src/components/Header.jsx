import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);
  return (
    <div className="header">
      <Link to="/">
        <img src="/assets/logo.png" alt="logo" className="logo"></img>
      </Link>

      <div
        style={{
          fontWeight: "100",
          fontFamily: "'Special Elite', monospace",
          color: "white",
        }}
      >
        <Typewriter
          words={[
            "WELCOME TO OUR BAKERY",
            "SINCE 2025",
            "FRESHLY BAKED",
            "MADE TO ORDER",
            "FINEST INGREDIENTS",
            "OUR PASSION, YOUR PLEASURE",
          ]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="_"
          typeSpeed={200}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className="cart-container">
        <Link to="/summary" className="cart-link">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
}
