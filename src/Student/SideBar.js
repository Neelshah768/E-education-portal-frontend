import { SideBarData } from "./SideBarData";
import "./SideBar.css";
function SideBar(props) {
  return (
    <div>
      
      <ul className="SidebarList">
      
        {SideBarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
