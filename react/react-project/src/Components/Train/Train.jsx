import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/RouteProducts";
import Header from "./Pages/Header/Header";
import { Provider } from "react-redux";
import store from "./Redux/store";
const Train = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products/*" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Train;
