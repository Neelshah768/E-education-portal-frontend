import './FacultyClassroomDataList.css';

const FacultyClassroomDataList = (props) => {
  const truncate = (input) =>
    input?.length > 24 ? `${input.substring(0, 24)}...` : input;
    

    

const MeetingHandler = async(event) =>{
  localStorage.setItem("faculty-subject-code",props.subject_code);
  let subjectCode = { name: localStorage.getItem("faculty-subject-code") };
    const response = await fetch(
        "http://localhost:8000/api/room/",
        {
          method: "POST",
          body: JSON.stringify(subjectCode),
          headers: {
            "Content-type": "application/json",
          },
        }
    )

const data = await response.json();
console.log(data.id);
alert("your meeting id " + data.id + " Copy it");
}   

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

        <div className="sdetails">
            <button onClick={MeetingHandler} className="sdetails_button">Host Meeting</button>
            <a href="http://localhost:8000" className="sdetails_link" target="_blank" rel="noreferrer">Join Classroom</a>
        </div>
      </div>
    </div>
  );
};

export default FacultyClassroomDataList;
