import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import { createContext, useState } from "react";
import type { Products } from "./Types/Products.types";
import UseFetch from "./Hooks/UseFetch";

export const CartContext = createContext({} as CartContextType);

type CartContextType = {
  shop: Products[];
  UserCart: Products[];
  removeAll: () => void;
  removeProduct: (id: number) => void;
  addProduct: (id: number) => void;
};
const Shop = () => {
  const { data, loading, error } = UseFetch(
    "https://fakestoreapi.com/products"
  );

  const [UserCart, setUserCart] = useState<Products[]>([]);

  const [shop, setShop] = useState<Products[]>(data);

  const addProduct = (id: number) => {
    
  };

  const removeProduct = (id: number) => {
    setUserCart((item) =>
      item.filter((product) => {
        return product.id !== id;
      })
    );
  };

  const removeAll = () => {
    setUserCart([]);
  };

  return (
    <CartContext.Provider
      value={{ addProduct, removeAll, removeProduct, shop, UserCart }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default Shop;
