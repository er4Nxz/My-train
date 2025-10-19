import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

type User = {
  name: string;
  email: string;
};

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
