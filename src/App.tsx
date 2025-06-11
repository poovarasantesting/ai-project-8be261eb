import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;