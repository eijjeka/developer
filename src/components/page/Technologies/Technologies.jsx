import Container from "components/Container";
import { TechList } from "./TechList";
import { ChipIcon } from "@heroicons/react/solid";
import s from "./Technologies.module.scss";

export const Technologies = () => {
  return (
    <section id="technologies" className={s.technologies}>
      <Container>
        <div className={s.meta__wrapper}>
          <ChipIcon className="icon" />
          <h2 className={s.title}>Skills & Technologies</h2>
          <p className={s.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus dolore odit fugit? Omnis commodi quod obcaecati magni,
            inventore nobis!
          </p>
        </div>
        <TechList />
      </Container>
    </section>
  );
};
