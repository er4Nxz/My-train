import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Header/Header";
import RouteProduct from "./pages/Products/RouteProduct"
import { useState } from "react";
const ReactRouterDom = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Header />
        <button
          className="btn btn-sm btn-info text-capitalize absolute left-5 top-3"
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login ? "log out" : "login"}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products/*" element={login?<RouteProduct/>:<Navigate to={"/"}/>}/>
          <Route path="/About" element={login?<About/>:<Navigate to={"/"}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ReactRouterDom;
