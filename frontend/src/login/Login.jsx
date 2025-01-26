import { useState } from "react";
import TopBarRL from "../components/TopBarRL";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("testuser"); // Add default value
  const [password, setPassword] = useState("aymendenoub"); // Add default value
  const [error, setError] = useState(""); // State to handle errors
  const [loading, setLoading] = useState(false); // State to handle loading
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Clear any previous errors
    setLoading(true); // Set loading state

    try {
      // Send a POST request to the backend
      const response = await fetch("https://glbackend-tdpm.onrender.com/DzSkills/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username, // Change email to username
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
        localStorage.setItem("role", data.role);

        // do a request to https://glbackend-tdpm.onrender.com/auth/me/ to get the user data and set it in the local storage
        const res = await fetch("https://glbackend-tdpm.onrender.com/auth/users/me/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${data.access}`
          }
        });

        const userData = await res.json();
        console.log("User data:", userData);

        localStorage.setItem("user", JSON.stringify(userData));

        // Redirect the user to the dashboard or another protected page
        // or if the user does not have a role, redirect him to the role selection page
        if (data.role === "student") {
          navigate("/client");
        } else if (data.role === "instructor") {
          navigate("/expert");
        } else {
          navigate("/select-role");
        }

      } else {
        // Handle login errors
        const errorData = await response.json();
        setError(errorData.detail || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
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
            label="Nom d’utilisateur"
            required
            value={username} // Change email to username
            onChange={(e) => setUsername(e.target.value)} // Change email to username
          />
          <Input
            type="password1"
            label="Mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
          <Button
            type="submit" // Change to type="submit" to trigger form submission
            className="bg-secondary text-black p-2 rounded-lg min-w-[300px]"
            radius="lg"
            isLoading={loading} // Set isLoading to loading state
          >
            Se Connecter
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