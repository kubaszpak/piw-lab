import { Outlet } from "react-router-dom";
import Logout from "../auth/Logout";
import LoggedUserInfo from "./LoggedUserInfo";
import Navbar from "./Navbar";

interface Props {
  handleLogout: () => void;
}

export default function Layout({ handleLogout }: Props) {
  return (
    <>
      <Navbar />
      <LoggedUserInfo />
      <Logout handleLogout={handleLogout} />
      <Outlet />
    </>
  );
}
