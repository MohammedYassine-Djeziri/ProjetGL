// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const handleLogin = (event) => {
//     event.preventDefault(); // Prevent the form from reloading the page
//     navigate("/pageaccstd");
//   }
//   return (
//     <div className="min-h-screen bg-[#002333] flex flex-col items-center justify-center text-white">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold">DZ Skills</h1>
//         <h2 className="text-2xl font-semibold mt-2">
//           Votre Univers d’apprentissage vous Attend
//         </h2>
//         <p className="mt-2">Accédez à votre espace personnel</p>
//       </header>

//       <form className="bg-[#003244] p-6 rounded-lg shadow-lg w-[90%] max-w-md" onSubmit={handleLogin}>
//         <div className="mb-4">
//           <label
//             htmlFor="email-or-phone"
//             className="block mb-2 text-sm font-medium"
//           >
//             E-Mail ou numéro de téléphone<span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="email-or-phone"
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             placeholder="Entrez votre e-mail ou numéro de téléphone"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-2 text-sm font-medium">
//             Mot de Passe<span className="text-red-500">*</span>
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             placeholder="Entrez votre mot de passe"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600"
//         >
//           Se Connecter
//         </button>

//         <p className="text-center text-sm mt-4">
//           Vous n'avez pas de compte?{" "}
//           <a href="#" className="text-blue-400 underline" onClick={() => navigate("/signin")}>
//             S'inscrire
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    setError(""); // Clear any previous error message

    try {
      // Send a POST request to the backend
      const response = await fetch("http://localhost:8000/auth/jwt/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        // Handle response errors
        if (response.status === 401) {
          setError("Invalid email or password. Please try again.");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
        return;
      }

      const data = await response.json();

      // Save tokens to localStorage
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      // Navigate to the user's dashboard
      navigate("/pageaccstd");
    } catch (err) {
      // Handle network errors
      setError("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-[#002333] flex flex-col items-center justify-center text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">DZ Skills</h1>
        <h2 className="text-2xl font-semibold mt-2">
          Votre Univers d’apprentissage vous Attend
        </h2>
        <p className="mt-2">Accédez à votre espace personnel</p>
      </header>

      <form
        className="bg-[#003244] p-6 rounded-lg shadow-lg w-[90%] max-w-md"
        onSubmit={handleLogin}
      >
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="email-or-phone"
            className="block mb-2 text-sm font-medium"
          >
            E-Mail ou numéro de téléphone<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email-or-phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Entrez votre e-mail ou numéro de téléphone"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Mot de Passe<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600"
        >
          Se Connecter
        </button>

        <p className="text-center text-sm mt-4">
          Vous n'avez pas de compte?{" "}
          <a
            href="#"
            className="text-blue-400 underline"
            onClick={() => navigate("/signin")}
          >
            S'inscrire
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
