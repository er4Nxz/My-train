import { useRef } from "react";

const MyUseRef = () => {
  const Title = useRef();
  return (
    <>
      <div className="p-2 bg-amber-100 mx-auto mt-1 w-max" ref={Title}>
        <h1>Heloo-World</h1>
      </div>
      <button
        className="btn btn-accent"
        onClick={() => {
          console.log(Title.current.children);
          console.log(Title.current.classList);
        }}
      >
        click
      </button>
    </>
  );
};

export default MyUseRef;
