import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailProject from "./pages/DetailProject";
import Sertification from "./pages/Sertification";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<DetailProject />} />
      <Route path="/sertifications" element={<Sertification />} />
    </Routes>
  );
};

export default Router;
