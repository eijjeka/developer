import s from "./HeroBtnList.module.scss";

export const HeroBtnList = () => {
  return (
    <ul className={s.hero_list}>
      <li className={s.hero_list__item}>
        <button className={s.hero_item__btn}>Work With Me</button>
      </li>
      <li className={s.hero_list__item}>
        <button className={s.hero_item__btn}>See My Past Work</button>
      </li>
    </ul>
  );
};
