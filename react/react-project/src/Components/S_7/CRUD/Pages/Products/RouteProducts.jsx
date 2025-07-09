import { Route, Routes } from "react-router-dom";
import Index from ".";
import Show from "./Show";
import Create from "./Create"
const RouteProducts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Show/>}/>
        <Route path="/Create" element={<Create/>}/>
      </Routes>
    </>
  );
};

export default RouteProducts;
