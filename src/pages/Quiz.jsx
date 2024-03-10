import React, { useState } from "react";
import Question from "../components/Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  function displayQuestion(questions) {
    return questions.map((question) => {
      return (
        <Question key={nanoid()} question={question} answer={props.answer} />
      );
    });
  }

  const toggleanswerVisible = () => {};

  const questionElements = displayQuestion(props.questions);
  return (
    <div>
      {questionElements}
      <button id="checkAnswer" onClick={toggleanswerVisible}>
        Check answers
      </button>
    </div>
  );
}
