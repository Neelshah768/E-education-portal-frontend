import React, { useState } from "react";
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
import AsignmentList from "./AsignmentList";

const AddAsignment = (props) => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const FormSubmitHandler = async (event) => {
    event.preventDefault();
    window.location.reload(false);
    console.log(selectedFile.name);
    console.log(selectedFile);

    const response = await fetch(
      "http://localhost:8000/api/teacherassignmentfileupload/",
      {
        method: "POST",
        body: selectedFile,
        headers: {
          Authorization: "Token " + localStorage.getItem("Faculty-token"),
          "Content-Disposition": ' name="file"; filename=' + selectedFile.name,
          "Subject-Code": localStorage.getItem("faculty-subject-code"),
        },
      }
    );
    const data = await response.json();
    
  };
  const studentSubmittedWork = (studentWork) => {
    props.sAssignment(studentWork);
  }


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
          <SidebarContent>
            
            <AsignmentList studentAssignment={studentSubmittedWork}/>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem>
                <form>
                  <input type="file" onChange={fileChangeHandler} />
                  <button type="Submit" onClick={FormSubmitHandler}>
                    Submit
                  </button>
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
