import "./SubjectDataList.css";

const SubjectDataList = (props) => {
  return (
    <div className="subjectData">
      <div className="s_list">
        <img src={props.subject_photo} alt="profile"></img>
         <h3><b>Subject Code:-</b> {props.subject_code}</h3>
         <h3><b>Subject Name:-</b> {props.subject_name}</h3>
         <h3><b>Credit:-</b> {props.subject_credits}</h3>
        
        <button>Show More</button>
      </div>
    </div>
  );
};

export default SubjectDataList;
