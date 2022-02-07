import { useEffect, useState } from "react";
import StudentList from "./StudentList";
import "./StudentClass.css";
import AddAsignment from "./AddAsignment";

const StudentClass = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [error, setError] = useState();

  let subjectCode = { subject_code: localStorage.getItem("subject-code") };
  useEffect(async () => {
    try {
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
    }
  }, []);
  const listStudent = studentList.map((sList) => (
    <StudentList
      id={sList.id}
      key={sList.id}
      student_id={sList.student_id}
      student_first_name={sList.student_first_name}
      student_last_name={sList.student_last_name}
      student_email={sList.student_email}
    />
  ));

  return (
    <div>
      <div><AddAsignment /></div>
      <div>{error && <p>{error.message}</p>}</div>
      <div className="studentClass">
        <p>Student ID</p>
        <p>Student Name</p>
        <p>Student Email</p>
      </div>
      <div>
        {listStudent}
      </div>
     
    </div>
  );
};

export default StudentClass;
