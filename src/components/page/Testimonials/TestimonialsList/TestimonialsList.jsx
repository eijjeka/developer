import { TerminalIcon } from "@heroicons/react/solid";
import { users } from "db/data";
import s from "./TestimonialsList.module.scss";

export const TestimonialsList = () => {
  return (
    <ul className={s.list}>
      {users.map((user, index) => (
        <li key={index} className={s.item}>
          <TerminalIcon className={s.icon} />
          <p className={s.text}>{user.text}</p>
          <div className={s.meta__user}>
            <img className={s.avatar} src={user.avatar} alt={user.name} />
            <div>
              <h3>{user.name}</h3>
              <span>{user.company}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
