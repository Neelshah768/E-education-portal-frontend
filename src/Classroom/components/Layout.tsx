import React from "react";
import CustomNavbar from "./Navbar.tsx";

const Layout: React.FC = ({children}) => {
  return (
    <div>
      <CustomNavbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
