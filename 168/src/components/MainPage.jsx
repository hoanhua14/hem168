import Products from "./Products";

const MainPage = () => {
  return (
    <>
      <div className="header">
        <img src="/assets/logo.png" alt="logo" className="logo"></img>
      </div>
      <Products category="Signatures" />
      <Products category="Cream Puffs" />
      <Products category="Brownies" />
    </>
  );
};
export default MainPage;
