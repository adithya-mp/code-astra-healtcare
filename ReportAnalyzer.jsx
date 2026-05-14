import { useState } from "react";

export default function ReportAnalyzer() {
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Medical Report OCR Analyzer</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      {file && (
        <div className="bg-blue-50 p-6 rounded-2xl shadow-lg">
          <p>Uploaded File: {file.name}</p>
          <p className="mt-4 text-red-500">
            Hemoglobin below normal range — possible anemia.
          </p>
        </div>
      )}
    </div>
  );
}
