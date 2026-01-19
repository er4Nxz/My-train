import SubmitBtn from "@/Components/S4/SubmitBtn/SubmitBtn";

const ServerAction = () => {
  const addPost = async (formData) => {
    "use server";
    console.log(formData.get("title")); // and send data
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
        <div className="my-2">
          <label htmlFor="descrption">descrption:</label>
          <input
            type="text"
            name="descrption"
            className="bg-white border rounded-2xl mx-2"
          />
        </div>
        <SubmitBtn  />
      </form>
    </>
  );
};

export default ServerAction;
