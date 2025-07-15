import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const Index = () => {
  const [product, setProduct] = useState(null);
  const fetchPro = async () => {
    try {
      let res = await axios(
        "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPro();
  }, []);
  return (
    <>
      <Link
        className="btn btn-primary absolute left-3 mt-2"
        to="/Products/Create"
      >
        Create
      </Link>
      <div className="flex flex-wrap flex-row gap-2 justify-center items-center">
        {product?.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Index;
