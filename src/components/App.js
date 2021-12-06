import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question, setQuestions]=useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then((res)=>res.json())
    .then((data)=> setQuestions(data))
  },[])

  function handleAddQuestions(newQuestion){
    
    setQuestions([...question, newQuestion])
  }

  function handleDeleteQuestion(deleteQuestion){
    const updatedQuestion=question.filter((question)=>question.id !== deleteQuestion.id)
    setQuestions(updatedQuestion)
  }

  function handleUppdatedQuestion(updatedQ){
    const updatedQuestion = [...question]
    updatedQuestion.map(question =>{ 
      if(question.id === updatedQ.id){
        return question.correctIndex 
      }
      else {
        return question
      }
    })
setQuestions(updatedQuestion)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestions} /> : <QuestionList questions={question} handleDeleteQuestion={handleDeleteQuestion} handleUppdatedQuestion={handleUppdatedQuestion} />}
    </main>
  );
}

export default App;

