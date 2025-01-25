import React, { useState } from "react";
import TopBarRL from "../components/TopBarRL";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { usePostData } from "../hooks/usePostData";

export default function Register() {
  const [email, setEmail] = useState("test@example.com"); // Add default value
  const [username, setUsername] = useState("testuser"); // Add default value
  const [password, setPassword] = useState("aymendenoub"); // Add default value
  const [passwordConfirm, setPasswordConfirm] = useState("aymendenoub"); // Add default value
  const navigate = useNavigate();

  const { mutate, isPending, isError, error, isSuccess } = usePostData("https://glbackend-tdpm.onrender.com/auth/users/");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }


    mutate({
      username: username,
      email: email,
      password: password,
      first_name: username,
      last_name: username,
    });
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
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 text-lg font-semibold w-[40%] mt-8">
          <Input
            type="email"
            label="E-Mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="text"
            label="Nom d’utilisateur"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            type="password"
            label="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            type="password"
            label="Confirmer Mot de Passe"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
          />
          {isError && <p className="text-red-500 text-center p-2">Error: {error.message}</p>}
          {isSuccess && <p className="text-green-500 text-center p-2">User created successfully!</p>}
          <Button
            type="submit"
            isLoading={isPending}
            className="bg-secondary text-black p-2 rounded-lg min-w-[300px]"
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
