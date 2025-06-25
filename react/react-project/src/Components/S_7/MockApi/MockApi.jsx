import axios from "axios";
import { useEffect } from "react";

const MockApi = () => {
  const api = async () => {
    try {
      let res = await axios(
        "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api();
  }, []);
  return <></>;
};

export default MockApi;
