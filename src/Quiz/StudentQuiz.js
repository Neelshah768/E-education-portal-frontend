import { useState } from "react";
import "./StudentQuiz.css";
const StudentQuiz = (props) => {
  console.log(props.studentQuestion);

  const [answer, setAnswer] = useState("");
  
  const OptionHandler = (event) => {
    setAnswer(event.target.value);
    console.log(event.target.value);
  };
  const ansSubmitHandler = async (event) => {
    event.preventDefault();

    const studentAns = {
      question_id: props.studentQuestion.question_id,
      answer: answer,
    };
    props.onRefresh(studentAns);

    const response = await fetch(
      "http://localhost:8000/api/studenttestcheck/",
      {
        method: "POST",
        body: JSON.stringify(studentAns),
        headers: {
          Authorization: "Token " + localStorage.getItem("Student-token"),
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    

  
  };
  return (
    <div className="student-question">
      <div className="SQuestions">{props.studentQuestion.question}</div>
      <div onChange={OptionHandler} className="SOptions">
        <ul>
          <li>
            {" "}
            <input type="radio" value="A" name="options" />
            {props.studentQuestion.optionA}
          </li>
          <li>
            {" "}
            <input type="radio" value="B" name="options" />
            {props.studentQuestion.optionB}
          </li>
          <li>
            <input type="radio" value="C" name="options" />
            {props.studentQuestion.optionC}
          </li>
          <li>
            <input type="radio" value="D" name="options" />
            {props.studentQuestion.optionD}
          </li>
        </ul>
      </div>
      <button type="submit" className="GiveAnswer" onClick={ansSubmitHandler}>
        Submit
      </button>
      <h2>Your Score:- {props.studentQuestion.result}</h2>
    </div>
  );
};

export default StudentQuiz;
