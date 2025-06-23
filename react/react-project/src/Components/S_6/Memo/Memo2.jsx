import { memo } from "react";

const Memo2 = () => {
  console.log("Memo2");
  return (
    <>
      <h2>Memo 2</h2>
    </>
  );
};

export default memo(Memo2);
