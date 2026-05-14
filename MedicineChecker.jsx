import { useState } from "react";

export default function MedicineChecker() {
  const [medicine, setMedicine] = useState("");

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Medicine Information Checker</h1>

      <input
        type="text"
        placeholder="Enter medicine name"
        className="w-full p-4 rounded-xl border"
        onChange={(e) => setMedicine(e.target.value)}
      />

      {medicine && (
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg">
          <p><strong>Medicine:</strong> {medicine}</p>
          <p><strong>Usage:</strong> Pain relief and fever reduction</p>
          <p><strong>Side Effects:</strong> Nausea, dizziness</p>
          <p><strong>Warning:</strong> Avoid overdose</p>
        </div>
      )}
    </div>
  );
}
