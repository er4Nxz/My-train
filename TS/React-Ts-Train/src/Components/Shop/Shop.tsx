import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import { createContext, useState } from "react";
import type { Products } from "./Types/Products.types";
import UseFetch from "./Hooks/UseFetch";
import Header from "./Header/Header";

export const CartContext = createContext({} as CartContextType);

type CartContextType = {
  shop: Products[];
  UserCart: Products[];
  removeAll: () => void;
  removeProduct: (id: number) => void;
  addProduct: (id: number) => void;
};

const Shop = () => {
  const [UserCart, setUserCart] = useState<Products[]>([]);
  const {
    data: shop,
    loading,
    error,
  } = UseFetch("https://fakestoreapi.com/products");

  const addProduct = (id: number) => {
    setUserCart((prev) => {
      const mainProductInCart = prev.find((item) => item.id === id);
      if (mainProductInCart) {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      } else {
        const mainProductInShop = shop.find(
          (item) => item.id === id
        ) as Products;
        return [...prev, { ...mainProductInShop, count: 1 }];
      }
    });
  };

  const removeProduct = (id: number) => {
    setUserCart(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === id) {
              if (item.count > 1) {
                return { ...item, count: item.count - 1 };
              } else {
                return null;
              }
            }
            return item;
          })
          .filter((item) => item !== null) as Products[]
    );
  };

  const removeAll = () => {
    setUserCart([]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <CartContext.Provider
      value={{ addProduct, removeAll, removeProduct, shop, UserCart }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default Shop;
