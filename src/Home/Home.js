import { useState } from "react";
import "./Home.css";
import { Link, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import home_page from "../Assets/hpage.webp";
import StudentIcon from "../Assets/StudentIcon.png";
import TeacherIcon from "../Assets/tIcon.png";
import AdminIcon from "../Assets/AdminIcon.webp";

const Home = (props) => {
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ["student", "faculty", "admin"];
  const urls = {
    student: "/studentlogin.js",
    faculty: "/facultylogin.js",
    admin: "/http://localhost:8000/admin",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <div className="HomePage">
      <div className="home_left">
        <div className="heading">
          <h1>
            Online
            <br /> Education System
          </h1>
        </div>
        <div className="role">
          <p>Select Your Role</p>
          <div className="role_under"></div>
        </div>
        <div className="action">
          <Link to="/studentlogin.js" className="action_card">
            <img src={StudentIcon} alt="studenticon"></img>
            <p>Student</p>
          </Link>
          <Link to="/facultylogin.js" className="action_card">
            <img src={TeacherIcon} alt="teachericon"></img>
            <p>Teacher</p>
          </Link>
          <a href="http://localhost:8000/admin" className="action_card">
            <img src={AdminIcon} alt="adminicon"></img>
            <p>Admin</p>
          </a>

          {redirect}
        </div>

        <p id="transcript">Transcript: {transcript}</p>

        <button onClick={SpeechRecognition.startListening}>Start</button>
      </div>
      <div className="home_right">
        <img src={home_page} alt="homepage"></img>
      </div>
    </div>
  );
};

export default Home;
