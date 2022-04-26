import React, { createContext } from "react";
import { User } from "../types";

interface ContextValueType {
  loggedUser: User | null;
  setLoggedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const LoggedUserContext = createContext<ContextValueType>({
  loggedUser: null,
  setLoggedUser: () => {},
});

export default LoggedUserContext;
