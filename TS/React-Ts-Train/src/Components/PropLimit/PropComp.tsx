import type { FC } from "react";
import type { PropsValue } from "./PropLimit.types";

const PropComp: FC<PropsValue> = ({ children, svg, png }) => {
  return (
    <>
      {children} {svg} {png}
    </>
  );
};

export default PropComp;
