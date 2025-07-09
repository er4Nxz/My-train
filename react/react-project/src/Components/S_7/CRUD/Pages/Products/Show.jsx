import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
const Show = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const fetchProduct = async () => {
    try {
      const res = await axios(`https://685c4d07769de2bf085c58e4.mockapi.io/Product/${id}`);
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
        <button
          className="btn btn-ghost bg-black text-white m-2 absolute top-2 left-2"
          onClick={() => navigate("/Products")}
        >
          Back
        </button>
      </Card.Body>
    </Card>
  );
};

export default Show;
