import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

import Navbar from "./components/Navbar";

function AppRoutes() {
  return (
    <>
      {/* <Navbar /> */}
      <AuthRoutes />
    </>
  );
}

export default AppRoutes;

function AuthRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}
