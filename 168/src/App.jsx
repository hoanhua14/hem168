import Products from "./components/Products";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <>
        <Products category="Signatures" />
        <Products category="Cream Puffs" />
        <Products category="Brownies" />
      </>
    </>
  );
}

export default App;
