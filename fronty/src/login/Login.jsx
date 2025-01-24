import { useState } from "react";
import TopBarRL from "../components/TopBarRL";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle errors
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send a POST request to the backend
      const response = await fetch("https://glbackend-tdpm.onrender.com/auth/jwt/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      console.log(response)

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Store the tokens in local storage
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);

        // Redirect the user to the dashboard or another protected page
        navigate("/");
      } else {
        // Handle login errors
        const errorData = await response.json();
        setError(errorData.detail || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <TopBarRL />
      <div className="bg-primary w-full h-full flex flex-col items-center justify-center gap-10 text-white">
        <h1 className="text-4xl font-bold">
          Votre Univers d’apprentissage vous Attend
        </h1>
        <h2 className="text-2xl font-semibold">
          Accedez a votre espace personnel
        </h2>
        <form
          onSubmit={handleLogin} // Add onSubmit handler
          className="flex flex-col items-center gap-8 text-lg font-semibold w-[40%]"
        >
          <Input
            type="username"
            label="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            label="E-Mail ou numero de telephone"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
          <Button
            type="submit" // Change to type="submit" to trigger form submission
            className="bg-secondary text-white p-2 rounded-lg min-w-[300px]"
            radius="lg"
          >
            Login
          </Button>
        </form>
        <p>
          Vous n’avez pas de compte?{" "}
          <a
            className="underline text-blue-600 cursor-pointer"
            href="/register"
          >
            S’inscrire
          </a>
        </p>
      </div>
    </div>
  );
}