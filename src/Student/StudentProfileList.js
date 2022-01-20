const StudentProfileList = (props) => {
    return ( 
        <div>
            <li>
                <h3>{props.name}</h3>
                <h3>{props.semester}</h3>
                <h3>{props.email}</h3>
            </li>
        </div>
     );
}
 
export default StudentProfileList;