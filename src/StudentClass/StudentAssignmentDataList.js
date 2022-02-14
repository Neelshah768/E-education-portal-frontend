const StudentAssignmentDataList = (props) => {
  return (
    <div className='studentList'>
                <p>{props.date}</p>
                <p>{props.file_name}</p>
                <p>Click here to <a href = {props.link} target="_blank" rel="noreferrer noopener" download={props.file_name}>Open</a></p>
    </div>
  );
};

export default StudentAssignmentDataList;
