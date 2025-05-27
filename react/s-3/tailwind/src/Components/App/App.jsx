import Card from "../Card/Card";
import Data from "../Data/Data";
import Item from "../Item/Item";
import Item2 from "../Item2/Item2";
{
  /* 
    tailwind
    css module
    event
    props
    */
}
const App = () => {
  const print = (t) => {
    console.log(t);
  };
  const fName="erfan"
  const lName="shahriari"
  const age = 18
  return (
    <>
      <button
        onClick={(e) => print(e.target)}
        className="bg-amber-400 mx-auto block mt-10 p-2 rounded-2xl cursor-pointer"
        id="btn"
      >
        click me
      </button>
      <Card />
      <Item />
      <Item2 />
      <Data fName={fName} lName={lName} age={age} />
    </>
  );
};

export default App;
