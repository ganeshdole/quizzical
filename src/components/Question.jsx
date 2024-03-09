import React from "react";
import he from "he";

export default function Question(props) {
  const { question, correct_answer, incorrect_answers } = props.question;
  const randomIndex = Math.floor(Math.random() * incorrect_answers.length);
  incorrect_answers.splice(randomIndex, 0, correct_answer);

  return (
    <div className="question-card">
      <p>{he.decode(question)}</p>
      <form>
        <input
          type="radio"
          id={incorrect_answers[0]}
          name="answer"
          value={incorrect_answers[0]}
        />
        <label htmlFor={incorrect_answers[0]}>
          {he.decode(incorrect_answers[0])}
        </label>

        <input
          type="radio"
          id={incorrect_answers[1]}
          name="answer"
          value={incorrect_answers[1]}
        />
        <label htmlFor={incorrect_answers[1]}>
          {he.decode(incorrect_answers[1])}
        </label>

        <input
          type="radio"
          id={incorrect_answers[2]}
          name="answer"
          value={incorrect_answers[2]}
        />
        <label htmlFor={incorrect_answers[2]}>
          {he.decode(incorrect_answers[2])}
        </label>

        <input
          type="radio"
          id={incorrect_answers[3]}
          name="answer"
          value={incorrect_answers[3]}
        />
        <label htmlFor={incorrect_answers[3]}>
          {he.decode(incorrect_answers[3])}
        </label>
      </form>
      <hr />
    </div>
  );
}
