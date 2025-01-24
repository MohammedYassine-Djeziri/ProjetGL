import React from "react";
import TopBarRL from "../components/TopBarRL";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();
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
        <form className="flex flex-col items-center gap-5 text-lg font-semibold w-[40%] mt-8">
          <Input
            type="email"
            label="E-Mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="email"
            label="Numero de telephone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="password"
            label="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            label="Confirmer Mot de Passe"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button
            onPressa={() => navigate("/login")}
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
          <a className=" underline text-blue-600 cursor-pointer" href="/login">
            {" "}
            Se Connecter
          </a>
        </p>
      </div>
    </div>
  );
}
