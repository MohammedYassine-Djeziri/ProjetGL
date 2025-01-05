
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Monapprentissage from "./monapprentissage";
import Mescertificats from "./mescertificats";

const Pageaccstd = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to track the search input
  const navigate = useNavigate(); // Hook to handle navigation

  // Handle the search submission
  const handleSearch = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      // Redirect to the SearchPage with the search query as a parameter
      navigate(`/searchcourse?query=${encodeURIComponent(searchQuery)}`);
    }
  }
  return (
    <div className="bg-gradient-to-b from-[#011E3A] to-[#062A49] min-h-screen text-white font-sans">
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">DZ Skills</h1>
        <input
          type="text"
          placeholder="chercher des cours"
          className="px-4 py-2 rounded-lg text-black w-full max-w-md"
          value={searchQuery} // Controlled input
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          onKeyDown={handleSearch} // Handle "Enter" key press
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">Profile</button>
      </header>

      <main className="px-6">
        <h2 className="text-2xl font-semibold mt-6">Page d’accueil</h2>

        {/* Mon Apprentissage Section */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold border-b border-gray-500">Mon apprentissage</h3>
          <Monapprentissage />
        </section>

        {/* Mes Certificats Section */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold border-b border-gray-500">Mes certificats</h3>
          <Mescertificats />
        </section>
      </main>
    </div>
  );
};

export default Pageaccstd;
