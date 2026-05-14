import { useState } from "react";
import axios from "axios";

export default function SymptomAnalyzer() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);

  const analyzeSymptoms = async () => {
    const response = await axios.post("http://localhost:5000/analyze", {
      symptoms,
    });

    setResult(response.data);
  };

  return (
    <div className="min-h-screen p-8 bg-blue-50">
      <h1 className="text-3xl font-bold mb-4">AI Symptom Analyzer</h1>

      <textarea
        className="w-full p-4 rounded-xl border"
        rows="5"
        placeholder="Enter symptoms..."
        onChange={(e) => setSymptoms(e.target.value)}
      />

      <button
        onClick={analyzeSymptoms}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Analyze Symptoms
      </button>

      {result && (
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Analysis Result</h2>
          <p><strong>Condition:</strong> {result.condition}</p>
          <p><strong>Severity:</strong> {result.severity}</p>
          <p><strong>Advice:</strong> {result.advice}</p>
          <p><strong>Specialist:</strong> {result.specialist}</p>
        </div>
      )}
    </div>
  );
}
