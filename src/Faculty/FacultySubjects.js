import React from "react";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import FacultySubjectDataList from './FacultySubjectDataList';
import './FacultySubjects.css';

const FacultySubjects = (props) => {
  const [subjectList, setSubjectList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjectList = async () => {
      const response = await fetch(
        "http://localhost:8000/api/teachersubject/",
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("Faculty-token"),
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
          subject_photo:data[key].subject_photo,
          branch:data[key].branch,
          semester:data[key].semester
        });
      }
      setSubjectList(loadedSubjectData);
      
      
    };
    fetchSubjectList().catch((error) => {
      setError(error.message);
    });
  }, []);
  
  const Flist = subjectList.map((sList) => (
    <FacultySubjectDataList
      id={sList.id}
      key={sList.id}
      subject_code={sList.subject_code}
      subject_credits={sList.subject_credits}
      subject_name={sList.subject_name}
      subject_photo={sList.subject_photo}
      branch={sList.branch}
      semester={sList.semester}
    />
  ));

  return (
    <div className="subject_list">
      {error && <p>{error.message}</p>}
      <div className="sidebar">
        <SideBar />
      </div>
      <div>
        {Flist}
      </div>
    </div>
  );
};

export default FacultySubjects;
