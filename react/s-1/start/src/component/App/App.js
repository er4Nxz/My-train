import Menu from "../Menu/Menu";
import Slider from "../Slider/Slider";
import image from "../../img/opium.jpg";

{
  /* 
  components
  fragment 
  img
  comment
  varible
  condition=> ternery
  template literal
  */
}
const App = () => {
  const age = 230;
  return (
    <>
      <h1>App</h1>
      <Menu />
      <Slider />
      <img src={image} alt="" width="200" />
      <img src={require("../../img/opium.jpg")} width="300" />
      <h1>
        {age > 20 ? `ok because age is ${age}` : `not ok because age is ${age}`}
      </h1>
    </>
  );
};
export default App;
