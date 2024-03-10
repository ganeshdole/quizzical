import React, { useState, useEffect } from "react";
import StartPage from "./pages/StartPage";
import Quiz from "./pages/Quiz";

function App() {
  const [quizStarted, setQuizStarted] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  useEffect(() => {
    if (!quizStarted) {
      getQuestions();
    }
  }, [quizStarted]);

  async function getQuestions() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );

      const data = await response.json();

      setQuestions(data.results);

      const correctAnswers = data.results.map((question) => {
        return question.correct_answer;
      });

      setCorrectAnswer(correctAnswers);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }

  function startQuiz() {
    setQuizStarted((prevValue) => !prevValue);
  }

  return (
    <main>
      {quizStarted ? (
        <StartPage startQuiz={startQuiz} />
      ) : (
        <Quiz questions={questions} answer={correctAnswer} />
      )}
    </main>
  );
}

export default App;
