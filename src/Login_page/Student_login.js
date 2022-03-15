import { useState } from "react";
import { Redirect } from "react-router-dom";
import StudentLogin from "../Assets/Student Login.jpg";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./Student_login.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Student_login = (props) => {
  const [studentId, setStudentId] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [error, setError] = useState();
  const [isLoading,setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  //voice macros
  const commands = [
    {
      command: ["Open * page", "Go to * page", "Back to * page", "back *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  const pages = ["home"];
  const urls = {
    home: "/",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }
 
  //take a userName
  const StudentIdHandler = (event) => {
    setStudentId(event.target.value);
  };

  //take a password
  const StudentPasswordHandler = (event) => {
    setStudentPassword(event.target.value);
  };

  //Form SubmitHandler
  async function studentSubmitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    if (studentId.trim().length === 0 || studentPassword.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message:
          "Please enter a valid UserName and Password(non-empty values).",
      });
      setToken("");
    }
    let sData = {
      username: studentId,
      password: studentPassword,
    };
    try {
      const response = await fetch("http://localhost:8000/api/auth/student/", {
        method: "POST",
        body: JSON.stringify(sData),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        setError({
          title: "Invalid Input",
          message:
            "Please enter a valid UserName and Password.",
        });
        setToken("");
      } else {
        const data = await response.json();
        console.log(data);
        setToken(data);
        localStorage.setItem("Student-token", data["token"]);
      }
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }

    setStudentId("");
    setStudentPassword("");
    setIsLoading(false);
  }
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div className="SBackground">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="studentPortal">
        <p>Student Portal</p>
      </div>
      <div>
        <Card className="login">
          <div className="leftLogin">
            <img src={StudentLogin} alt=""></img>
          </div>
          <div className="vl"></div>
          <div className="rightLogin">
            <h2>Login to your Account</h2>
            <form onSubmit={studentSubmitHandler}>
              <label htmlFor="Username">Login Id:- </label>
              <input
                id="Username"
                type="text"
                placeholder="Enter your login Id"
                onChange={StudentIdHandler}
                value={studentId}
              ></input>

              <label htmlFor="Password">Password:- </label>
              <input
                id="Password"
                type="Password"
                placeholder="Enter your Password"
                onChange={StudentPasswordHandler}
                value={studentPassword}
              ></input>
              <button type="submit">Login </button>
            </form>
            <section>{isLoading && <p>Loading....</p>}</section>
          </div>
        </Card>

        {token && <Redirect to="/student"></Redirect>}
        {redirect}
        <p id="transcript">Transcript: {transcript}</p>

        <button onClick={SpeechRecognition.startListening}>Start</button>
      </div>
      
    </div>
  );
};

export default Student_login;
