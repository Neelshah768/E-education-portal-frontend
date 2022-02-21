import { useEffect, useState } from "react";
import AsignmentDatalist from "./AsignmentDataList";
import './AsignmentList.css';
const AsignmentList = (props) => {
  const [asignmentList, setAsignmentList] = useState([]);
  const [error, setError] = useState();

  let subjectCode = { subject_code: localStorage.getItem("faculty-subject-code") };
  useEffect(async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/teacherassignmentlist/",
        {
          method: "POST",
          body: JSON.stringify(subjectCode),
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
      const loadedAssignmentList = [];
      for (const key in data) {
        loadedAssignmentList.push({
          id: key,
          file_name: data[key].file_name,
          link: data[key].link,
          file_id:data[key].file_id
        });
      }
      setAsignmentList(loadedAssignmentList);
      console.log();
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }
  }, []);

  const listasignment = asignmentList.map((sList) => (
    <AsignmentDatalist
      id={sList.id}
      key={sList.id}
      file_name={sList.file_name}
      link={sList.link}
      file_id={sList.file_id}
    />
  ));
  return <div className="listasignment">{listasignment}</div>;
};

export default AsignmentList;
