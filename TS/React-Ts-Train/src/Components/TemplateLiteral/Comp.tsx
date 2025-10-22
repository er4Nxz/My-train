import type { FC } from "react";
import type { Massage, Position } from "./TemplateLiteral";

interface CompProps {
  massage: Massage;
  Position: Position;
}

const Comp: FC<CompProps> = ({ massage, Position }) => {
  return (
    <>
      {massage.toTranslate}
      <h1>position: {Position}</h1>
    </>
  );
};

export default Comp;
