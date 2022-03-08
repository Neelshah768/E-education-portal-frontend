import "./SubjectDataList.css";
import { Link } from "react-router-dom";

const SubjectDataList = (props) => {
  const truncate = (input) =>
    input?.length > 24 ? `${input.substring(0, 24)}...` : input;

  const SubjectCodeHandler = () => {
    localStorage.setItem("student-subject-code", props.subject_code);
  };
  return (
    <div className="subjectData">
      <div className="s_list">
        <img src={props.subject_photo} alt="profile"></img>
        <h3>
          <b>Subject Code:-</b> {props.subject_code}
        </h3>
        <h3>
          <b>Subject Name:- </b>
          {truncate(props.subject_name)}
        </h3>
        <h3>
          <b>Credit:-</b> {props.subject_credits}
        </h3>

        <div className="subdetails">
          <a href={props.link} className="subdetails_link" target="_blank" rel="noreferrer">Show More</a>
          <Link
            className="subdetails_link"
            to="studentAssignmentList"
            onClick={SubjectCodeHandler}
          >
            Show Assignment
          </Link>
          <Link className="subdetails_link" to="/studentChat" onClick={SubjectCodeHandler}>Chat</Link>
        </div>
      </div>
    </div>
  );
};

export default SubjectDataList;
