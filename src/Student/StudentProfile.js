import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./StudentProfile.css";
import StudentProfileList from "./StudentProfileList";

const MyProfile = (props) => {
  const [studentData, setStudentData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      const response = await fetch(
        "https://react-http-767a0-default-rtdb.firebaseio.com/StudentData.json"
      );

      if (!response.ok) {
        throw new Error("Somethig Went Wrong!");
      }
      const data = await response.json();

      const loadedStudentData = [];

      for (const key in data) {
        loadedStudentData.push({
          id: key,
          name: data[key].UserName,
          email: data[key].email,
          semester: data[key].Semester,
        });
      }
      console.log(loadedStudentData);
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
      name={sData.name}
      email={sData.email}
      semester={sData.semester}
    />
  ));

  return (
    <div className="profile">
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

export default MyProfile;
