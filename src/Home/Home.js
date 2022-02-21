import { useState } from "react";
import "./Home.css";
import { Link, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
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
        <Link to="/studentlogin.js" className="action_link">
          Student
        </Link>
        <Link to="/facultylogin.js" className="action_link">
          Faculty
        </Link>
        <a href="http://localhost:8000/admin" className="action_link">
          Admin
        </a>
        {redirect}
      </div>
      <p id="transcript">Transcript: {transcript}</p>

      <button onClick={SpeechRecognition.startListening}>Start</button>
    </div>
  );
};

export default Home;
