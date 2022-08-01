import { NavLink, Link } from "react-router-dom";
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
              <NavLink className={s.link} to="/">
                Home
              </NavLink>
              <NavLink className={s.link} to="about">
                About
              </NavLink>
              <NavLink className={s.link} to="project">
                My project
              </NavLink>
              <NavLink className={s.link} to="skills">
                Skills
              </NavLink>
            </nav>
          </div>
          <Link className={s.link} to="/">{`Hire Me →`}</Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
