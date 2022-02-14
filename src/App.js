import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import StudentLogin from "./Login_page/Student_login";
import FacultyLogin from "./Login_page/Faculty_login";
import AdminLogin from "./Login_page/Admin_login";
import Student_Portal from "./Student/Student_Portal";
import StudentProfile from "./Student/StudentProfile";
import SubjectList from './Student/SubjectList';
import StudentClassroom from "./Classroom/StudentClassroom";
import Faculty_Portal from './Faculty/Faculty_Portal';
import FacultyProfile from "./Faculty/FacultyProfile";
import FacultySubjects from './Faculty/FacultySubjects';
import StudentClass from './StudentClass/StudentClass';
import StudentAssignmentList from './StudentClass/StudentAssignmentList';
import Meeting from "./Classroom/pages/RequestMeeting.tsx";
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/studentlogin.js" component={StudentLogin}></Route>
        <Route exact path="/facultylogin.js" component={FacultyLogin}></Route>
        <Route exact path="/AdminLogin.js" component={AdminLogin}></Route>
        <Route exact path="/student" component={Student_Portal}></Route>
        <Route exact path="/studentProfile" component={StudentProfile}></Route>
        <Route exact path="/studentsubject" component={SubjectList}></Route>
        <Route exact path="/studentAssignmentList" component={StudentAssignmentList}></Route>
        <Route exact path="/studentClassroom" component={StudentClassroom}></Route>
        <Route exact path="/faculty" component={Faculty_Portal}></Route>
        <Route exact path="/facultyprofile" component={FacultyProfile}></Route>
        <Route exact path="/facultysubject" component={FacultySubjects}></Route>
        <Route exact path="/studentclass" component={StudentClass}></Route>
        <Route exact path="/joinmeeting" component={Meeting} />
      </Switch>
    </div>
  );
};

export default App;
