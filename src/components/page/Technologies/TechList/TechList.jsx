import { BadgeCheckIcon } from "@heroicons/react/solid";
import s from "./TechList.module.scss";

const technologies = [
  "Html",
  "CSS/SaSS",
  "JavaScript",
  "React",
  "Node",
  "Redux",
];

export const TechList = () => {
  return (
    <div className={s.technologies__container}>
      <ul className={s.technologies__wrapper}>
        {technologies.map((el, index) => (
          <li key={index} className={s.technologies__item}>
            <BadgeCheckIcon className={s.technologies__icon} />
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
