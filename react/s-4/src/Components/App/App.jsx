import Person from "../Person/Person";
import img_1 from "../../../public/img/opium.jpg";
import Form from "../Form/Form";
import { useState } from "react";
const App = () => {
  {
    /* 
        defaultProps ( || or , in parametr function component)
        props(function)event
        components pair
        props(object)
        props(object in array)
        form  (select attr = multipate) (checkbox => array filter send to backend)
        USE STATE
        attr disabled for input
        css condtional
        call back function
    */
  }
  // const firstName = "didi";
  // const print = (e) => console.log(e);
  // const person = [
  //   { fullName: "ali Ahmadi", age: 15 },
  //   { fullName: "erfan Ahmadi", age: 18 },
  // ];

  // const printValue = (e) => {
  //   console.log(e.target.value);
  // };
  // const printValueSelect = (e) => {
  //   let multi = [...e.target.selectedOptions]
  //     .map((item) => item.value)
  //     .toString();
  //   console.log(multi);
  // };
  const [counter, setCounter] = useState(0);
  return (
    <>
      {/* <Person firstName={firstName} print={print} />
      <Person/>
      <Person>
        <h1 className="text-center text-2xl m-1">Hello-World</h1>
        <img src={img_1} />
      </Person>
      {person?.map((item, index) => {
        return <Person person={item} key={index + 1} />;
      })}
        */}
      {/* form 👇👇 */}
      {/* <Form printValueSelect={printValueSelect} printValue={printValue} /> */}
      <div className="w-1/4 mx-auto">
        <h1 className="text-center my-[20px] text-4xl">counter:{counter}</h1>
        <button
          className="bg-amber-400 p-[5px] px-3 rounded-2xl mx-[2px] cursor-pointer"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          className={
            counter <= 0
              ? "bg-red-500 p-[5px] px-3 rounded-2xl mx-[2px] cursor-pointer opacity-[0.5]"
              : "bg-amber-400 p-[5px] px-3 rounded-2xl mx-[2px] cursor-pointer"
          }
          onClick={() => setCounter(counter - 1)}
          disabled={counter <= 0 ? "disabled" : null}
        >
          -
        </button>
        <button
          className="bg-amber-400 p-[5px] px-3 rounded-2xl mx-[2px] cursor-pointer"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
