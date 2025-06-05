import Products from "./components/Products";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="main-div">
      <Header />
      <UserInfo />
      <>
        <Products category="SIGNATURES" />
        <Products category="CREAM PUFFS" />
        <Products category="BROWNIES" />
      </>
    </div>
  );
}

export default App;
