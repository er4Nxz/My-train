import Comp from "./Comp";

type Language = "en" | "fa" | "es" | "tr";
type MessageType = "response" | "error";

export type Massage = { toTranslate: `${MessageType}-${Language}` };

type horizontal = "right" | "center" | "left";
type vertical = "top" | "center" | "bottom";
export type Position = Exclude<`${vertical}-${horizontal}`, "center-center"> | "center";

const TemplateLiteral = () => {
  return (
    <>
      <Comp massage={{ toTranslate: "response-en" }} Position="center" ></Comp>
    </>
  );
};

export default TemplateLiteral;
