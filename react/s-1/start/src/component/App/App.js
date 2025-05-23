import Menu from "../Menu/Menu";
import Slider from "../Slider/Slider";
import image from "../../img/opium.jpg";
import "./App.css";
{
  /* 
  components
  fragment 
  img
  comment
  varible
  condition=> ternery
  template literal
  map method
  css
  */
}
const App = () => {
  const age = 230;
  const person = [
    { fullName: "erfan ahmdi", age: 18, email: "e@e.com" },
    { fullName: "hassan ahmadi", age: 46, email: "h@h.com" },
  ];
  const div__1 = {
        width:"200px",
        height:"200px",
        backgroundColor:"red",
        margin:"10px auto"}
  return (
    <>
      <h1>App</h1>
      <Menu />
      <Slider />
      <hr />
      <img src={image} alt="" width="200" />
      <hr />
      <img src={require("../../img/opium.jpg")} width="300" />
      <h1>
        {age > 20 ? `ok because age is ${age}` : `not ok because age is ${age}`}
      </h1>
      <hr />
      {person.map((item, index) => {
        return (
          <div key={index}>
            <h4>fullName:{item.fullName}</h4>
            <h4>age:{item.age}</h4>
            <h4>email:{item.email}</h4>
            <h4>inedx:{index}</h4>
            <hr />
          </div>
        );
      })}
      <div className="parent">
        <h1>Hello-World!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, harum
          itaque distinctio perferendis odio aliquid vitae debitis aspernatur,
          voluptatum veritatis rem minus. Dicta facere reprehenderit aspernatur
          cumque molestias, quos expedita nisi at doloribus officia itaque?
          Animi provident facilis, in temporibus voluptates commodi molestias
          similique. Dolor harum labore dolores, in porro beatae, minus impedit
          ad repellat at dolorum explicabo fugit. Quae numquam quibusdam
          dignissimos. Minima optio ad adipisci consequatur ex sed! Similique
          dignissimos esse deserunt sit repellendus officiis repudiandae libero
          nesciunt minima nulla voluptas, sapiente, temporibus rerum aut quod.
          Est itaque magni repudiandae vitae suscipit ipsum, numquam explicabo
          omnis quas! Omnis.
        </p>
        <a href="#">Read More</a>
      </div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "blue",
          margin: "0 auto",
        }}
      ></div>
      <div style={div__1}></div>
    </>
  );
};
export default App;
