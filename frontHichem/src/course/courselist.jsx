import React, { useState, useEffect } from "react";
import { fetchQuizzes } from "./../API/quizAPI"; // Import de l'API

export default function CourseForm() {
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [quizzes, setQuizzes] = useState([]);

  // ID statiques (remplacez-les par des valeurs dynamiques si nécessaires)
  const instructor_pk = 1; // Exemple : ID de l'instructeur
  const course_pk = 1; // Exemple : ID du cours
  const content_pk = 1; // Exemple : ID du contenu

  const courseContent = [
    { type: "lecture", title: "Lecture 1: Introduction au Machine Learning", content: "/path/to/file1.pdf" },
    { type: "lecture", title: "Lecture 2: Apprentissage Supervisé", content: "/path/to/file2.pdf" },
    { type: "video", title: "Vidéo 1: Introduction", content: "video1.mp4" },
    { type: "video", title: "Vidéo 2: Réseaux de Neurones", content: "video2.mp4" },
    { type: "quiz", title: "Quiz 1: Concepts de Base", content: [] },
    { type: "quiz", title: "Quiz 2: Avancées du Machine Learning", content: [] },
  ];

  // Fetch quizzes lorsque le contenu est de type "quiz"
  useEffect(() => {
    if (selectedContent?.type === "quiz") {
      const getQuizzes = async () => {
        try {
          const data = await fetchQuizzes(instructor_pk, course_pk, content_pk);
          setQuizzes(data);
        } catch (error) {
          console.error("Erreur lors de la récupération des quizzes :", error);
        }
      };
      getQuizzes();
    }
  }, [selectedContent]);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setSelectedContent(courseContent[index]);
    setIsQuizSubmitted(false);
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setQuizAnswer({ ...quizAnswer, [questionIndex]: answer });
  };

  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
    alert("Quiz soumis");
  };

  const handleCancelQuiz = () => {
    setQuizAnswer({});
    setIsQuizSubmitted(false);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Barre latérale gauche (15%) */}
      <div className="w-full md:w-1/6 bg-gray-200 bg-opacity-70 p-4 space-y-4">
        {courseContent.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer p-3 mb-3 rounded-lg transition-colors hover:bg-green-200 ${
              selectedCard === index ? "bg-green-300" : "bg-green-100"
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 text-green-600">
                {item.type === "lecture" && <i className="fas fa-book"></i>}
                {item.type === "video" && <i className="fas fa-video"></i>}
                {item.type === "quiz" && <i className="fas fa-question-circle"></i>}
              </div>
              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Zone centrale pour afficher le contenu */}
      <div className="flex-1 p-6 bg-gray-50">
        {selectedContent && selectedContent.type === "lecture" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">{selectedContent.title}</h2>
            <div className="bg-white p-4 border rounded-lg">
              <iframe src={selectedContent.content} width="100%" height="600px" title="PDF Lecture">
                Votre navigateur ne prend pas en charge les fichiers PDF.
              </iframe>
            </div>
          </div>
        )}

        {selectedContent && selectedContent.type === "video" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">{selectedContent.title}</h2>
            <div className="bg-white p-4 border rounded-lg">
              <video controls className="w-full">
                <source src={selectedContent.content} type="video/mp4" />
                Votre navigateur ne prend pas en charge la vidéo.
              </video>
            </div>
          </div>
        )}

        {selectedContent && selectedContent.type === "quiz" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">{selectedContent.title}</h2>
            <form className="space-y-6">
              {quizzes.map((quiz, index) => (
                <div key={index} className="bg-white p-4 border rounded-lg">
                  <p className="font-medium">{quiz.title}</p>
                </div>
              ))}
            </form>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleSubmitQuiz}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                disabled={isQuizSubmitted}
              >
                Soumettre
              </button>
              <button
                onClick={handleCancelQuiz}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
