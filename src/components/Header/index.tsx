import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="header-navigation-bar">
      <NavLink to="/hotels">hotels</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </section>
  );
};

export default Header;
