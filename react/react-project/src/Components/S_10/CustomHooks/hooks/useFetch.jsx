import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      let response = await axios.get(url);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      setError(error.message);
      setLoading(true);
    }
  };
  fetchData();
  return [data, loading, error];
};

export default useFetch;
