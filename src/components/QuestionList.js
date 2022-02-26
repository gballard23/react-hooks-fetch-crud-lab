import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => {
      setQuestions(data)
    })
  }, [])

 function handleDelete(id){
   fetch(`http://localhost:4000/questions/${id}`, {
     method: "DELETE",
   })
   .then((r) => r.json())
   .then(() => {
      setQuestions(
    questions.filter((quest) => quest.id !== id)
      )})
 }

 function handleAnswerChange(id, correctIndex){
   fetch(`http://localhost:4000/questions/${id}`, {
     method: "PATCH",
     headers: {
       "Content-Type" : "application/json",
     },
     body: JSON.stringify({correctIndex})
   })
   .then((r) => r.json())
   .then((data) => {
     setQuestions(
       questions.map((quest) => {
         if( quest.id === data.id) return data;
         return quest

       })
     )
   })
   
 }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map((question) =>(
        <QuestionItem key={question.id} question={question} onDelete={handleDelete} onChange={handleAnswerChange} />
        ))}
      </ul>
    </section>
  );
  
}

export default QuestionList;
