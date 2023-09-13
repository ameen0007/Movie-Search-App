import { createContext, useState } from "react";

export const Authcontext = createContext();

export const Authprovider = ({ children }) => {
  const checkuser = () => {
    if (localStorage.getItem("usertoken", "token")) {
      return true;
    }
    return false;
  };
  const [auth, setAuth] = useState(checkuser());
  console.log(auth, "==incially");

  return (
    <Authcontext.Provider value={{ auth, setAuth }}>
      {children}
    </Authcontext.Provider>
  );
};
