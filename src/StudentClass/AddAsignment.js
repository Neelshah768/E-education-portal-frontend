import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  BsArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import "./AddAsignment.css";
import "react-pro-sidebar/dist/css/styles.css";

const AddAsignment = (props) => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const FormSubmitHandler = (event) => {
    console.log("file");
    console.log(selectedFile);
    useEffect(async () => {
      const response = await fetch(
        "http://localhost:8000/api/teachersubjectstudentlist/",
        {
          method: "POST",
          body: JSON.stringify(selectedFile),
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token"),
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
    });
  };
  return (
    <>
      <div id="assignment">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "List" : "List of Task"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <BsFillArrowRightSquareFill />
              ) : (
                <BsArrowLeftSquareFill />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent></SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem>
                <form onSubmit={FormSubmitHandler}>
                  <input type="file" onChange={fileChangeHandler} />
                  <button type="Submit">Submit</button>
                </form>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default AddAsignment;
