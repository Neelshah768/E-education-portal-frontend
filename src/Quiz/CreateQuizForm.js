import "./CreateQuizForm.css";
import { useState } from "react";
const CreateQuizForm = (props) => {
  const [enteredQuestion, setEnteredQuestion] = useState("");
  const [enterOptionA, setEnterOptionA] = useState("");
  const [enterOptionB, setEnterOptionB] = useState("");
  const [enterOptionC, setEnterOptionC] = useState("");
  const [enterOptionD, setEnterOptionD] = useState("");
  const [correct,setCorrect] = useState("");


  const questionHandler = (event) => {
    setEnteredQuestion(event.target.value);
  };
  const optionAhandler = (event) => {
    setEnterOptionA(event.target.value);
  };
  const optionBhandler = (event) => {
    setEnterOptionB(event.target.value);
  };
  const optionChandler = (event) => {
    setEnterOptionC(event.target.value);
  };
  const optionDhandler = (event) => {
    setEnterOptionD(event.target.value);
  };
  const correctAnswer = (event) => {
    setCorrect(event.target.value);
  }
  const SubmitHandler = async(event) => {
    event.preventDefault();

    const quizQuestions = {
        question:enteredQuestion,
        optionA:enterOptionA,
        optionB:enterOptionB,
        optionC:enterOptionC,
        optionD:enterOptionD,
        correctAns:correct
    }
    
    props.onSaveQuizData(quizQuestions);

    const response = await fetch('http://localhost:8000/api/teacherexam/',{
      method:'POST',
      body:JSON.stringify(quizQuestions),
      headers:{
        Authorization: 'Token ' + localStorage.getItem("Faculty-token"),
        'Content-type':'application/json'
      }
    });
    const data = await response.json();
        console.log(data);
  }
  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <div className="new-question__question">
          <label>Question:-</label>
          <input
            type="text"
            placeholder="Add question here"
            onChange={questionHandler}
            value={enteredQuestion}
            required
          ></input>
        </div>
        <div className="new-question__controls">
          <div className="new-question__control">
            <label>A:-</label>
            <input
              type="text"
              placeholder="Option A"
              onChange={optionAhandler}
              value={enterOptionA}
              required
            ></input>
          </div>
          <div className="new-question__control">
            <label>B:-</label>
            <input
              type="text"
              placeholder="Option B"
              onChange={optionBhandler}
              value={enterOptionB}
              required
            ></input>
          </div>
          <div className="new-question__control">
            <label>C:-</label>
            <input
              type="text"
              placeholder="Option C"
              onChange={optionChandler}
              value={enterOptionC}
              required
            ></input>
          </div>
          <div className="new-question__control">
            <label>D:-</label>
            <input
              type="text"
              placeholder="Option D"
              onChange={optionDhandler}
              value={enterOptionD}
              required
            ></input>
          </div>
          <div className="new-question__control">
            <label>Correct Option:- </label>
            <input
              type="text"
              placeholder="Correct Option"
              onChange={correctAnswer}
              value={correct}
              required
            ></input>
          </div>
        </div>
      </div>
      <div className="new-question__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Save </button>
      </div>
    </form>
  );
};

export default CreateQuizForm;
