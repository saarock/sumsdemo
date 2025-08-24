import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Academia, Business, Entrepreneurship, Home, NotFoundPage, PrivacyAndPolicies, ProjectGallery, Student } from "./pages";
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
            <Route path="/privacy-policy" element={<PrivacyAndPolicies/>} />
            <Route path="/business" element={<Business/>} />
            <Route path="/entrepreneurship" element={<Entrepreneurship/>} />
            <Route path="/project" element={<ProjectGallery/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
