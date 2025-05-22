import Button from "./Button";
import Products from "./Products";

const MainPage = () => {
  return (
    <>
      <div className="header">
        <img src="/assets/logo.png" alt="logo" className="logo"></img>
        <Button className="button" />
      </div>
      <Products className="products" category="Signatures" />
      <Products className="products" category="Cream Puffs" />
      <Products className="products" category="Brownies" />
    </>
  );
};
export default MainPage;
