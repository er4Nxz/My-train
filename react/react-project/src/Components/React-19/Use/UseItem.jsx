import { use } from "react";

const UseItem = () => {
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  };

  const data = use(fetchData());
  return (
    <>
      <h1>Data fetched using use()</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseItem;
