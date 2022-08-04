import { CodeIcon } from "@heroicons/react/solid";
import Container from "../../Container";
import { ProjectList } from "./ProjectList";
import s from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <div className={s.meta__wrapper}>
          <CodeIcon className="icon" />
          <h2 className={s.title}>App I've Built</h2>
          <p className={s.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            quibusdam quam dolorum, animi, perferendis soluta perferendis
            soluta.
          </p>
        </div>
        <ProjectList />
      </Container>
    </section>
  );
};

export default Projects;
