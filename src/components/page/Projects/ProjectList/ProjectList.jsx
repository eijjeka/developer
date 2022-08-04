import { projects } from "db/data";
import s from "./ProjectList.module.scss";

export const ProjectList = () => {
  return (
    <div className={s.projects__container}>
      <ul className={s.projects__wrapper}>
        {projects.map((item) => (
          <li key={item.id} className={s.projects__item}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img
                className={s.project__image}
                src={item.image}
                alt={item.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
