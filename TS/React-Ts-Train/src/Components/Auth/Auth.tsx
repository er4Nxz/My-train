import AuthContextProvider from "./AuthContext";
import Comp from "./Comp";

const Auth = () => {
  return (
    <>
      <AuthContextProvider>
        <Comp />
      </AuthContextProvider>
    </>
  );
};

export default Auth;
