import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { img_1 } from "./Products";
const Product = () => {
  const params = useLocation().search;
  const url = new URLSearchParams(params).get("seo").split("-").join(" ");
  const description = new URLSearchParams(params)
    .get("description")
    .split("-")
    .join(" ");
  return (
    <Card style={{ width: "500px", margin: "20px auto" }}>
      <Card.Img
        variant="top"
        src={img_1}
        style={{ height: "500px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{url}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default Product;
