import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./StudentProfile.css";
import StudentProfileList from "./StudentProfileList";

const StudentProfile = (props) => {
  const [studentData, setStudentData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      const response = await fetch(
        "http://localhost:8000/api/studentprofile/",
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("Student-token"),
          },
        }
      );

      if (!response.ok) {
        throw new Error("Somethig Went Wrong!");
      }
      const data = await response.json();

      const loadedStudentData = [];

      loadedStudentData.push({
        id: 1,
        fname: data.first_name,
        lname: data.last_name,
        designation: data.designation,
        DOB: data.date_of_birth,
        gender: data.gender,
        smobile: data.s_mobile,
        pmobile: data.p_mobile,
        email: data.email,
        course: data.course,
        bname: data.branch_name,
        semester: data.Semester,
        image: data.image,
      });

      
      setStudentData(loadedStudentData);
    };
    fetchStudentData().catch((error) => {
      setError(error.message);
    });
  }, []);

  const dataList = studentData.map((sData) => (
    <StudentProfileList
      id={sData.id}
      key={sData.id}
      fname={sData.fname}
      lname={sData.lname}
      designation={sData.designation}
      DOB={sData.DOB}
      gender={sData.gender}
      smobile={sData.smobile}
      pmobile={sData.pmobile}
      email={sData.email}
      course={sData.course}
      bname={sData.bname}
      semester={sData.semester}
      image={sData.image}
    />
  ));

  return (
    <div className="profile">
      {error && <p>{error.message}</p>}
      <div className="sidebar">
        <SideBar />
      </div>
      <div>
        <Card className="sprofile">
          <ul>{dataList}</ul>
        </Card>
      </div>
    </div>
  );
};

export default StudentProfile;
