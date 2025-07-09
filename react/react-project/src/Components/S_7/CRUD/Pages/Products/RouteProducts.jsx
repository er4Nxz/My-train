import { Route, Routes } from "react-router-dom";
import Index from ".";
import Show from "./Show";

const RouteProducts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Show/>}/>
      </Routes>
    </>
  );
};

export default RouteProducts;
