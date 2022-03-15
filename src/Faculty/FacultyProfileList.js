import "./FacultyProfileList.css";
const StudentProfileList = (props) => {
  return (
    <div className="StudentProfile">
      <div clasName="StudentData">
      <img src={props.image} alt="studentprofilepic"></img>

      <h3>
        <b>Name:- </b>
        {props.fname} {props.lname}
      </h3>
      <h3>
        <b>Designation:- </b>
        {props.designation}
      </h3>
      <h3>
        <b>Date of Birth:- </b>
        {props.DOB}
      </h3>
      <h3>
        <b>Gender:- </b> {props.gender}
      </h3>
      <h3>
        <b>Mobile Number:- </b> {props.mobile}
      </h3>
      <h3>
        <b>Email:- </b> {props.email}
      </h3>
      <h3>
        <b>Branch Name:- </b> {props.bname}
      </h3>
      <h3>
        <b>knowladge:- </b> {props.knowledge}
      </h3>
      <h3>
        <b>Date of Joining:- </b> {props.DOJ}
      </h3>
      <h3>
        <b>Salary:-</b> {props.salary}
      </h3>
    </div>
    </div>
  );
};

export default StudentProfileList;
