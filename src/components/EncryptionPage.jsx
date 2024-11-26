import React, { useState } from "react";

function EncryptionPage() {
  const [plainPassword, setPlainPassword] = useState("");
  const [encryptedPassword, setEncryptedPassword] = useState("");

  const salts = [
    "01ab#$", "12cd!@", "34ef%^", "56gh&*", "78ij()",
    "90kl-_", "mnop=+", "qrst<>", "uvwx{}!", "yzAB[]"
  ];

  function handleEncryption(event) {
    event.preventDefault();
    let encrypted = "";
    for (let i = 0; i < plainPassword.length; i += 2) {
      const chunk = plainPassword.slice(i, i + 2);
      if (chunk.length === 2) {
        const randomIndex = Math.floor(Math.random() * salts.length);
        const salt = salts[randomIndex];
        encrypted += chunk + salt;
      } else {
        encrypted += chunk; // Add last chunk without salt if it's incomplete
      }
    }
    setEncryptedPassword(encrypted);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Password Encryption</h1>
        <form onSubmit={handleEncryption} className="space-y-4">
          <div>
            <label htmlFor="plainPassword" className="block text-lg font-medium text-gray-700">Enter Plain Password:</label>
            <input
              type="text"
              id="plainPassword"
              name="plainPassword"
              value={plainPassword}
              onChange={(e) => setPlainPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Encrypt
          </button>
        </form>
        {encryptedPassword && (
          <div className="mt-6">
            <strong className="text-lg text-gray-800">Encrypted Password:</strong>
            <p className="text-lg text-gray-900 mt-2">{encryptedPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EncryptionPage;
