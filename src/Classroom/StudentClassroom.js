import SideBar from "../Student/SideBar";
import "../Student/SubjectList.css";
import { useEffect, useState } from "react";
import SubjectClassroomDataList from './StudentClassroomDataList';

const StudentClassroom = (props) => {
  const [subjectList, setSubjectList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjectList = async () => {
      const response = await fetch(
        "http://localhost:8000/api/studentsubject/",
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token"),
          },
        }
      );

      if (!response.ok) {
        throw new Error("Somethig Went Wrong!");
      }
      const data = await response.json();
      console.log(data);

      const loadedSubjectData = [];
      for (const key in data) {
        loadedSubjectData.push({
          id: key,
          subject_code:data[key].subject_code,
          subject_credits: data[key].subject_credits,
          subject_name: data[key].subject_name,
          subject_photo:data[key].subject_photo
        });
      }
      setSubjectList(loadedSubjectData);
    };
    fetchSubjectList().catch((error) => {
      setError(error.message);
    });
  }, []);

  const Slist = subjectList.map((sList) => (
    <SubjectClassroomDataList
      id={sList.id}
      key={sList.id}
      subject_code={sList.subject_code}
      subject_credits={sList.subject_credits}
      subject_name={sList.subject_name}
      subject_photo={sList.subject_photo}
    />
  ));

  return (
    <div className="subject_list">
      {error && <p>{error.message}</p>}
      <div className="sidebar">
        <SideBar />
      </div>
      <div>
        {Slist}
      </div>
    </div>
  );
};

export default StudentClassroom;
