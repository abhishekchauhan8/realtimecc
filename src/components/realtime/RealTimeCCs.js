import { Link } from "gatsby";
import React from "react";

function RealTimeCCs() {
  return (
    <section id="realtimeccs" class="realtimeccs">
      <div class="realtimecontainer aos-init aos-animate" data-aos="fade-up">
        <div class="section-title">
          <h2>OUR PRESENCE</h2>
        </div>
      </div>
      <div class="container aos-init aos-animate" data-aos="zoom-in">
        <div class="row">
          <div class="hey under1 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/manufacturing">
              <img
                id="grow"
                src="assets/images/realtime/extraction2.png"
                class="img1"
                // height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey under2 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/transportation">
              <img
                id="grow"
                src="assets/images/realtime/single_building.png"
                class="img2"
                // height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey under3 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/retail">
              <img
                id="grow"
                src="assets/images/realtime/wind_mill.png"
                class="img3"
                // height="300px"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div class="row">
          {/* <div class="hey under4 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/images/realtime/supportcenter2.png"
                class="img4"
                height="300px"
                alt=""
              />
            </Link>
          </div> */}

          <div class="hey under5 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/images/realtime/buildings.png"
                class="img5"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey under6 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/images/realtime/factory.png"
                class="img6"
                height="300px"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div class="row">
          {/* <div class="hey under7 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/images/realtime/supportcenter2.png"
                class="img4"
                height="300px"
                alt=""
              />
            </Link>
          </div> */}

          <div class="hey under8 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/images/realtime/3-etransport.png"
                class="img8"
                height="300px"
                alt=""
              />
            </Link>
          </div>

          <div class="hey under9 col-lg-4 journey-btn-container text-center">
            <Link to="/real-time_data/operations">
              <img
                id="grow"
                src="assets/images/realtime/loader-inner3.png"
                class="img9"
                height="300px"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealTimeCCs;
