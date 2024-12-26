import React,{useState , useEffect} from "react";
import Coursecard from "./coursecard";
import { useLocation , useNavigate } from "react-router-dom";

const Searchcourse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialquery = new URLSearchParams(location.search).get("query") || ""; // Get search query from URL
  const [query, setQuery] = useState(initialquery);

  // Example data for courses
  const courses = [
    {
      title: "React pour les débutants",
      instructor: "Ziani Taki Eddine",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      image:
        "https://via.placeholder.com/150", // Replace with real image URLs
    },
    {
      title: "Introduction à Tailwind CSS",
      instructor: "Ziani Taki Eddine",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      image:
        "https://via.placeholder.com/150", // Replace with real image URLs
    },
    
  ];
  const filteredCourses = query ? courses.filter((course) =>
    course.title.toLowerCase().includes(query?.toLowerCase() || "")
  ) : courses;
   // Update the URL when the query changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.set("query", query);
    }
    navigate(`?${params.toString()}`, { replace: true });
  }, [query, navigate]);


  return (
    <div className="min-h-screen bg-[#002333] text-white">
      {/* Header */}
      <header className="bg-[#002333] flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">DZ Skills</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="chercher des cours"
          className="p-2 rounded w-1/2 md:w-1/3 text-black"
        />
        <div>
          <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            profile
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <h2 className="text-lg font-bold mb-4">voici les resultats:</h2>
        <hr className="border-t-2 border-gray-500 mb-6" />
        {/* Courses List */}
        <div>
        {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <Coursecard
                key={index}
                title={course.title}
                instructor={course.instructor}
                description={course.description}
                image={course.image}
              />
            ))
          ) : (
            <p>Aucun cours trouvé pour "{query}"</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Searchcourse;
