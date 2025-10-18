import { useRef } from "react";

const UseRef = () => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <>
      <input type="text" ref={input} />
    </>
  );
};

export default UseRef;
