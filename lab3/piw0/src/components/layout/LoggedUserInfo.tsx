import { useContext } from "react";
import LoggedUserContext from "../../contexts/LoggedUserContext";

function LoggedUserInfo() {
  const { loggedUser } = useContext(LoggedUserContext);
  return loggedUser ? (
    <div>You are logged in as {loggedUser.login}.</div>
  ) : (
    <div>Not logged in.</div>
  );
}

export default LoggedUserInfo;
