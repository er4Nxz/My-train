import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ product }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const editProducts = async () => {
      try {
        const response = await axios.put(
          `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${product.id}`,
          { title, description, price, image }
        );
        navigate("/Products");
      } catch (error) {
        console.log(error.message);
      }
    };
    editProducts();
  };

  useEffect(() => {
    setTitle(product.title);
    setDescrption(product.description);
    setPrice(product.price);
    setImage(product.image);
  }, []);

  return (
    <>
      <div className="p-4 rounded-2xl m-2 w-1/3 mx-auto bg-blue-200">
        <form action="#" method="post" onSubmit={(e) => submitForm(e)}>
          <label htmlFor="Title">Title : </label>
          <input
            type="text"
            value={title}
            id="Title"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">description :</label>
          <textarea
            type="text"
            id="description"
            value={description}
            className="form-control resize-y-none h-30 text-left"
            onChange={(e) => setDescrption(e.target.value)}
          />
          <label htmlFor="price">price :</label>
          <input
            type="text"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="image url">image url :</label>
          <input
            type="text"
            id="image url"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit" className="btn btn-wide btn-info m-4">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
