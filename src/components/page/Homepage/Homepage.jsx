import Container from "../../Container";
import programmer from "image/programmer.svg";
import s from "../../page/Homepage/Homepage.module.scss";

const Homepage = () => {
  return (
    <Container>
      <section className={s.home}>
        <div>
          <div className={s.meta__container}>
            <h1 className={s.home_title}>
              Hi, I'm Evheniy.
              <br />I love to build amazing apps.
            </h1>
            <p className={s.home_title__pre}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              est molestias nulla ipsa mollitia voluptates, veniam et laudantiu.
            </p>
          </div>
          <ul className={s.hero_list}>
            <li className={s.hero_list__item}>
              <button className={s.hero_list__btn}>Work With Me</button>
            </li>
            <li className={s.hero_list__item}>
              <button className={s.hero_list__btn}>See My Past Work</button>
            </li>
          </ul>
        </div>
        <div className={s.hero__img}>
          <img src={programmer} alt="programmer" />
        </div>
      </section>
    </Container>
  );
};

export default Homepage;
