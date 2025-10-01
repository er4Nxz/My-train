import type React from "react";
const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
};
const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
};
const changHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
};
const Event: React.FC = (): React.ReactNode => {
  return (
    <>
      <button onClick={clickHandler}>Click</button>
      <button onSubmit={submitHandler}></button>
      <input type="text" onChange={changHandler} />
    </>
  );
};

export default Event;
