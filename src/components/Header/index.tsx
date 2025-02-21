import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <section className={styles.headerNavigation}>
      <div className={styles.menu}>
        <NavLink to="/hotels">Hotels</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </div>
      <img
        src="/logo.png"
        alt="Logo"
        className={styles.logo}
        width="168"
        height="48"
      />
    </section>
  );
};

export default Header;
