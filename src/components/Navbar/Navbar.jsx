import { NavHashLink } from "react-router-hash-link";
import s from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <NavHashLink to="/#home" className={s.nav__link}>
        Home
      </NavHashLink>
      <NavHashLink to="/#about" className={s.nav__link}>
        About
      </NavHashLink>
      <NavHashLink smooth to="/#projects" className={s.nav__link}>
        My project
      </NavHashLink>
      <NavHashLink smooth to="/#technologies" className={s.nav__link}>
        Skills
      </NavHashLink>
    </nav>
  );
};
