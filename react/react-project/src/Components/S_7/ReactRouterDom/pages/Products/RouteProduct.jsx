import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import Create from "./Create";

const RouteProduct = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:id" element={<Product />} />
      <Route path="/Create" element={<Create />} />
    </Routes>
  );
};

export default RouteProduct;
