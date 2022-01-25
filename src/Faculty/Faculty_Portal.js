import SideBar from "./SideBar";
import "./Faculty_Portal.css";
import quote from "../Assets/quote4.jpeg";
const Faculty_Portal = (props) => {
  return (
    <div className="home_page">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="images">
        <img src={quote} alt="quote"></img>
      </div>
    </div>
  );
};

export default Faculty_Portal;
