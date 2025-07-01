import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Products from "./Products/Products";

export const MyContext = React.createContext();
const ApiContext = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchProduct = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
      setError("")
    } catch (error) {
      setProducts(null)
      setError(error.message);
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <MyContext.Provider value={{ products, loading, error }}>
        <Products />
      </MyContext.Provider>
    </>
  );
};

export default ApiContext;
