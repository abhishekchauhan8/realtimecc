import React from "react";

export default function RealTimeNavbar() {
  return (
    <ul>
      <li>
        <a class="nav-link scrollto active" href="#home">
          Home
        </a>
      </li>

      <li class="dropdown">
        <a class="nav-link scrollto" href="#about">
          Overview
        </a>
        {/* <a href="#">
      <span>Overview</span> <i class="bi bi-chevron-down"></i>
    </a> */}
        <ul>
          <li>
            <a class="nav-link scrollto" href="#about">
              What is Real-Time CC
            </a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#rtd">
              <span>Our Presence</span>{" "}
            </a>
          </li>
          <li>
            <a href="#skills">Where we Fit In</a>
          </li>
          <li>
            <a href="#skills">What we Do</a>
          </li>
          <li>
            <a href="#skills">Who we work with</a>
          </li>
          <li>
            <a href="#skills">Partners</a>
          </li>
          <li>
            <a href="#skills">Who we work for</a>
          </li>
          <li>
            <a href="#journey">Real Time Data Services Journey</a>
          </li>
        </ul>
      </li>

      <li class="dropdown">
        <a class="nav-link" href="#">
          Concepts
          {/* <span>Concepts</span> <i class="bi bi-chevron-down"></i> */}
        </a>
        <ul>
          <li class="dropdown">
            <a to="/catalyst">What is Real-Time</a>
          </li>
          <li>
            <a to="/downstream">What is Asset Management</a>
          </li>
          <li>
            <a to="/energyrenewables">What is Industrial Automation</a>
          </li>
          <li>
            <a to="/hydrogen">What is IIoT</a>
          </li>
        </ul>
      </li>

      <li class="dropdown">
        <a class="nav-link" href="#">
          Team
          {/* <span>Team</span> <i class="bi bi-chevron-down"></i> */}
        </a>
        <ul>
          <li>
            <a class="nav-link scrollto" href="#about">
              Capability Centers
            </a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#about">
              Topic Teams
            </a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#about">
              Real-Time Natural Team
            </a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#about">
              Contact Us
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
