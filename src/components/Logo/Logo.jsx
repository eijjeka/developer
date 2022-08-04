import { Link } from "react-router-dom";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <>
      <Link className={s.logo} to="/">{`Developer </>`}</Link>
    </>
  );
};
