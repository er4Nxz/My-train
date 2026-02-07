import Link from "next/link";

const fetchProducts = async () => {
  let response = await fetch("http://localhost:3001/posts");
  return response.json();
};
const DaynamicPrefetching = async () => {
  const posts = await fetchProducts();
  return (
    <>
      {posts?.map((item) => {
        return (
          <div key={item.id}>
            <Link
              href={`/S4/dynamic-prefetching/${item.id}`}
            >
              <h1>{item.title}</h1>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default DaynamicPrefetching;
