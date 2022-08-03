// import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../page/Homepage/Homepage";
import Projects from "components/page/Projects";
import { Technologies } from "components/page/Technologies";

function App() {
  return (
    <Layout>
      <Homepage />
      <Projects />
      <Technologies />
    </Layout>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Homepage />} />
    //     <Route path="project" element={<Projects />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
