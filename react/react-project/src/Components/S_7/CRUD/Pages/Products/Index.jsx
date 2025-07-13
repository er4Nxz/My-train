import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          return (
            <div
              className="border rounded-2xl p-2 m-2 w-[300px] h-[420px] flex flex-col justify-between"
              key={item.id}
            >
              <h5>
                <Link to={`/Products/${item.id}`} style={{ color: "red" }}>
                  {item.title}
                </Link>
              </h5>
              <h5>{item.price}$</h5>
              <p className="text-[14px]">{item.discription}</p>
              <img
                src={item.image}
                loading="lazy"
                className="w-30 h-40 object-contain block mx-auto hover:scale-120 transition duration-300"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
