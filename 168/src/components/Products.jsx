import ProductCard from "./ProductCard";

const productList = {
  SIGNATURES: [
    {
      id: 1,
      name: "Tiramisu",
      price: 100000,
      quantity: 0,
      portionSize: "230 gram",
      img: "/assets/tiramisu.jpg",
    },
    {
      id: 2,
      name: "Flan",
      price: 55000,
      quantity: 0,
      portionSize: "280 gram",
      img: "/assets/flan.jpeg",
    },
  ],
  "CREAM PUFFS": [
    {
      id: 3,
      name: "Vanilla",
      price: 72000,
      quantity: 0,
      portionSize: "6 bánh",
      img: "/assets/choux.jpg",
    },
    {
      id: 4,
      name: "Assorted",
      price: 77000,
      quantity: 0,
      portionSize: "6 bánh",
      img: "/assets/choux.jpg",
    },
  ],
  BROWNIES: [
    {
      id: 5,
      name: "Matcha",
      price: 55000,
      quantity: 0,
      portionSize: "120 gram",
      img: "/assets/brownie.jpg",
    },
    {
      id: 6,
      name: "Truyền Thống",
      price: 55000,
      quantity: 0,
      portionSize: "120 gram",
      img: "/assets/brownie.jpg",
    },
    {
      id: 7,
      name: "Oreo Cheese Cake",
      price: 55000,
      quantity: 0,
      portionSize: "120 gram",
      img: "/assets/brownie.jpg",
    },
  ],
};
const Products = ({ category }) => {
  const products = productList[category];
  return (
    <section className="products">
      <div className="category">{category}</div>
      <div className="product-container">
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
    </section>
  );
};
export default Products;
