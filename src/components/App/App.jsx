import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../page/Homepage/Homepage";
import Projects from "components/page/Projects";

function App() {
  return (
    // <Layout>
    //   <Homepage />
    //   <Projects />
    // </Layout>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="project" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
