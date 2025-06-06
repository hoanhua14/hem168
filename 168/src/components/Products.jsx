import ProductCard from "./ProductCard";

const productList = {
  SIGNATURES: [
    {
      id: 1,
      name: "Tiramisu",
      price: 100000,
      quantity: 0,
      portionSize: "230 gram",
      img: "../public/assets/tiramisu.jpg",
    },
    { id: 2, name: "Flan", price: 55000, quantity: 0, portionSize: "280 gram" },
  ],
  "CREAM PUFFS": [
    {
      id: 3,
      name: "Vanilla",
      price: 72000,
      quantity: 0,
      portionSize: "6 bánh",
    },
    {
      id: 4,
      name: "Assorted",
      price: 77000,
      quantity: 0,
      portionSize: "6 bánh",
    },
  ],
  BROWNIES: [
    {
      id: 5,
      name: "Matcha",
      price: 55000,
      quantity: 0,
      portionSize: "120 gram",
    },
    {
      id: 6,
      name: "Truyền Thống",
      price: 55000,
      quantity: 0,
      portionSize: "120 gram",
    },
    {
      id: 7,
      name: "Oreo Cheese Cake",
      price: 55000,
      quantity: 0,
      portionSize: "120 gram",
    },
  ],
};
const Products = ({ category }) => {
  const products = productList[category];
  return (
    <section className="products">
      <div>
        {category}
        <div style={{ display: "flex", height: "45vh" }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              id={product.id}
              quantity={product.quantity}
              portionSize={product.portionSize}
              img={product.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;
