'use client'
import { useState } from "react";

export default function RefreshButton() {
  const [apiKey, setApiKey] = useState("");

  const generateApiKey = () => {
    // Aquí puedes agregar la lógica para generar una nueva API key
    const newApiKey = "new-api-key-" + Math.random().toString(36).substr(2, 10);
    setApiKey(newApiKey);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-white text-black border border-gray-300 rounded px-4 py-2 shadow-md hover:bg-gray-100"
        onClick={generateApiKey}
      >
        Refresh
      </button>
      {apiKey && (
        <p className="mt-4 text-gray-600">New API Key: {apiKey}</p>
      )}
    </div>
  );
}