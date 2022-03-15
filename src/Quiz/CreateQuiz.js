import { useState, useEffect } from "react";
import CreateQuizForm from "./CreateQuizForm";
import "./CreateQuiz.css";

const CreateQuiz = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [question, setQuestion] = useState([]);
  useEffect(async () => {
    const response = await fetch("http://localhost:8000/api/teacherexam/", {
      headers: {
        Authorization: "Token " + localStorage.getItem("Faculty-token"),
        "content-type": "application-header",
      },
    });
    const data = await response.json();
    console.log(data);
    setQuestion(data);
  }, []);

  const onSaveQuestionDataHandler = (data) => {
    setIsEditing(false);
    console.log(data);
    
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const QuestionList = question.map((QList) => (
    <ul key={Math.random()} className="Studentul">
      <li className="Studentli">Question:- {QList.question}:-</li>
      <li className="Studentli">Opetion A :- {QList.optionA}</li>
      <li className="Studentli">Opetion B :- {QList.optionB}</li>
      <li className="Studentli">Opetion C :- {QList.optionC}</li>
      <li className="Studentli">Opetion D :- {QList.optionD}</li>
    </ul>
  ));

  return (
    <div>
      <div className="new-question">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Question</button>
        )}
        {isEditing && (
          <CreateQuizForm
            onSaveQuizData={onSaveQuestionDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
      <div className="faculty-add-question">
          {QuestionList}
      </div>
    </div>
  );
};

export default CreateQuiz;
