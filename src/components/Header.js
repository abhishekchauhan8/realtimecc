import React, { useState } from "react";
import Navbar from "./Navbar";
import Helmet from "react-helmet";
import { withPrefix, Link } from "gatsby";

function Header() {
  const toggleTheme = () => {
    console.log(localStorage.getItem("lightMode"));

    if (localStorage.getItem("lightMode") === "on") {
      window.localStorage.setItem("lightMode", "off");
      document.body.classList.remove("light");
      document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".js-theme input").checked = true;
      });
    } else {
      window.localStorage.setItem("lightMode", "on");
      document.body.classList.add("light");
      document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".js-theme input").checked = true;
      });
    }
  };

  return (
    <header id="header" class="fixed-top">
      <Helmet>
        <script src={withPrefix("assets/js/aos.js")} type="text/javascript" />
        <script
          src={withPrefix("assets/js/bootstrap.bundle.min.js")}
          type="text/javascript"
        />
        <script
          src={withPrefix("assets/js/glightbox.min.js")}
          type="text/javascript"
        />
        <script
          src={withPrefix("assets/js/isotope.pkgd.min.js")}
          type="text/javascript"
        />
        <script src={withPrefix("assets/js/main.js")} type="text/javascript" />
        <script
          src={withPrefix("assets/js/noframework.waypoints.js")}
          type="text/javascript"
        />
        <script
          src={withPrefix("assets/js/swiper-bundle.min.js")}
          type="text/javascript"
        />
      </Helmet>

      <div class="container d-flex align-items-center">
        <a href="https://eu001-sp.shell.com/sites/AAFAA1669/Pages/PI-Teams-Overview.aspx">
          <img
            src="../../../../../assets/images/common_images/shell_logo.png"
            height="40"
            alt=""
          />
        </a>
        <h1 class="logo me-auto">
          <a href="/">Real-Time & Asset Management</a>
        </h1>

        <Navbar />

        <img
          onClick={toggleTheme}
          src="../../../../assets/images/realtimedata/team/AbhishekChauhan.jpg"
          style={{ height: 40, width: 40, borderRadius: 50 }}
        />
      </div>
    </header>
  );
}

export default Header;
