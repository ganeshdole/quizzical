import React, { useEffect, useState } from "react";
import he from "he";

export default function Question(props) {
  const { question, correct_answer, incorrect_answers } = props.question;

  const answerVisible = props.answerVisible;

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  React.useEffect(() => {
    const answers = [...incorrect_answers];
    const randomIndex = Math.floor(Math.random() * incorrect_answers.length);
    answers.splice(randomIndex, 0, correct_answer);
    setShuffledAnswers(answers);
  }, [correct_answer, incorrect_answers]);

  const [selectedAnswer, setSelectedAnswer] = React.useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const answerOptions = shuffledAnswers.map((answer, index) => (
    <div key={index}>
      <input
        type="radio"
        id={answer}
        name="answer"
        value={answer}
        checked={selectedAnswer == answer}
        onChange={handleAnswerChange}
      />
      <label htmlFor={answer}>{he.decode(answer)}</label>
    </div>
  ));

  return (
    <div className="question-card">
      <p>{he.decode(question)}</p>
      <form>{answerOptions}</form>
      <hr />
    </div>
  );
}
