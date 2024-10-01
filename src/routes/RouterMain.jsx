
import { Route, Routes } from "react-router-dom";
import { DefaultTemplate } from "../pages/DefaultTemplate";
import { Thanks } from "../pages/Thanks";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
};
