import { useEffect,useState } from "react";

const StudentClass = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [error, setError] = useState();

  let subjectCode = 
  {subject_code:localStorage.getItem("subject-code")};
  useEffect(async()=>{
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
  },[]);
  return ( 
    <div></div>
   );
}
 
export default StudentClass;