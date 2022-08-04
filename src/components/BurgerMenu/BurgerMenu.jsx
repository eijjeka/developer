import s from "./BurgerMenu.module.scss";
import { NavHashLink } from "react-router-hash-link";

export const BurgerMenu = ({ openMenu, activeMenu }) => {
  return (
    <>
      <div className={activeMenu ? s.show__menu : s.hide__menu}>
        <nav>
          <ul className={s.burger__nav}>
            <li className={s.nav__item}>
              <NavHashLink
                onClick={openMenu}
                to="/#home"
                className={s.nav__link}
              >
                Home
              </NavHashLink>
            </li>
            <li className={s.nav__item}>
              <NavHashLink
                onClick={openMenu}
                to="/#about"
                className={s.nav__link}
              >
                About
              </NavHashLink>
            </li>
            <li className={s.nav__item}>
              <NavHashLink
                onClick={openMenu}
                smooth
                to="/#projects"
                className={s.nav__link}
              >
                My project
              </NavHashLink>
            </li>
            <li className={s.nav__item}>
              <NavHashLink
                onClick={openMenu}
                smooth
                to="/#technologies"
                className={s.nav__link}
              >
                Skills
              </NavHashLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

// return <div className={s.menu__wrapper}></div>;
