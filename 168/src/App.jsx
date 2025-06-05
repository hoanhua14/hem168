import Products from "./components/Products";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="main-div">
      <Header />
      <UserInfo />
      <>
        <Products category="Signatures" />
        <Products category="Cream Puffs" />
        <Products category="Brownies" />
      </>
    </div>
  );
}

export default App;
