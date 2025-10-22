import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Comp = () => {
  const Auth = useContext(AuthContext);

  const login = () => {
    Auth?.setUser({ name: "erfan", email: "e@gmail.com" });
    setLogin(true);
  };

  const logout = () => {
    Auth?.setUser(null);
    setLogin(false);
  };

  const [loginn, setLogin] = useState<boolean>(false);
  return (
    <>
      <h1>{Auth?.user?.name}</h1>
      <h1>{Auth?.user?.email}</h1>
      <button
        onClick={() => {
          loginn ? logout() : login();
        }}
      >
        {loginn ? "logout" : "login"}
      </button>
    </>
  );
};

export default Comp;
