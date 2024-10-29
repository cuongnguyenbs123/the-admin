import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import LoginLayout from "@/pages/Login";
import Home from "@/pages/Home";
import "@/assets/styles/main.css";
import "@/assets/styles/responsive.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginLayout />}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  );
}