import { Suspense } from "react";
import UseItem from "./UseItem";

const Use = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UseItem />
      </Suspense>
    </>
  );
};

export default Use;
