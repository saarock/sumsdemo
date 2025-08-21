import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Academia, Home, Student } from "./pages";
import { useBackToTop } from "./hooks";

const App = () => {
  useBackToTop()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/student" element={<Student />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
