import { useContext } from "react";
import ComB from "./ComB/ComB";
import { MyContext } from "../S_6";

const ComA = () => {
  // const { fullName, age} = useContext(MyContext);
  return (
    <>
      <h1>ComA-{fullName}</h1>
      <h1>ComA-{age}</h1>
      <ComB />
    </>
  );
};

export default ComA;
