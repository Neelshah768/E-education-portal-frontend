import SideBar from "./SideBar";
import Card from '../UI/Card';
import { useEffect, useState } from "react";
import FacultyProfileList from './FacultyProfileList';
const FacultyProfile = (props) => {
    
  const [facultyData, setFacultyData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacultyData = async () => {
      const response = await fetch(
        "http://localhost:8000/api/teacherprofile/",
        {
        headers:{
        Authorization: 'Token ' + localStorage.getItem("user-token")
        }
        }
      );

      if (!response.ok) {
        throw new Error("Somethig Went Wrong!");
      }
      const data = await response.json();
      console.log(data);

     const loadedStudentData = [];

      
       loadedStudentData.push({
         id: 1,
         fname: data.first_name,
         lname:data.last_name,
         designation:data.designation,
         DOB:data.date_of_birth,
         gender:data.gender,
         mobile:data.t_mobile,
         email: data.email,
         bname:data.branch_name,
         knowladge:data.field_of_knowledge,
         DOJ:data.joining_date,
         salary:data.salary,
         image:data.image
       });
     
      console.log(loadedStudentData);
      setFacultyData(loadedStudentData);
    };
    fetchFacultyData().catch((error) => {
      setError(error.message);
    });
  }, []);
  const dataList = facultyData.map((sData) => (
    <FacultyProfileList
      id={sData.id}
      key={sData.id}
      fname={sData.fname}
      lname={sData.lname}
      designation={sData.designation}
      DOB={sData.DOB}
      gender={sData.gender}
      mobile={sData.mobile}
      email={sData.email}
      bname={sData.bname}
      knowladge={sData.knowladge}
      DOJ={sData.salary}
      salary={sData.salary}
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

export default FacultyProfile;
