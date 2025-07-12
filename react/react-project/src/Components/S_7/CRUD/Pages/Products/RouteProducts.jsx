import { Route, Routes } from "react-router-dom";
import Index from ".";
import Show from "./Show";
import Create from "./Create"
import Delete from "./Delete";
const RouteProducts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Show/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/Delete" element={<Delete/>}/>
      </Routes>
    </>
  );
};

export default RouteProducts;
