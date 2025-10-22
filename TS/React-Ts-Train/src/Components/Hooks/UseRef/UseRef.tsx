import { useRef } from "react";

const UseRef = () => {
  const input = useRef<HTMLInputElement>(null);
  const clickHandler = () => {
    console.log(input.current?.value);
  };
  return (
    <>
      <input type="text" ref={input} />
      <button onClick={clickHandler}>btn</button>
    </>
  );
};

export default UseRef;
