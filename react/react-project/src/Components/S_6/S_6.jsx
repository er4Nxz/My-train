import React from "react";
import ComA from "./ComA/ComA";
import ApiContext from "./ApiContext/ApiContext";

export const MyContext = React.createContext();

const S_6 = () => {
  {
    /* 
    context api / useContext =>defult
    Context => Api
    */
  }
  {
    /*const fullName = "erfan ahmadi"
  const age = 25
  const email = "e@gmail.com"
  const partner = "sadaf"*/
  }
  return (
    <>
      {/* <MyContext.Provider value={{ fullName, age, email, partner }}>
        <ComA />
      </MyContext.Provider> */}
      {/* ************************************ */}
      <ApiContext />
    </>
  );
};

export default S_6;
