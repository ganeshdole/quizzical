import React from "react";
import Question from "../components/Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  function displayQuestion(questions) {
    return questions.map((question) => {
      return <Question key={nanoid()} question={question} />;
    });
  }

  const questionElements = displayQuestion(props.questions);

  return (
    <div>
      {questionElements}
      <button>Check answers</button>
    </div>
  );
}
