import { useEffect, useState } from "react";
import type { Products } from "../Types/Products.types";
import axios, { type AxiosResponse } from "axios";

const UseFetch = (url: string) => {
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Products[]> = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error?.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
