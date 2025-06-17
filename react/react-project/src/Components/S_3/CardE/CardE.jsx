// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

const CardE = () => {
    let data = [
    {
      Id: "1",
      Img: "../img/img1.jpg",
      Title: "Title 1",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
    {
      Id: "2",
      Img: "../img/img2.jpg",
      Title: "Title 2",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
    {
      Id: "3",
      Img: "../img/im3.jpg",
      Title: "Title 3",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
    {
      Id: "4",
      Img: "../img/img4.jpg",
      Title: "Title 4",
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur!",
      BTN: "Read More",
    },
    
  ];
  return (
    <>
      {data?.map((item) => {
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