import ProductCard from "./ProductCard";

const productList = {
  Signatures: [
    { id: 1, name: "Tiramisu" },
    { id: 2, name: "Flan" },
  ],
  "Cream Puffs": [
    { id: 3, name: "Vanilla" },
    { id: 4, name: "Assorted" },
  ],
  Brownies: [
    { id: 5, name: "Matcha" },
    { id: 6, name: "Truyền Thống" },
    { id: 7, name: "Oreo Cheese Cake" },
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
            <ProductCard key={product.id} name={product.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;
