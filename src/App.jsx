import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import LoginLayout from "@/layout/Login";
import Home from "@/pages/Home";

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