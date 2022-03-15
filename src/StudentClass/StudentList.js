import './StudentList.css';
const StudentList = (props) => {

    console.log(props.assignmentLink);
    return ( 
        
        
            <div className='studentList'>
                <p>{props.student_id}</p>
                <p>{props.student_first_name} {props.student_last_name}</p>
                <p>{props.student_email}</p>
                <p><a href ={props.assignmentLink}>{props.file_name}</a></p>
            </div>
        
        
     );
}
 
export default StudentList;