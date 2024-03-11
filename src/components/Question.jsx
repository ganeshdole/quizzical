import React, { useEffect, useState } from "react";
import he from "he";

export default function Question(props) {
  const { question, correct_answer, incorrect_answers } = props.question;

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const [selectedAnswer, setSelectedAnswer] = React.useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const answerOptions = shuffledAnswers.map((answer, index) => (
    <div key={index}>
      <input
        type="radio"
        id={answer.option}
        name="answer"
        value={answer.option}
        checked={selectedAnswer === answer.option}
        onChange={handleAnswerChange}
      />

      <label htmlFor={answer.option}>{he.decode(answer.option)}</label>
    </div>
  ));

  React.useEffect(() => {
    const answers = incorrect_answers.map((answer) => {
      return { option: answer, isCorrect: false };
    });

    const randomIndex = Math.floor(Math.random() * incorrect_answers.length);
    answers.splice(randomIndex, 0, { option: correct_answer, isCorrect: true });
    setShuffledAnswers(answers);
  }, [correct_answer, incorrect_answers]);

  return (
    <div className="question-card">
      <p>{he.decode(question)}</p>
      <form>{answerOptions}</form>
      <hr />
    </div>
  );
}
