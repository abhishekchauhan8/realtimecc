import { Link } from "gatsby";
import AboutPI from "./AboutPI";
import SideBar from "../../../../common_components/Sidebar/Sidebar.jsx";
import "../../../../common_components/Sidebar/Sidebar.css";
import React from "react";
import { Router } from "react-router-dom";

function PIPortal() {
  return (
    <div>
      <div class="main-container">
        <div>
          <SideBar />
        </div>
        <div>
          <AboutPI />
        </div>
      </div>
    </div>
  );
}

export default PIPortal;
