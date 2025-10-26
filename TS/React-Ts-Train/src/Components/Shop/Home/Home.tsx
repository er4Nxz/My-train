import { useContext } from "react";
import { CartContext } from "../Shop";
import type { Products as ProductsType } from "../Types/Products.types";
import Products from "./Products";

const Home = () => {
  const { shop, addProduct } = useContext(CartContext);

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginTop: "100px" }}>محصولات فروشگاه</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {shop.map((product: ProductsType) => (
          <Products
            key={product.id}
            product={product}
            addProduct={addProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
