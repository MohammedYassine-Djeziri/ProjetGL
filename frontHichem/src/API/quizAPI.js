// src/api/quizAPI.js
export const API_URL = "http://127.0.0.1:8000"; // URL de base de votre API

// Fonction pour récupérer les quizzes
export const fetchQuizzes = async (instructor_pk, course_pk, content_pk) => {
  try {
    const response = await fetch(
      `${API_URL}/DzSkills/instructors/${instructor_pk}/courses/${course_pk}/contents/${content_pk}/quiz/`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des quizzes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur API : ", error);
    throw error; // Remonte l'erreur pour que React puisse la gérer
  }
};
