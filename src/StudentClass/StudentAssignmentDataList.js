import { useState } from "react";
import "./StudentAssignmentDataList.css";
const StudentAssignmentDataList = (props) => {
  const [selectedFile, setSelectedFile] = useState();

  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const FormSubmitHandler = async (event) => {
    event.preventDefault();
    window.location.reload(false);
    console.log(selectedFile.name);
    console.log(selectedFile);

    const response = await fetch("", {
      method: "POST",
      body: selectedFile,
      headers: {
        Authorization: "Token " + localStorage.getItem("Student-token"),
        "Content-Disposition": ' name="file"; filename=' + selectedFile.name,
        "Subject-Code": localStorage.getItem("student-subject-code"),
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteHandler = () =>{
    window.location.reload(false);
  }
  return (
    <div className="assignmentData">
      <div className="a_list">
        <a href={props.link} target="_blank" rel="noreferrer">
          <h3> File Name:- {props.file_name}</h3>
        </a>
        <h3>Date:- {props.date}</h3>
        <h3>Submitted File:- </h3>
        <button onClick={deleteHandler}>Delete File</button>

        <div className="a_buttons">
          <form>
            <input type="file" onChange={fileChangeHandler} />
            <button type="Submit" onClick={FormSubmitHandler}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentAssignmentDataList;
