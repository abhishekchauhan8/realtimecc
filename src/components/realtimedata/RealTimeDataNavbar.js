import React from "react";
import { Link } from "gatsby";

export default function RealTimeDataNavbar() {
  return (
    <ul>
      <li>
        <a class="nav-link scrollto active" href="#realtimedataDashboard">
          Home
        </a>
      </li>

      {/* <li>
          <a class="nav-link scrollto active" href="#home">
            Home
          </a>
        </li> */}

      {/* <li>
          <a class="nav-link scrollto" href="#about">
            Overview
          </a>
        </li> */}

      <li class="dropdown">
        <a href="#">
          <span>Overview</span> <i class="bi bi-chevron-down"></i>
        </a>
        <ul>
          <li>
            <a href="#aboutrealtimedata">What We Do</a>
          </li>
          <li class="dropdown">
            <a href="#pilandscape">
              <span>Our Presence</span>{" "}
            </a>
          </li>
          <li>
            <a href="#skills">Real Time Data Services Framework</a>
          </li>
          <li>
            <a href="#journey">Real Time Data Services Journey</a>
          </li>
        </ul>
      </li>

      <li>
        <a class="nav-link scrollto" href="#realtimedataservices">
          Services
        </a>
      </li>

      {/* <li>
          <a class="nav-link scrollto" href="#portfolio">
            Portfolio
          </a>
        </li> */}

      {/* <li class="dropdown">
          <a href="#">
            <span>Line of Business</span> <i class="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li class="dropdown">
              <Link to="/catalyst">Catalyst</Link>
            </li>
            <li>
              <Link to="/downstream">Downstream</Link>
            </li>
            <li>
              <Link to="/energyrenewables">Energy & Renewables</Link>
            </li>
            <li>
              <Link to="/hydrogen">Hydrogen</Link>
            </li>
            <li>
              <Link to="/powergeneration">Power Generation</Link>
            </li>
            <li class="dropdown">
              <Link to="/upstreamandig">Upstream and IG</Link>
            </li>
            <li>
              <Link to="/realstate">Real State</Link>
            </li>
            <li>
              <Link to="/retail">Retail</Link>
            </li>
            <li>
              <Link to="/tradingsupply">Trading & Supply</Link>
            </li>
            <li>
              <Link to="/wind">Wind</Link>
            </li>
          </ul>
        </li>

        <li class="dropdown">
          <Link href="#">
            <span>Use Cases</span> <i class="bi bi-chevron-down"></i>
          </Link>
          <ul>
            <li>
              <Link to="/cemis">CO2 Emission Management</Link>
            </li>

            <li class="dropdown">
              <Link to="/productionoptimization">Production Optimization</Link>
            </li>
            <li class="dropdown">
              <Link to="/advancesurveillance">Advance Surveillance</Link>
            </li>
            <li>
              <Link to="/assetperformance">Asset Performance</Link>
            </li>
            <li>
              <Link to="/conditionbasedmaintenance">
                Condition Based Maintenance
              </Link>
            </li>
            <li>
              <Link to="/energymanagement">Energy Management</Link>
            </li>
            <li>
              <Link to="/hydrogensefuelstation">Hydrogen Refuel Station</Link>
            </li>
            <li>
              <Link to="/offshorewindpark">Offshore Windpark</Link>
            </li>
            <li>
              <Link to="/remotemonitoring">Remote Monitoring</Link>
            </li>
            <li>
              <Link to="/teba">TEBA - Top Energy Bad Actors</Link>
            </li>
            <li>
              <Link to="/tega">TEGA - Top Energy Goood Actors</Link>
            </li>
            <li>
              <Link to="/windtopia">Windtopia</Link>
            </li>
          </ul>
        </li> */}

      <li class="dropdown">
        <Link href="#">
          <span>Products</span> <i class="bi bi-chevron-down"></i>
        </Link>
        <ul>
          <li class="dropdown">
            <Link href="#">
              <span>Data Historians</span> <i class="bi bi-chevron-down"></i>
            </Link>
            <ul>
              <li>
                <Link to="/realtimedata/products/data_historians/aveva_pi">
                  Aveva PI
                </Link>
              </li>
              <li>
                <Link to="/realtimedata/products/data_historians/honeywell">
                  Honeywell
                </Link>
              </li>
              <li>
                <Link to="/realtimedata/products/data_historians/thermo_scientific">
                  Thermo Scientific
                </Link>
              </li>
              <li>
                <Link to="/realtimedata/products/data_historians/tieto_evry">
                  tieto EVRY
                </Link>
              </li>
              <li>
                <Link to="/realtimedata/products/data_historians/yokoawa">
                  Yokoawa
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="https://ssip-docs.shell.com">SSIP</Link>
          </li>
          <li>
            <Link to="/advancesurveillance">IRMS</Link>
          </li>
          <li>
            <Link to="/assetperformance">Seeq</Link>
          </li>
        </ul>
      </li>

      {/* <li>
          <a class="nav-link scrollto" href="piservices#pricing">
            Pricing
          </a>
        </li> */}

      <li>
        <Link class="nav-link scrollto" to="#team">
          Team
        </Link>
      </li>

      {/* <li>
          <a class="getstarted scrollto" href="#about">
            Get Started
          </a>
        </li> */}
    </ul>
  );
}
