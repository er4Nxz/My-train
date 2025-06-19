import Card from "react-bootstrap/Card";
import { MdOutlineProductionQuantityLimits, MdStarRate } from "react-icons/md";

const Product = ({ Product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={Product.image}
        className="h-[200px] object-contain object-top"
      />
      <Card.Body>
        <Card.Title>{Product.title.substr(0, 10)}</Card.Title>
        <li className="m-2 capitalize">{Product.category}</li>
        <Card.Subtitle className="text-black">{Product.price}$</Card.Subtitle>
        <Card.Text className="opacity-70">
          {Product.description.substr(0, 100)}
        </Card.Text>
        <div className="flex flex-row justify-between">
          <h6>
            <MdStarRate className="inline-block relative bottom-[3px] mx-1" />
            Rate:{Product.rating.rate}
          </h6>
          <h6>
            Quantity: {Product.rating.count}
            <MdOutlineProductionQuantityLimits className="inline-block mx-1"/>
          </h6>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
