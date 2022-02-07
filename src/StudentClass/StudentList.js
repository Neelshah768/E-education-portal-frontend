import './StudentList.css';
const StudentList = (props) => {
    return ( 
        
        
            <div className='studentList'>
                <p>{props.student_id}</p>
                <p>{props.student_first_name} {props.student_last_name}</p>
                <p>{props.student_email}</p>
            </div>
        
        
     );
}
 
export default StudentList;