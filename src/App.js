import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import StudentLogin from './Login_page/Student_login';
import FacultyLogin from './Login_page/Faculty_login';
import AdminLogin from './Login_page/Admin_login';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/studentlogin.js" component={StudentLogin}></Route>
        <Route exact path="/facultylogin.js" component={FacultyLogin}></Route>
        <Route exact path="/AdminLogin.js" component={AdminLogin}></Route>
      </Switch>
    </div>
  );
};

export default App;
