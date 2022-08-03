import { NavLink, Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Container from "../../Container";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner__container}>
          <div className={s.container__logo}>
            <Link className={s.link__logo} to="/">{`Developer </>`}</Link>
            <span className={s.line}>|</span>
            <nav>
              <NavHashLink
                activeClassName={s.selected}
                to="/#home"
                className={s.link}
              >
                Home
              </NavHashLink>
              <NavHashLink to="/#about" className={s.link}>
                About
              </NavHashLink>
              <NavHashLink smooth to="/#projects" className={s.link}>
                My project
              </NavHashLink>
              <NavHashLink smooth to="/#technologies" className={s.link}>
                Skills
              </NavHashLink>
            </nav>
          </div>
          <Link className={s.link} to="/">{`Hire Me →`}</Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
