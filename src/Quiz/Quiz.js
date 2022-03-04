import React, { useEffect, useState } from "react";
import "./Quiz.css";
import StudentQuiz from "./StudentQuiz";
const Quiz = () => {
  const [questionList, setQuestionList] = useState({});

  useEffect(async () => {
    const response = await fetch(
      "http://localhost:8000/api/studenttestcheck/",
      {
        method: "POST",
        body: JSON.stringify({ StartExam: "" }),
        headers: {
          Authorization: "Token " + localStorage.getItem("Student-token"),
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setQuestionList(data);
  }, []);

  const pageRefreshHandler = () => {
    console.log("reback");
    window.location.reload(false);
  };
  /*const QuestionList = questionList.map((QList) => (
    <StudentQuiz
      key={Math.random().toString()}
      Question={QList.question}
      OptionA={QList.optionsA}
      OptionB={QList.optionsB}
      OptionC={QList.optionsC}
      OptionD={QList.optionsD}
    />
  ));*/

  return (
    <div className="quiz-back">
      <div>
        <StudentQuiz
          studentQuestion={questionList}
          onRefresh={pageRefreshHandler}
        />
      </div>
      <div></div>
    </div>
  );
};
export default Quiz;
