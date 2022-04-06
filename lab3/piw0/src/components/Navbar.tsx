import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Students</NavLink>
      <NavLink to="/create">Create ad</NavLink>
      <NavLink to="/groups">Groups</NavLink>
    </nav>
  );
}
