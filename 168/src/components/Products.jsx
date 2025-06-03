import ProductCard from "./ProductCard";

const productList = {
  Signatures: [
    { id: 1, name: "Tiramisu", price: 100000, quantity: 0 },
    { id: 2, name: "Flan", price: 55000, quantity: 0 },
  ],
  "Cream Puffs": [
    { id: 3, name: "Vanilla", price: 72000, quantity: 0 },
    { id: 4, name: "Assorted", price: 77000, quantity: 0 },
  ],
  Brownies: [
    { id: 5, name: "Matcha", price: 55000, quantity: 0 },
    { id: 6, name: "Truyền Thống", price: 55000, quantity: 0 },
    { id: 7, name: "Oreo Cheese Cake", price: 55000, quantity: 0 },
  ],
};
const Products = ({ category }) => {
  const products = productList[category];
  return (
    <section className="products">
      <div>
        {category}
        <div style={{ display: "flex" }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              id={product.id}
              quantity={product.quantity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;
