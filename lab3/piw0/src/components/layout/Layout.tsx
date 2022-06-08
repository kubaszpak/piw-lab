import { useContext } from "react";
import { Outlet } from "react-router-dom";
import LoggedUserContext from "../../contexts/LoggedUserContext";
import Logout from "../auth/Logout";
import LoggedUserInfo from "./LoggedUserInfo";
import Navbar from "./Navbar";

interface Props {
  handleLogout: () => void;
}

export default function Layout({ handleLogout }: Props) {
  const { loggedUser } = useContext(LoggedUserContext);
  return (
    <>
      <Navbar />
      <LoggedUserInfo />
      {loggedUser && <Logout handleLogout={handleLogout} />}
      <Outlet />
    </>
  );
}
