import Container from "../../Container";
import { HeroBtnList } from "./HeroBtnList";
import { ParallaxList } from "./ParallaxList";
import { useRef } from "react";
import s from "components/page/Home/Home.module.scss";

export const Home = () => {
  const sceneEl = useRef(null);
  const section = useRef(null);

  return (
    <Container>
      <section id="home" className={s.home} ref={section}>
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
          <HeroBtnList />
        </div>
        <ParallaxList sceneEl={sceneEl} element={section} />
      </section>
    </Container>
  );
};
