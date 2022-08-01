import Container from "../../Container";
import main from "image/main4.svg";
import human from "image/human.svg";
import style from "image/style.svg";
import jquery from "image/jquery.svg";
import php from "image/php.svg";
import html from "image/html5.svg";
import technology from "image/technology.svg";
import s from "../../page/Homepage/Homepage.module.scss";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";

const Homepage = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

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
              est molestias nulla ipsa mollitia voluptate, veniam et laudantiu.
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
          <ul ref={sceneEl}>
            <li className="layer" data-depth="0.00">
              <img src={main} />
            </li>
            <li className="layer" data-depth="0.08">
              <img src={human} />
            </li>
            <li className="layer" data-depth="0.40">
              <img src={technology} />
            </li>
            <li className="layer" data-depth="0.15">
              <img src={html} />
            </li>
            <li className="layer" data-depth="0.10">
              <img src={style} />
            </li>
            <li className="layer" data-depth="0.20">
              <img src={jquery} />
            </li>
            <li className="layer" data-depth="0.25">
              <img src={php} />
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default Homepage;
