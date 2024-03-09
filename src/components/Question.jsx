import React from "react";
import he from "he";

export default function Question(props) {
  const { question, correct_answer, incorrect_answers } = props.question;
  const randomIndex = Math.floor(Math.random() * incorrect_answers.length);
  const shuffledAnswers = [...incorrect_answers];

  shuffledAnswers.splice(randomIndex, 0, correct_answer);

  const answerOptions = shuffledAnswers.map((answer, index) => (
    <div key={index}>
      <input type="radio" id={answer} name="answer" value={answer} />
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
