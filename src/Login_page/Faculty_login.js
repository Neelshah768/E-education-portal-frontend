import Card from "../UI/Card";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Faculty_login.css";
const Faculty_login = (props) => {
  const [facultyId, setFacultyId] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const FacultyIdHandler = (event) => {
    setFacultyId(event.target.value);
  };
  const FacultyPasswordHandler = (event) => {
    setFacultyPassword(event.target.value);
  };
  async function facultySubmitHandler(event) {
    event.preventDefault();
    let fData = {
      username: facultyId,
      password: facultyPassword,
    };
    try {
      const response = await fetch(
        "http://localhost:8000/api/auth/",
        {
          method: "POST",
          body: JSON.stringify(fData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();
      console.log(data);
      setToken(data);
      localStorage.setItem("user-token", data["token"]);
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }

    setFacultyId("");
    setFacultyPassword("");
  }
  return (
    <div>
      <div className="facultyPortal">
        <p>Faculty Portal</p>
      </div>
      <div>
        <Card className="login">
          <h2>Login to your Account</h2>
          <form onSubmit={facultySubmitHandler}>
            <label htmlFor="Username">Login Id:- </label>
            <input
              id="Username"
              type="text"
              placeholder="Enter your login Id"
              onChange={FacultyIdHandler}
              value={facultyId}
              required
            ></input>

            <label htmlFor="Password">Password:- </label>
            <input
              id="Password"
              type="Password"
              placeholder="Enter your Password"
              onChange={FacultyPasswordHandler}
              value={facultyPassword}
              required
            ></input>
            <button type="submit">Login </button>
          </form>
        </Card>
        {error && <p>{error}</p>}
        {token && <Redirect to="/faculty"></Redirect>}
      </div>
    </div>
  );
};

export default Faculty_login;
