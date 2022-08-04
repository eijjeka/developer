import Container from "components/Container";
import { UserGroupIcon } from "@heroicons/react/solid";
import s from "./Testimonials.module.scss";
import { TestimonialsList } from "./TestimonialsList";

const Testimonials = () => {
  return (
    <section className={s.testimonials}>
      <Container>
        <div className={s.meta__wrapper}>
          <UserGroupIcon className="icon" />
          <h2 className={s.title}>Testimonials</h2>
          <p className={s.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus dolore odit fugit? Omnis commodi quod obcaecati magni,
            inventore nobis!
          </p>
        </div>
        <TestimonialsList />
      </Container>
    </section>
  );
};

export default Testimonials;
