import "./StudentProfileList.css";
import { PieChart, Pie, Tooltip } from "recharts";
import { LineChart, Line } from "recharts";

const StudentProfileList = (props) => {
  console.log(props.marks);
  return (
    <div className="StudentProfile">
      <div className="StudentData">
        <img src={props.image} alt="studentprofilepic"></img>

        <h3>
          <b>Name:-</b> {props.fname} {props.lname}
        </h3>
        <h3>
          <b>Designation:- </b>
          {props.designation}
        </h3>
        <h3>
          <b>Date of Birth:-</b>
          {props.DOB}
        </h3>
        <h3>
          <b>Gender:-</b> {props.gender}
        </h3>
        <h3>
          <b>Student Mobile Number:-</b> {props.smobile}
        </h3>
        <h3>
          <b>Parent's Mobile Number:-</b> {props.pmobile}
        </h3>
        <h3>
          <b>Email:-</b> {props.email}
        </h3>
        <h3>
          <b>Course:-</b> {props.course}
        </h3>
        <h3>
          <b>Branch Name:-</b> {props.bname}
        </h3>
        <h3>
          <b>Current Semester:-</b> {props.semester}
        </h3>
      </div>
      <div className="pieChart">
        <h2>Attendance</h2>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={props.attendance}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <h2>Perfomence</h2>
        <LineChart width={300} height={100} data={props.marks}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
};

export default StudentProfileList;
