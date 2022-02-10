import SideBar from "./SideBar";
import "./Student_Portal.css";
import Fcorousel from '../Corousel/Fcorousel';

const Student_Portal = (props) => {
  return (
    <div className="sportal">
    <div className="ssidbar">
      <SideBar />
    </div>
    <div className="fcorousel">
        <Fcorousel />
  </div>
  </div>
  );
};

export default Student_Portal;
