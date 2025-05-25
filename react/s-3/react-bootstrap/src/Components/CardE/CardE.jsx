import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardE() {
  let data = [
    {
      Id: "1",
      Img: "../../../public/img/opium.jpg",
      Title: "Title 1",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
    {
      Id: "2",
      Img: "../../../public/img/fdd31c6d-28e8-40e0-a95c-3fa7f5436bf8.jpg",
      Title: "Title 2",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
    {
      Id: "3",
      Img: "../../../public/img/3667b948-5dfb-40a2-99cb-7bffd3d12210.jpg",
      Title: "Title 3",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
    {
      Id: "4",
      Img: "../../../public/img/COVER ART MATTERS _ A fourth collection of artwork….jpg",
      Title: "Title 4",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
    {
      Id: "5",
      Img: "../../../public/img/download.jpg",
      Title: "Title 5",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <Card
            style={{ width: "18rem" }}
            className="mx-2 mt-3 p-1 bg-body-secondary d-inline-block text-center"
            key={item.Id}
          >
            <Card.Img variant="top" src={item.Img} />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>{item.Text}</Card.Text>
              <Button variant="primary">{item.BTN}</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>    
  );
}

export default CardE;
