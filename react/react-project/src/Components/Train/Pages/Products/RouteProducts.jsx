import { Route, Routes } from "react-router-dom";
import Index from "./Index/Index";
import Show from "./Show/Show";
import Edit from "./Edit/Edit";
const Products = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default Products;
