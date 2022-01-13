import "./Home.css";
import {Link } from "react-router-dom";

const Home = (props) => {

  
  return (
    <div className="background">
      <div className="heading">
        <h1>
          Online
          <br /> Education System
        </h1>
      </div>
      <div className="role">
        <p>Select Your Role</p>
      </div>
      <div className="action">
        <Link to = "/studentlogin.js" className="action_link">Student</Link>
        <Link to = '/facultylogin.js' className="action_link">Faculty</Link>
        <Link to = '/AdminLogin.js' className="action_link">Admin</Link>
      </div>
      
    </div>
  );
};

export default Home;