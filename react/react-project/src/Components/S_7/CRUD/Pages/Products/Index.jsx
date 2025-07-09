import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [product, setProduct] = useState(null);
  const fetchPro = async () => {
    try {
      let res = await axios("https://fakestoreapi.com/products");
      setProduct(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPro();
  }, []);
  return (
    <div className="row justify-content-center gap-10 w-100">
      {product?.map((item) => {
        return (
          <div className="col-2 border rounded-2xl mt-2 flex row justify-between gap-2 p-2" key={item.id}>
            <h5><Link to={`/Products/${item.id}`}>{item.title.substr(0,10)}</Link></h5>
            <h5>{item.price}$</h5>
            <h5 className="capitalize">{item.category}</h5>
            <p className="text-[14px]">{item.description.substr(0,100)}</p>
            <img
              src={item.image}
              loading="lazy"
              className="w-30 block mx-auto hover:scale-120 transition duration-300"
              
            />
            <div className="flex justify-between">
              <h5>rate:{item.rating.rate}</h5>
              <h5>count:{item.rating.count}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
