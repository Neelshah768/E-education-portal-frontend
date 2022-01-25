import SideBar from "./SideBar";
import "./Student_Portal.css";
import quote from "../Assets/quote2.jpeg";

const Student_Portal = (props) => {
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

export default Student_Portal;
