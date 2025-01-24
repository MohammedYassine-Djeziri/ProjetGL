import TopBarRL from "../components/TopBarRL";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate password confirmation
    if (password !== passwordConfirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Prepare the request body
    const userData = {
      username: "test",
      email: "test@gmail.com",
      password: "securePassword123",
    };

    try {
      console.log("Sending request with data:", JSON.stringify(userData));

      // Send a POST request to the backend
      const response = await fetch("https://glbackend-tdpm.onrender.com/auth/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error response:", errorData);
        throw new Error(errorData.message || "Erreur lors de l'inscription.");
      }

      // If registration is successful, navigate to the login page
      navigate("/login");
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Une erreur s'est produite lors de l'inscription.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen w-full">
      <TopBarRL />
      <div className="bg-primary w-full h-full flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-4xl font-bold">
          Inscrivez-vous pour Apprendre Online!
        </h1>
        <h2 className="text-4xl font-semibold">
          Commencez votre Parcours D’apprentissage dès Aujourd’hui
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 text-lg font-semibold w-[40%] mt-8"
        >
          <Input
            type="email"
            label="E-Mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            label="Nom d'utilisateur"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            label="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            label="Confirmer Mot de Passe"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            type="submit"
            className="bg-secondary text-white p-2 rounded-lg min-w-[300px]"
            radius="lg"
          >
            S’inscrire
          </Button>
          <p className="text-center">
            En Cliquant sur “S’inscrire”, vous Acceptez nos Conditions
            d’utilisation et vous Confirmez Avoire Lu Notre Politique de
            Confidentialité
          </p>
        </form>
        <p>
          Vous avez déja un compte?{" "}
          <a className="underline text-blue-600 cursor-pointer" href="/login">
            {" "}
            Se Connecter
          </a>
        </p>
      </div>
    </div>
  );
}