import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "/src/Components/S_3/img/img2.jpg"
import { useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  return (
    <Card style={{ width: "500px" ,margin:"20px auto"}}>
      <Card.Img variant="top" src={img} style={{height:"500px",objectFit:"contain"}} />
      <Card.Body>
        <Card.Title>Card Title product {id}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
