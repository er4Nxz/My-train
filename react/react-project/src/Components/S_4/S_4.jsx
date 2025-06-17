import { useState } from "react";
import Form from "./Form/Form";
import Person from "./Person/Person";
import img_1 from "./Person/opium.jpg";
/*   
        varProps ( || or , in parametr function component)
        props(function)event
        components pair
        props(object)
        props(object in array) 
        form  (select attr = multipate) (checkbox => array filter send to backend)
        USE STATE
        attr disabled for input
        css condtional
        call back function
        for loop 
        object in useState
    */
const S_4 = () => {
  {
    /*const firstName = "didi";
    const lastName = "yosefi";
    const print = (e) => console.log(e);
    const person = [
      { fullName: "ali Ahmadi", age: 15 },
      { fullName: "erfan Ahmadi", age: 18 },
    ];*/
  }
  {
    /*const printValue = (e) => {
      console.log(e.target.value);
    };
    const printValueSelect = (e) => {
      let option = [...e.target.selectedOptions]
        .map((item) => item.value)
        .toString();
      console.log(option);
    };*/
  }
  {
    // const [counter, setCounter] = useState(0);
  }
  {
    /*const [data, setData] = useState({
      name: "",
      age: "",
    });*/
  }
  return (
    <>
      {/* <Person firstName={firstName} print={print} lastName={lastName} />
      <Person />
      <Person>
        <h1 className="text-center text-2xl m-1">Hello-World</h1>
        <img src={img_1} />
      </Person>
      {person?.map((item, index) => {
        return <Person person={item} key={index + 1} />;
      })} */}
      {/******************************************************** */}
      {/* <Form printValueSelect={printValueSelect} printValue={printValue} /> */}
      {/******************************************************** */}
      {/* <div className="w-1/4 mx-auto">
        <h1 className="text-center my-[20px] text-4xl">counter:{counter}</h1>
        <button
          className="bg-green-600 p-[5px] px-3 rounded-2xl mx-[2] cursor-pointer text-white"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          className={
            counter <= 0
              ? "bg-red-500 p-[5px] px-3 rounded-2xl mx-[2px] cursor-pointer opacity-[0.5] text-white"
              : "bg-green-600 p-[5px] px-3 rounded-2xl mx-[2px] cursor-pointer text-white"
          }
          onClick={() => setCounter(counter - 1)}
          disabled={counter <= 0 ? "disabled" : null}
        >
          -
        </button>
        <button
          className="bg-green-600 p-[5px] px-3 rounded-2xl mx-[2px] cursor-pointer text-white"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
        <button
          className="bg-green-600 p-[5px] px-3 rounded-2xl mx-[2px] cursor-pointer text-white"
          onClick={() => {
            for (let i = 1; i <= 5; i++) {
              setCounter((counter) => counter + 1);
            }
          }}
        >
          5
        </button>
      </div> */}
      {/******************************************************** */}
      {/* <h4>Name : {data.name}</h4>
      <h4>Age : {data.age}</h4>
      <label htmlFor="fullName">fullName</label>
      <input
        type="text"
        id="fullName"
        className="border-2 m-1 p-1"
        onChange={(e) =>
          setTimeout(() => {
            setData({ ...data, name: e.target.value });
          }, 800)
        }
      />
      <label htmlFor="age">age</label>
      <input
        type="text"
        id="age"
        className="border-2 m-1 p-1"
        onChange={(e) =>
          setTimeout(() => {
            setData({ ...data, age: e.target.value });
          }, 800)
        }
      /> */}
    </>
  );
};

export default S_4;
