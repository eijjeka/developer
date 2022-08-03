import { CodeIcon } from "@heroicons/react/solid";
import Container from "../../Container";
import s from "./Projects.module.scss";
import phonebook from "image/phonebook.gif";
import webstudio from "image/WebStudio.gif";
import movies from "image/movie.gif";
import image from "image/image.gif";

const Projects = () => {
  return (
    <section>
      <Container>
        <div className={s.title_meta}>
          <CodeIcon className={s.project__icon} />
          <h2 className={s.projects__title}>App I've Built</h2>
          <p className={s.projects__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            quibusdam quam dolorum,
            <br /> animi, perferendis soluta perferendis soluta.
          </p>
        </div>
        <div className={s.projects__container}>
          <ul className={s.projects__wrapper}>
            <li className={s.projects__item}>
              <a
                href="https://eijjeka.github.io/goit-react-hw-08-phonebook/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={s.project__image}
                  src={phonebook}
                  alt="phonebook"
                />
              </a>
            </li>
            <li className={s.projects__item}>
              <a
                href="https://eijjeka.github.io/goit-react-hw-05-movies/"
                target="_blank"
                rel="noreferrer"
              >
                <img className={s.project__image} src={movies} alt="movie" />
              </a>
            </li>
            <li className={s.projects__item}>
              <a
                href="https://eijjeka.github.io/goit-react-hw-04-hooks-images/"
                target="_blank"
                rel="noreferrer"
              >
                <img className={s.project__image} src={image} alt="search" />
              </a>
            </li>
            <li className={s.projects__item}>
              <a
                href="https://eijjeka.github.io/goit-markup-hw-08/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={s.project__image}
                  src={webstudio}
                  alt="webstudio"
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
