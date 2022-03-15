import "./StudentProfileList.css";
import { PieChart, Pie, Tooltip } from "recharts";
import { LineChart, Line } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
