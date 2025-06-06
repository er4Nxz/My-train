import { useEffect, useState } from "react";
import Posts from "./Posts/Posts";

const Api = () => {
  const [data, setData] = useState(null);
  const fetchApi = async () => {
    try {
      const url = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await url.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="bg-blue-400 p-5 mt-1 felx flex-row flex flex-wrap">
      {data?.map((item) => {
        return <Posts title={item.title} body={item.body} key={item.id} />;
      })}
    </div>
  );
};
export default Api;
