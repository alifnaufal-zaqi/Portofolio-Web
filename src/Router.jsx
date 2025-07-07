import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailProject from "./pages/DetailProject";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<DetailProject />} />
    </Routes>
  );
};

export default Router;
