import React, { useState } from "react";

function DecryptionPage() {
  const [inputPassword, setInputPassword] = useState("");
  const [decryptedPassword, setDecryptedPassword] = useState("");

  const salts = [
    "01ab#$", "12cd!@", "34ef%^", "56gh&*", "78ij()",
    "90kl-_", "mnop=+", "qrst<>", "uvwx{}!", "yzAB[]"
  ];

  function handleDecryption(event) {
    event.preventDefault();
    let decrypted = "";
    let tempPassword = inputPassword;

    while (tempPassword.length > 0) {
      const chunk = tempPassword.slice(0, 2); // Get the first two characters
      let foundSalt = false;

      for (const salt of salts) {
        if (tempPassword.startsWith(chunk + salt)) {
          decrypted += chunk; // Add the chunk to the decrypted password
          tempPassword = tempPassword.slice((chunk + salt).length); // Remove chunk + salt
          foundSalt = true;
          break;
        }
      }

      if (!foundSalt) {
        decrypted += tempPassword; // Add remaining characters if no salt matches
        break;
      }
    }

    setDecryptedPassword(decrypted);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Password Decryption</h1>
        <form onSubmit={handleDecryption} className="space-y-4">
          <div>
            <label htmlFor="encryptedPassword" className="block text-lg font-medium text-gray-700">Enter Encrypted Password:</label>
            <input
              type="password"
              id="encryptedPassword"
              name="encryptedPassword"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Decrypt
          </button>
        </form>
        {decryptedPassword && (
          <div className="mt-6">
            <strong className="text-lg text-gray-800">Decrypted Password:</strong>
            <p className="text-lg text-gray-900 mt-2">{decryptedPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DecryptionPage;
