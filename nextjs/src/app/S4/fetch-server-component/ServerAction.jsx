import { revalidatePath } from "next/cache";
import SubmitBtn from "./SubmitBtn";

const ServerAction = () => {
  const addPost = async (formData) => {
    "use server";
    const title = formData.get("title");
    await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    }).then(() => {
      revalidatePath("/S4/fetch-server-component");
    });
  };

  return (
    <>
      <form action={addPost} className="bg-amber-200 p-4 flex flex-col">
        <div>
          <label htmlFor="title">title:</label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-white border rounded-2xl mx-2"
          />
        </div>
        <SubmitBtn />
      </form>
    </>
  );
};

export default ServerAction;
