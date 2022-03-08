import "./AsignmentDataList.css";
import { useState } from "react";
const AsignmentDataList = (props) => {
  const [error, setError] = useState();
  console.log(JSON.stringify({ id: props.file_id }));
  const FileDeleteHandler = async (event) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/teacherassignmentdelete/",
        {
          method: "POST",
          body: JSON.stringify({ id: props.file_id }),
          headers: {
            Authorization: "Token " + localStorage.getItem("Faculty-token"),
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }
    window.location.reload(false);
  };
  return (
    <div className="asignmentData">
      <p>{props.file_name}</p>
      <div className="assignmentactions">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer noopener"
          download={props.file_name}
        >
          Download
        </a>
        <button onClick={FileDeleteHandler}>Delete</button>
      </div>
      <button>Show Student Work</button>
    </div>
  );
};

export default AsignmentDataList;
