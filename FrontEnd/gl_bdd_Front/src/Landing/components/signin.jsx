import { useNavigate } from "react-router-dom"

function Signin() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignup = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    navigate("/pageaccstd"); // Navigate to the App page (or the route you specify)
  };
  return(
    <div className="min-h-screen bg-[#002333] text-white flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-left">DZ Skills</h1>
        <h2 className="text-2xl font-semibold mt-2">Inscrivez-vous pour Apprendre Online!</h2>
        <p className="mt-2">Commencez votre Parcours D'apprentissage dès Aujourd'hui</p>
      </header>

      <form className="bg-[#003244] p-6 rounded-lg shadow-lg w-[90%] max-w-md" onSubmit={handleSignup}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            E-Mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Entrez votre e-mail"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium">
            Numéro de Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Entrez votre numéro"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Mot de Passe<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">
            Confirmer Mot de Passe<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Confirmez votre mot de passe"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Quel est votre Status:<span className="text-red-500">*</span></label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="status" value="expert" className="mr-2" />
              Expert
            </label>
            <label className="flex items-center">
              <input type="radio" name="status" value="apprenant" className="mr-2" />
              Apprenant
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded font-bold hover:bg-green-600"
          
        >
          S'inscrire
        </button>

        <p className="text-xs text-gray-300 mt-4">
          En Cliquant sur "S'inscrire", vous Acceptez nos <a href="#" className="text-blue-400 underline">Conditions d'utilisation</a> et vous
          Confirmez Avoir Lu Notre <a href="#" className="text-blue-400 underline">Politique de Confidentialité</a>.
        </p>

        <p className="text-center text-sm mt-4">
          Vous avez déjà un compte? <a href="#" className="text-blue-400 underline"  onClick={() => navigate("/login")}>Se Connecter</a>
        </p>
      </form>
    </div>

  
  )
}

export default Signin