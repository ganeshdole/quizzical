import React, { useState } from "react";
import Question from "../components/Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  const selectedAnswer = new Array(5).fill(null);

  function displayQuestion(questions) {
    return questions.map((question, index) => {
      return (
        <Question
          key={nanoid()}
          question={question}
          answer={props.answer}
          selectedAnswer={selectedAnswer}
          index={index}
        />
      );
    });
  }

  function toggleAnswerVisible() {
    setAnswerVisible((preValue) => !preValue);
  }

  const questionElements = displayQuestion(props.questions);
  return (
    <div>
      {questionElements}
      <button id="checkAnswer">Check answers</button>
    </div>
  );
}
