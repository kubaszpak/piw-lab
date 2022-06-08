import { useContext } from "react";
import type { User as AuthUser } from "firebase/auth";
import LoggedUserContext from "../../contexts/LoggedUserContext";
import type { User } from "../../types";

function LoggedUserInfo() {
  const { loggedUser } = useContext(LoggedUserContext);
  return loggedUser ? (
    <div>
      You are logged in as{" "}
      {(loggedUser as User).login
        ? (loggedUser as User).login
        : (loggedUser as AuthUser).displayName}
      .
    </div>
  ) : (
    <div>Not logged in.</div>
  );
}

export default LoggedUserInfo;
