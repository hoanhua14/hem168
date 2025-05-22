import Products from "./Products";

const MainPage = () => {
  return (
    <>
      <div className="header">
        <img src="/assets/logo.png" alt="logo" className="logo"></img>
      </div>
      <Products />
    </>
  );
};
export default MainPage;
