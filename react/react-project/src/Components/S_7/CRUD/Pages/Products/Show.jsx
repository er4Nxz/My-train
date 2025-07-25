import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import Delete from "./Delete";
const Show = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const fetchProduct = async () => {
    try {
      const res = await axios(
        `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${id}`
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const navigate = useNavigate();
  return (
    <Card style={{ margin: "20px", backgroundColor: "ButtonShadow" }}>
      <Card.Img
        variant="top"
        src={product && product.image}
        style={{ height: "500px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{product && product.title}</Card.Title>
        <Card.Title>{product && product.price}$</Card.Title>
        <Card.Text>{product && product.discription}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Link
          className="btn btn-ghost bg-black text-white m-2 absolute top-2 left-2"
          to={"/Products"}
        >
          Back
        </Link>
        <Link
          className="btn btn-info text-white m-2 absolute left-0"
          to={`/Products/Edit/${id}`}
        >
          Edit
        </Link>
        <Delete id={id} />
      </Card.Body>
    </Card>
  );
};

export default Show;
