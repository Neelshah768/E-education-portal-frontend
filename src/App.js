import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import StudentLogin from "./Login_page/Student_login";
import FacultyLogin from "./Login_page/Faculty_login";
import AdminLogin from "./Login_page/Admin_login";
import Student_Portal from "./Student/Student_Portal";
import MyProfile from "./Student/StudentProfile";
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/studentlogin.js" component={StudentLogin}></Route>
        <Route exact path="/facultylogin.js" component={FacultyLogin}></Route>
        <Route exact path="/AdminLogin.js" component={AdminLogin}></Route>
        <Route exact path="/student" component={Student_Portal}></Route>
        <Route exact path="/studentProfile" component={MyProfile}></Route>
      </Switch>
    </div>
  );
};

export default App;
