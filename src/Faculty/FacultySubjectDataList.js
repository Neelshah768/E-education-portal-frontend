
import "./FacultySubjectDataList.css";
import SubjectButtons from './SubjectButtons';

const FacultySubjectDataList = (props) => {
  const truncate = (input) =>
    input?.length > 24 ? `${input.substring(0, 24)}...` : input;
  
    
    return (
    <div className="subjectData">
      <div className="s_list">
        <img src={props.subject_photo} alt="profile"></img>
        <h3>
          <b>Subject Code:-</b> {props.subject_code}
        </h3>
        <h3>
          <b>Subject Name:-</b> {truncate(props.subject_name)}
        </h3>
        <h3>
          <b>Credit:-</b> {props.subject_credits}
        </h3>
        <h3>
          <b>Class:- </b>
          {props.semester} - {props.branch}
        </h3>
        <div className="fdetails">
         <SubjectButtons studentData={props.subject_code} link={props.link}/>
        </div>
      </div>
    </div>
  );
};

export default FacultySubjectDataList;
