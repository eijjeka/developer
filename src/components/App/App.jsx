import Layout from "../Layout/Layout";
import { Home } from "components/page/Home";
import Projects from "components/page/Projects";
import { Technologies } from "components/page/Technologies";
import Testimonials from "components/page/Testimonials";

export const App = () => {
  return (
    <Layout>
      <Home />
      <Projects />
      <Technologies />
      <Testimonials />
    </Layout>
  );
};
