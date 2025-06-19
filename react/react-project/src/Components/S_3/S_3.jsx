import Acc from "./Acc/Acc";
import CardE from "./CardE/CardE";
import Data from "./Data/Data";
import Item from "./Item/Item";
import Item2 from "./Item2/Item2";
const S_3 = () => {
  {
    /* 
    vite whith react
    react-bootstrap
    bt option 
    bt with Dynamic
    */
  }
  {
    /* 
    tailwind
    css module
    event
    props
    */
  }
  const print = (t) => {
    console.log(t);
  };
  const fName = "erfan";
  const lName = "ahmadi";
  const age = 18;
  return (
    <>
      <Acc />
      <CardE />
      <Item />
      <Item2 />
      <button
        onClick={(e) => print(e.target)}
        className="bg-amber-400 mx-auto block mt-10 p-2 rounded-2xl cursor-pointer"
        id="btn"
      >
        click me
      </button>
      <Data fName={fName} lName={lName} age={age} />
    </>
  );
};

export default S_3;
