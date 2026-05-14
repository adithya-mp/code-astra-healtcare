import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SymptomAnalyzer from "./pages/SymptomAnalyzer";
import ReportAnalyzer from "./pages/ReportAnalyzer";
import MedicineChecker from "./pages/MedicineChecker";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/symptoms" element={<SymptomAnalyzer />} />
        <Route path="/reports" element={<ReportAnalyzer />} />
        <Route path="/medicine" element={<MedicineChecker />} />
      </Routes>
    </BrowserRouter>
  );
}