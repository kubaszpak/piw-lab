import React, { createContext } from "react";
import type { User as AuthUser } from "firebase/auth";
import { User } from "../types";

export type AppUser = User | AuthUser | null | undefined;

interface ContextValueType {
  loggedUser: AppUser;
  setLoggedUser: React.Dispatch<React.SetStateAction<AppUser>>;
}

const LoggedUserContext = createContext<ContextValueType>({
  loggedUser: null,
  setLoggedUser: () => {},
});

export default LoggedUserContext;
