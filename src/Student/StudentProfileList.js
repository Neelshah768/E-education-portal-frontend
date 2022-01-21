import './StudentProfileList.css';
const StudentProfileList = (props) => {
    return ( 
        <div className='StudentProfile'>
            <img src={props.image} alt="studentprofilepic"></img>
            
                <h3>Name:- {props.fname}  {props.lname}</h3>
                <h3>Designation:- {props.designation}</h3>
                <h3>Date of Birth:-{props.DOB}</h3>
                <h3>Gender:- {props.gender}</h3>
                <h3>Student Mobile Number:- {props.smobile}</h3>
                <h3>Parent Mobile Number:- {props.pmobile}</h3>
                <h3>Email:- {props.email}</h3>
                <h3>Course:- {props.course}</h3>
                <h3>Branch Name:- {props.bname}</h3>
                <h3>Semester:- {props.semester}</h3>
                
            
        </div>
     );
}
 
export default StudentProfileList;