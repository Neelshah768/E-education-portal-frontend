import { useState } from "react";
import { Link } from "react-router-dom";
import StudentClass from "../StudentClass/StudentClass";

const SubjectButtons = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [error, setError] = useState();
  let subject_code = props.studentData;
  
  
  async function studentListhandler(props) {
   /* try {
      const response = await fetch(
        "http://localhost:8000/api/teachersubjectstudentlist/",
        {
          method: "POST",
          body: JSON.stringify(subjectCode),
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token"),
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);

      const loadedStudentList = [];
      for (const key in data) {
        loadedStudentList.push({
          id: key,
          student_id: data[key].student_id,
          student_first_name: data[key].student_first_name,
          student_last_name: data[key].student_last_name,
          student_email: data[key].student_email,
        });
      }
      setStudentList(loadedStudentList);
      console.log(loadedStudentList);
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }*/
    localStorage.setItem("faculty-subject-code",subject_code);
  }

  const Slist = studentList.map(
    (slist) => (
      
      (
        <StudentClass
          id={slist.id}
          key={slist.id}
          student_email={slist.student_email}
        />
      )
    )
  );
  
  return (
    <div>
      {error && <p>{error.message}</p>}
      <a href={props.link} className="subdetails_link" target="_blank" rel="noreferrer">Show More</a>
      <Link
        to="/studentclass"
        className="fdetails_link"
        onClick={studentListhandler}
        
      >
        Students
      </Link>
      <Link to="/facultychat" className="fdetails_link"  onClick={studentListhandler}>Chat</Link>
      <div>
        {Slist}
      </div>
      
    </div>
  );
};

export default SubjectButtons;
