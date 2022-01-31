import './StudentProfileList.css';
const StudentProfileList = (props) => {
    return ( 
        <div className='StudentProfile'>
            <img src={props.image} alt="studentprofilepic"></img>
            
                <h3><b>Name:-</b> {props.fname}  {props.lname}</h3>
                <h3><b>Designation:- </b>{props.designation}</h3>
                <h3><b>Date of Birth:-</b>{props.DOB}</h3>
                <h3><b>Gender:-</b> {props.gender}</h3>
                <h3><b>Student Mobile Number:-</b> {props.smobile}</h3>
                <h3><b>Parent's Mobile Number:-</b> {props.pmobile}</h3>
                <h3><b>Email:-</b> {props.email}</h3>
                <h3><b>Course:-</b> {props.course}</h3>
                <h3><b>Branch Name:-</b> {props.bname}</h3>
                <h3><b>Current Semester:-</b> {props.semester}</h3>
                
            
        </div>
     );
}
 
export default StudentProfileList;