import React from "react";
import Clock from "./Clock";

// import Helmet from "react-helmet";
import { withPrefix, Link } from "gatsby";

// function assetClicked() {
//   localStorage.setItem("cc", "realtimedata");
//   console.log(localStorage.getItem("cc"));
// }

function RealTimeDashboard() {
  return (
    <section id="realtimeDashboard" class="d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-5 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Better Solutions for Better Operations</h1>
            <h2>
              Real-Time team is digitalizing the data journey in agile way like
              never before
            </h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              <Clock />
            </div>
          </div>

          <div
            class="col-lg-7 order-1 order-lg-2 realtimeDashboard-img aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="under0">
              <img
                // id="grow"
                src="assets/images/common_images/world_map.png"
                class="imgRT0"
                alt=""
              />
            </div>
            <div class="under1">
              <Link to="/">
                <img
                  id="grow"
                  src="assets/images/realtime/avatars/RealTime.png"
                  class="imgRT1"
                  alt=""
                  title="Marcel"
                />
              </Link>
            </div>
            <div class="under2">
              <Link to="/realtimedata">
                <img
                  id="grow"
                  src="assets/images/realtime/avatars/RealTimeData.png"
                  class="imgRT2"
                  alt=""
                  title="Real Time Data"
                  // onClick={assetClicked}
                />
              </Link>
            </div>

            <div class="under3">
              <Link to="/monitoring">
                <img
                  id="grow"
                  src="assets/images/realtime/avatars/ProactiveMonitoring.gif"
                  class="imgRT3"
                  alt=""
                  title="Proactive Monitoring"
                />
              </Link>
            </div>

            <div class="under4">
              <Link to="https://github.com/pages/auth?nonce=ecd93416-90b0-4e84-b4a8-034137815009&page_id=33217172&path=Lw">
                <img
                  id="grow"
                  src="assets/images/realtime/avatars/DEOD.gif"
                  class="imgRT4"
                  alt=""
                  title="DEOD"
                />
              </Link>
            </div>

            <div class="under5">
              <Link to="/energy_components">
                <img
                  id="grow"
                  src="assets/images/realtime/avatars/EnergyComponents.png"
                  class="imgRT5"
                  alt=""
                  title="Energy Components"
                />
              </Link>
            </div>

            <div class="under6">
              <Link to="/labs_rd_ai">
                <img
                  id="grow"
                  src="assets/images/realtime/avatars/LabsRDAndAI.png"
                  class="imgRT6"
                  alt=""
                  title="Labs, R&D and AI"
                />
              </Link>
            </div>

            <div class="under7">
              <Link to="/ams">
                <img
                  id="grow"
                  src="assets/images/realtime/avatars/AssetManagementSystems.png"
                  class="imgRT7"
                  alt=""
                  title="Asset Management Systems"
                />
              </Link>
            </div>

            <div class="under8">
              <Link to="/advanced_processes">
                <img
                  id="grow"
                  src="assets/images/realtime/avatars/AssetManagementSystems.png"
                  class="imgRT8"
                  alt=""
                  title="Advanced Processes"
                />
              </Link>
            </div>

            <div
              class="underBubble  aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="assets/images/realtime/avatars/chatbubble1.png"
                class="imgBubble animated"
                alt=""
                // title="Advanced Processes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealTimeDashboard;
