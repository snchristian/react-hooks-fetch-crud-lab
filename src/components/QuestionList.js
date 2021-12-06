import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,handleDeleteQuestion,handleUppdatedQuestion}) {
  const displayQuestions=questions.map(question => <QuestionItem
  key={question.id}
  question={question}
  handleDeleteQuestion={handleDeleteQuestion}
handleUppdatedQuestion={handleUppdatedQuestion}
  
  />)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
