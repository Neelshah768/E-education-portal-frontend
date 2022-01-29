import SideBar from "./SideBar";
import "./SubjectList.css";
import { useEffect, useState } from "react";
import SubjectDataList from "./SubjectDataList";

const SubjectList = (props) => {
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
          subject_credits: data[key].subject_credits,
          subject_name: data[key].subjet_name,
          teacher_first_name: data[key].teacher_first_name,
          teacher_last_name: data[key].teacher_last_name,
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
    <SubjectDataList
      id={sList.id}
      key={sList.id}
      subject_credits={sList.subject_credits}
      subject_name={sList.subject_name}
      teacher_first_name={sList.teacher_first_name}
      teacher_last_name={sList.teacher_last_name}
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

export default SubjectList;
