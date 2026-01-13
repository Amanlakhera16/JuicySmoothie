import { Link, NavLink } from "react-router-dom"
import Profile from "../Profile"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">🍹 Fresh Juices & Smoothies</h2>

      <ul className="nav-links">
        <li className="nav-profile">
          <Profile />
        </li>

        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
