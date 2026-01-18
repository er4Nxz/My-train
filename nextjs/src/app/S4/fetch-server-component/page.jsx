import { notFound } from "next/navigation";

const getPosts = async () => {
  // cach

  // let response = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });

  //revalidate

  let response = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 20 },
  });
  if (response.ok) {
    return response.json();
  } else {
    if (response.status === 404) {
      return notFound();
    } else {
      throw new Error("Failed to fetch posts");
    }
  }
};
const fetchServerComponent = async () => {
  const posts = await getPosts();
  return (
    <>
      <div className="w-1/2 rounded-2xl p-4 bg-blue-300 mx-auto">
        {posts?.map((post) => {
          return (
            <>
              <h1>{post.title}</h1>
              <p>{post.descrption}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default fetchServerComponent;
