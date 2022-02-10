import SideBar from "./SideBar";
import "./Faculty_Portal.css";
import Fcorousel from "../Corousel/Fcorousel";

const Faculty_Portal = (props) => {
  return (
    <div className="fportal">
      <div className="fsidebar">
      <SideBar />
      </div>
      <div className="corousel">
        <Fcorousel />
      </div>
    </div>
  );
};

export default Faculty_Portal;
