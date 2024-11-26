import React, { useState } from "react";
import EncryptionPage from "./components/EncryptionPage";
import DecryptionPage from "./components/DecryptionPage";

function App() {
  const [currentPage, setCurrentPage] = useState("encryption");

  return (
    <div>
      <nav className="bg-gray-700 fixed top-0 left-0 w-full p-4 flex justify-center space-x-6 shadow-md z-10">
        <button
          onClick={() => setCurrentPage("encryption")}
          className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Encryption
        </button>
        <button
          onClick={() => setCurrentPage("decryption")}
          className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Decryption
        </button>
      </nav>

      {currentPage === "encryption" ? <EncryptionPage /> : <DecryptionPage />}
    </div>
  );
}

export default App;
