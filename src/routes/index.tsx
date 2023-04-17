import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/pages/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace={true} />}/>
    </Routes>
  );
};

export default RoutesMain;