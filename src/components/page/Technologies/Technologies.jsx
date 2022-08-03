import Container from "components/Container";
import { ChipIcon } from "@heroicons/react/solid";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import s from "../Projects/Projects.module.scss";
import style from "./Technologies.module.scss";

export const Technologies = () => {
  return (
    <section id="technologies" className={style.technologies}>
      <Container>
        <div className={s.title_meta}>
          <ChipIcon className="icon" />
          <h2 className={s.projects__title}>Skills & Technologies</h2>
          <p className={s.projects__text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus dolore odit fugit? <br /> Omnis commodi quod obcaecati
            magni, inventore nobis!
          </p>
        </div>
        <div className={s.projects__container}>
          <ul className={s.projects__wrapper}>
            <li className={style.technologies__item}>
              <BadgeCheckIcon className={style.technologies__icon} />
              Html
            </li>
            <li className={style.technologies__item}>
              {" "}
              <BadgeCheckIcon className={style.technologies__icon} />
              CSS/SaSS
            </li>
            <li className={style.technologies__item}>
              <BadgeCheckIcon className={style.technologies__icon} />
              JavaScript
            </li>
            <li className={style.technologies__item}>
              <BadgeCheckIcon className={style.technologies__icon} />
              React
            </li>
            <li className={style.technologies__item}>
              <BadgeCheckIcon className={style.technologies__icon} />
              Node
            </li>
            <li className={style.technologies__item}>
              <BadgeCheckIcon className={style.technologies__icon} />
              Redux
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
