import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = ({ data }) => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    setTitle(data.title);
    setPrice(data.price);
    setDiscription(data.discription);
    setImage(data.image);
  }, []);
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const updateProduct = async () => {
      try {
        let res = await axios.put(
          `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${data.id}`,
          { title, image, discription, price }
        );
        navigate("/Products");
        Swal.fire({
          title: "Good job!",
          text: "You create a new product",
          icon: "success",
        });
      } catch (error) {
        console.log(error);
      }
    };
    updateProduct();
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {title.length === 0 ? (
            <span className="text-red-500">title is required</span>
          ) : null}
          {title.length >= 1 && title.length < 5 ? (
            <span className="text-red-500">title must be 5 character</span>
          ) : null}
          {title.length > 12 ? (
            <span className="text-red-500">title must be 12 character</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="Description" className="m-2">
            Description :
          </label>
          <textarea
            type="text"
            className="form-control resize-none h-30 text-left"
            placeholder="write description ... "
            onChange={(e) => setDiscription(e.target.value)}
            id="Description"
            value={discription}
          />
          {discription.length === 0 ? (
            <span className="text-red-500">discription is required</span>
          ) : null}
          {discription.length >= 1 && discription.length < 5 ? (
            <span className="text-red-500">
              discription must be 5 character
            </span>
          ) : null}
        </div>
        <div>
          <label htmlFor="Price" className="m-2">
            Price :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="write price ... "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="Price"
          />
          {price.length === 0 ? (
            <span className="text-red-500">price is required</span>
          ) : null}
          {price.length > 12 ? (
            <span className="text-red-500">price must be 12 character</span>
          ) : null}
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
            value={image}
          />
          {image.length === 0 ? (
            <span className="text-red-500">image is required</span>
          ) : null}
        </div>
        <button
          className="btn btn-success mt-3"
          disabled={
            title.length === 0 ||
            discription.length === 0 ||
            price.length === 0 ||
            image.length === 0 ||
            title.length < 5 ||
            discription.length < 20 ||
            price.length < 2
              ? "disabled"
              : null
          }
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Update;
