import React, { useState } from 'react';

export default function CourseForm (){
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const courseContent = [
    { type: 'lecture', title: 'Lecture 1: Introduction au Machine Learning', content: '/path/to/file1.pdf' },
    { type: 'lecture', title: 'Lecture 2: Apprentissage Supervisé', content: '/path/to/file2.pdf' },
    { type: 'video', title: 'Vidéo 1: Introduction', content: 'video1.mp4' },
    { type: 'video', title: 'Vidéo 2: Réseaux de Neurones', content: 'video2.mp4' },
    { type: 'quiz', title: 'Quiz 1: Concepts de Base', content: [
      { question: 'Qu\'est-ce qu\'un modèle supervisé ?', options: ['Apprentissage sans étiquette', 'Apprentissage avec étiquette', 'Apprentissage par renforcement'], answer: 'Apprentissage avec étiquette' },
      { question: 'Qu\'est-ce qu\'un réseau de neurones ?', options: ['Un algorithme d\'optimisation', 'Un modèle d\'apprentissage', 'Une méthode de clustering'], answer: 'Un modèle d\'apprentissage' },
      { question: 'Quel est le but de la régression ?', options: ['Prédire une valeur continue', 'Classer des données', 'Régler un hyperparamètre'], answer: 'Prédire une valeur continue' }
    ]},
    { type: 'quiz', title: 'Quiz 2: Avancées du Machine Learning', content: [
      { question: 'Qu\'est-ce que l\'apprentissage non supervisé ?', options: ['Apprentissage avec étiquette', 'Clustering et réduction de dimensionnalité', 'Prédiction des résultats'], answer: 'Clustering et réduction de dimensionnalité' },
      { question: 'Qu\'est-ce que le deep learning ?', options: ['Apprentissage avec des réseaux de neurones profonds', 'Une méthode de sélection de caractéristiques', 'Une technique d\'optimisation'], answer: 'Apprentissage avec des réseaux de neurones profonds' },
    ]}
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setSelectedContent(courseContent[index]);
    setIsQuizSubmitted(false); // Reset quiz submission state
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setQuizAnswer({ ...quizAnswer, [questionIndex]: answer });
  };

  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
    alert('Quiz soumis');
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
              selectedCard === index ? 'bg-green-300' : 'bg-green-100'
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="flex items-center space-x-2">
              {/* Icône selon le type de contenu */}
              <div className="w-6 h-6 text-green-600">
                {item.type === 'lecture' && <i className="fas fa-book"></i>}
                {item.type === 'video' && <i className="fas fa-video"></i>}
                {item.type === 'quiz' && <i className="fas fa-question-circle"></i>}
              </div>
              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Zone centrale pour afficher le contenu */}
      <div className="flex-1 p-6 bg-gray-50">
        {selectedContent && selectedContent.type === 'lecture' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">{selectedContent.title}</h2>
            <div className="bg-white p-4 border rounded-lg">
              <iframe
                src={selectedContent.content}
                width="100%"
                height="600px"
                title="PDF Lecture"
              >
                Votre navigateur ne prend pas en charge les fichiers PDF.
              </iframe>
            </div>
          </div>
        )}

        {selectedContent && selectedContent.type === 'video' && (
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

        {selectedContent && selectedContent.type === 'quiz' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">{selectedContent.title}</h2>
            <form className="space-y-6">
              {selectedContent.content.map((question, index) => (
                <div key={index} className="bg-white p-4 border rounded-lg">
                  <p className="font-medium">{question.question}</p>
                  {question.options.map((option, idx) => (
                    <label key={idx} className="block">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={quizAnswer[index] === option}
                        onChange={() => handleAnswerChange(index, option)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
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
};

