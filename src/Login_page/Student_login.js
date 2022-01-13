import { useState } from "react";
import Card from "../UI/Card";
import "./Student_login.css";
const Student_login = (props) => {
  const [studentId, setStudentId] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  const StudentIdHandler = (event) => {
    setStudentId(event.target.value);
  };
  const StudentPasswordHandler = (event) => {
    setStudentPassword(event.target.value);
  };
  async function studentSubmitHandler(event) {

    event.preventDefault();
    let sData = {
      sID: studentId,
      sPassword: studentPassword,
    };
    const response = await fetch('https://react-http-767a0-default-rtdb.firebaseio.com/project.json',{
      method: 'POST',
      body: JSON.stringify(sData),
      headers: {
        'Content-type':'application/json'
        
      }
    });

    const data = await response.json();
    console.log(data);
    
    setStudentId("");
    setStudentPassword("");
  }
  return (
    <div>
      <div className="studentPortal">
        <p>Student Portal</p>
      </div>
      <div>
        <Card className="login">
          <h2>Login to your Account</h2>
          <form onSubmit={studentSubmitHandler}>
            <label htmlFor="Username">Login Id:- </label>
            <input
              id="Username"
              type="text"
              placeholder="Enter your login Id"
              onChange={StudentIdHandler}
              value={studentId}
              required
            ></input>

            <label htmlFor="Password">Password:- </label>
            <input
              id="Password"
              type="Password"
              placeholder="Enter your Password"
              onChange={StudentPasswordHandler}
              value={studentPassword}
              required
            ></input>
            <button type="submit">Login </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Student_login;