import { useEffect } from "react";
import Parallax from "parallax-js";

import main from "image/parallax/main4.svg";
import human from "image/parallax/human.svg";
import style from "image/parallax/style.svg";
import jquery from "image/parallax/jquery.svg";
import php from "image/parallax/php.svg";
import html from "image/parallax/html5.svg";
import technology from "image/parallax/technology.svg";

import s from "./ParallaxList.module.scss";

export const ParallaxList = ({ sceneEl, element }) => {
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
      inputElement: element.current,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [element, sceneEl]);

  return (
    <div className={s.hero__img}>
      <ul ref={sceneEl}>
        <li className="layer" data-depth="0.00">
          <img className={s.parallax_img} src={main} alt="main" />
        </li>
        <li className="layer" data-depth="0.08">
          <img className={s.parallax_img} src={human} alt="human" />
        </li>
        <li className="layer" data-depth="0.40">
          <img className={s.parallax_img} src={technology} alt="technology" />
        </li>
        <li className="layer" data-depth="0.15">
          <img className={s.parallax_img} src={html} alt="html" />
        </li>
        <li className="layer" data-depth="0.10">
          <img className={s.parallax_img} src={style} alt="style" />
        </li>
        <li className="layer" data-depth="0.20">
          <img className={s.parallax_img} src={jquery} alt="jquery" />
        </li>
        <li className="layer" data-depth="0.25">
          <img className={s.parallax_img} src={php} alt="php" />
        </li>
      </ul>
    </div>
  );
};
