import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import img_1 from "./img1.jpg";
export { img_1 };
const Products = () => {
  return (
    <div className="col-4 mx-auto bg-dark p-4 mt-2">
      <h1 className=" capitalize text-warning">Products</h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
        expedita. Neque tenetur laboriosam consequuntur at facere tempora
        quibusdam sed excepturi optio accusantium hic numquam, magni, quam quasi
        illo? Ea, magni! Quae velit adipisci impedit tempora deleniti molestias,
        facere, numquam exercitationem ad aspernatur magnam. Culpa dicta a neque
        hic ullam quibusdam dolore accusamus, voluptatum dignissimos nam.
      </p>
      <a href="#" className="btn btn-primary">
        Read More
      </a>
      <Card style={{ width: "18rem", margin: "20px auto" }}>
        <Card.Img variant="top" src={img_1} />
        <Card.Body>
          <Card.Title>product-1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link
            className="btn btn-sm btn-primary"
            to="/Products/1?seo=iphone-16-pro-max-256-GB&description=iphone 16 pro max is the best"
          >
            Read More
          </Link>
        </Card.Body>
      </Card>
      <Link className="btn btn-info" to={"/Products/Create"}>
        Create
      </Link>
    </div>
  );
};

export default Products;
