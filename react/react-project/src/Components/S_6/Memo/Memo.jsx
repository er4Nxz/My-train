import { useState } from "react";
import Memo2 from "./Memo2";

const Memo = () => {
  console.log("Memo 1");
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Memo2 />
      <h2>Counter:{counter}</h2>
      <button className="btn btn-accent"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default Memo;
