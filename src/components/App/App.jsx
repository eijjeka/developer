import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../page/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
