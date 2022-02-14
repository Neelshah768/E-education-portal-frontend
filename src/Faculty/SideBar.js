import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FiHome, FiLogOut } from "react-icons/fi";
import {
  BsArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import { ImProfile } from "react-icons/im";
import { MdSubject } from "react-icons/md";
import { GiJoin } from "react-icons/gi";

import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";

const SideBar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const logoutHandler=()=>{
    localStorage.clear();
  }

  return (
    <>
      <div id="sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "Edu" : "Education Portal"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <BsFillArrowRightSquareFill />
              ) : (
                <BsArrowLeftSquareFill />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<ImProfile />}>
                <Link to="/facultyprofile">My profile</Link>
              </MenuItem>

              <MenuItem active={true} icon={<FiHome />}>
                <Link to="/faculty">Home</Link>
              </MenuItem>

              <MenuItem icon={<MdSubject />}>
                <Link to="/facultysubject">My Subjects</Link>
              </MenuItem>
              <MenuItem icon={<GiJoin />}>
                <Link to="/facultyclassroom">Join Class</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                <Link to="/facultylogin.js" onClick={logoutHandler}>Log out</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
