import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}