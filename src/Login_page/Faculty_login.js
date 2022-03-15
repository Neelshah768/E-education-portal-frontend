import Card from "../UI/Card";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Faculty_login.css";
import ErrorModal from "../UI/ErrorModal";
import FacultyImage from ".././Assets/Teacher Login.jpg";

const Faculty_login = (props) => {
  const [facultyId, setFacultyId] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const FacultyIdHandler = (event) => {
    setFacultyId(event.target.value);
  };
  const FacultyPasswordHandler = (event) => {
    setFacultyPassword(event.target.value);
  };
  async function facultySubmitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    if (facultyId.trim().length === 0 || facultyPassword.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message:
          "Please enter a valid UserName and Password(non-empty values).",
      });
      setToken("");
    }
    let fData = {
      username: facultyId,
      password: facultyPassword,
    };
    try {
      const response = await fetch("http://localhost:8000/api/auth/teacher/", {
        method: "POST",
        body: JSON.stringify(fData),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        setError({
          title: "Invalid Input",
          message:
            "Please enter a valid UserName and Password(non-empty values).",
        });
        setToken("");
      } else {
        const data = await response.json();
        console.log(data);
        setToken(data);
        localStorage.setItem("Faculty-token", data["token"]);
      }
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }

    setFacultyId("");
    setFacultyPassword("");
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
        <p>Faculty Portal</p>
      </div>
      <div>
        <Card className="login">
          <div className="leftLogin">
            <img src={FacultyImage} alt=""></img>
          </div>
          <div className="vl"></div>
          <div className="rightLogin">
          <h2>Login to your Account</h2>
          <form onSubmit={facultySubmitHandler}>
            <label htmlFor="Username">Login Id:- </label>
            <input
              id="Username"
              type="text"
              placeholder="Enter your login Id"
              onChange={FacultyIdHandler}
              value={facultyId}
            ></input>

            <label htmlFor="Password">Password:- </label>
            <input
              id="Password"
              type="Password"
              placeholder="Enter your Password"
              onChange={FacultyPasswordHandler}
              value={facultyPassword}
            ></input>
            <button type="submit">Login </button>
          </form>
          <section>{isLoading && <p>Loading....</p>}</section>
          </div>
        </Card>

        {token && <Redirect to="/faculty"></Redirect>}
      </div>
    </div>
  );
};

export default Faculty_login;
