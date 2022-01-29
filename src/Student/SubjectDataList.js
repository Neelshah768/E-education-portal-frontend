import "./SubjectDataList.css";

const SubjectDataList = (props) => {
  return (
    <div className="subjectData">
      <div className="s_list">
        <img src={props.subject_photo} alt="profile"></img>
         <h3>Subject Name:- {props.subject_name}</h3>
         <h3>Credit:- {props.subject_credits}</h3>
        <h3>Subject-Teacher:- 
          {props.teacher_first_name} {props.teacher_last_name}
        </h3>
        <button>Show More</button>
      </div>
    </div>
  );
};

export default SubjectDataList;
