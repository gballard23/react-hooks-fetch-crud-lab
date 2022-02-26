import React from "react";

function QuestionItem({ question, onDelete , onChange}) {
  const { id, prompt, answers, correctIndex } = question;
  console.log(question)

  function handleDeleteClick(){
    onDelete(id)
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(event){
    onChange(id, parseInt(event.target.value))

  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
