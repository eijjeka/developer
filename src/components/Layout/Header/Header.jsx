import { NavHashLink } from "react-router-hash-link";
import Container from "../../Container";
import { Logo } from "components/Logo";
import { Navbar } from "components/Navbar";
import s from "./Header.module.scss";
import { BurgerMenu } from "components/BurgerMenu";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner__container}>
          <div className={s.container__logo}>
            <Logo />
            <span className={s.line}>|</span>
            <Navbar />
            <BurgerMenu openMenu={openMenu} activeMenu={toggleMenu} />
          </div>
          <NavHashLink className={s.response__link} to="/#response">
            {`Hire Me →`}
          </NavHashLink>
          <button onClick={openMenu} className={s.burger__btn}>
            <MenuIcon width={30} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
