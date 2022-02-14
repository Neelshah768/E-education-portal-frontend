import { useEffect, useState } from "react";
import StudentAssignmentDataList from "./StudentAssignmentDataList";
const StudentAssignmentList = (props) => {
  const [asignmentList, setAsignmentList] = useState([]);
  const [error, setError] = useState();

  let subjectCode = { subject_code: localStorage.getItem("subject-code") };
  useEffect(async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/studentassignmentlist/",
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
      const loadedAssignmentList = [];
      for (const key in data) {
        loadedAssignmentList.push({
          id: key,
          file_name: data[key].file_name,
          link: data[key].link,
          file_id: data[key].file_id,
          date: data[key].date_created
        });
      }
      setAsignmentList(loadedAssignmentList);
      console.log();
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }
  }, []);

  const listasignment = asignmentList.map((sList) => (
    <StudentAssignmentDataList
      id={sList.id}
      key={sList.id}
      file_name={sList.file_name}
      link={sList.link}
      file_id={sList.file_id}
      date={sList.date}
    />
  ));
  return (
    <div>
      <div>{error && <p>{error.message}</p>}</div>
      <div className="studentClass">
        <p>Date</p>
        <p>File Name</p>
        <p>Files to Open</p>
      </div>
      <div>{listasignment}</div>
    </div>
  );
};

export default StudentAssignmentList;
