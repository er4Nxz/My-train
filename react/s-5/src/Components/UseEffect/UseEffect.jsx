import { useEffect, useState } from "react";

const UseEffect = () => {
  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [counter, setCount] = useState(0);
  const [bg, setBg] = useState("");

  useEffect(() => {
    setBg(`rgb(${random(100, 250)},${random(100, 250)},${random(100, 250)})`);
  }, [counter]);

  const [size, setSize] = useState(window.innerWidth);
  const changSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", changSize);
    return () => {
      window.removeEventListener("resize", changSize);
    };
  });
  return (
    <div
      className="w-1/4 rounded-2xl mx-auto p-2 mt-2"
      id="parent"
      style={{ backgroundColor: bg }}
    >
      <h1 className="text-3xl text-center">count : {counter} </h1>
      <button
        className="bg-amber-900 text-white px-2 p-1 rounded-full cursor-pointer"
        onClick={() => {
          setCount(counter + 1);
        }}
      >
        +
      </button>
      <h1 className="text-3xl text-center">size X : {size}</h1>
    </div>
  );
};

export default UseEffect;
