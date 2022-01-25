import "./FacultyProfileList.css";
const StudentProfileList = (props) => {
  return (
    <div className="StudentProfile">
      <img src={props.image} alt="studentprofilepic"></img>

      <h3>
        Name:- {props.fname} {props.lname}
      </h3>
      <h3>Designation:- {props.designation}</h3>
      <h3>Date of Birth:-{props.DOB}</h3>
      <h3>Gender:- {props.gender}</h3>
      <h3>Mobile Number:- {props.mobile}</h3>
      <h3>Email:- {props.email}</h3>
      <h3>Branch Name:- {props.bname}</h3>
      <h3>knowladge:- {props.knowledge}</h3>
      <h3>Date of Joining:- {props.DOJ}</h3>
      <h3>Salary:- {props.salary}</h3>
      
    </div>
  );
};

export default StudentProfileList;
