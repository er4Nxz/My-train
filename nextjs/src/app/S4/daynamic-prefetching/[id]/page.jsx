import { Card } from "react-bootstrap";

const fetchProduct = async (id) => {
  let response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
};

const generateStaticParams = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  const product = response.json();

  return product.map((item) => {
    return { id: item.id.toString() };
  });
};
generateStaticParams();

const ParamId = async ({ param }) => {
  const { id } = param;
  const product = await fetchProduct(id);

  return (
    <>
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
        </Card.Body>
      </Card>
    </>
  );
};

export default ParamId;
