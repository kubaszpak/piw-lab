import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Students</NavLink>
      <NavLink to="/students/new">Create student</NavLink>
      <NavLink to="/groups">Groups</NavLink>
      <NavLink to="/groups/new">Create group</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
}
