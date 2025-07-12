import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    fetch("https://685c4d07769de2bf085c58e4.mockapi.io/Product", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        discription: discription,
        price: price,
        image: image,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/Products");
    Swal.fire({
      title: "Good job!",
      text: "You create a new product",
      icon: "success",
    });
  };

  return (
    <>
      <form
        action="#"
        method="post"
        className="w-[500px] p-5 mx-auto mt-2 rounded-2xl border shadow-2xl bg-dark text-white"
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <div>
          <label htmlFor="Title" className="m-2">
            Title :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="write title ... "
            id="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Description" className="m-2">
            Description :
          </label>
          <textarea
            type="text"
            className="form-control resize-none h-30"
            placeholder="write description ... "
            onChange={(e) => setDiscription(e.target.value)}
            id="Description"
          />
        </div>
        <div>
          <label htmlFor="Price" className="m-2">
            Price :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="write price ... "
            onChange={(e) => setPrice(e.target.value)}
            id="Price"
          />
        </div>
        <div>
          <label htmlFor="Image" className="m-2">
            Image :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="import image ... "
            onChange={(e) => setImage(e.target.value)}
            id="Image"
          />
        </div>
        <button className="btn btn-success mt-3">Submit</button>
      </form>
    </>
  );
};

export default Create;
