import { Link } from "gatsby";
import Clock from "../realtime/Clock";
import React from "react";
import BackgroundAnimation from "./background";

function RealTimeDataDashboard() {
  return (
    <div>
      <section id="realtimedataDashboard" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Real-Time Data CoE</h1>
              <h2>
                A team of knowledgeable and talented engineers responsible for
                architecting the company's global data infrastructure
              </h2>
              {/* <div class="d-flex justify-content-center justify-content-lg-start"> */}
              <div class="d-flex justify-content-center">
                {" "}
                <a
                  href="#aboutrealtimedata"
                  // href="#realtimedataservices"
                  class="btn-get-started scrollto"
                >
                  <h5>Get Started</h5>
                </a>{" "}
                <a
                  href="https://www.youtube.com/watch?v=wKCFFwuItmE"
                  // href="https://www.youtube.com/watch?v=8pQKh31PGvU"
                  class="glightbox btn-watch-video"
                >
                  <i class="bi bi-play-circle"></i>
                  <span>Take a Tour</span>
                </a>
                <a href="./services" class="btn-to-connect scrollto">
                  <h5>RTD Services</h5>
                </a>
                {/* <a href="./letsconnect" class="btn-to-connect scrollto">
                  <h5>Let's Talk</h5>
                </a> */}
              </div>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <Clock />
              </div>
            </div>

            {/* <div
              class="col-lg-6 order-1 order-lg-2 realtimeDashboard-img aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div>
                <img
                  src="../assets/images/realtimedata/home-img.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section id="bgAnimate" class="bgAnimate">
        <div class="container">
          {/* <video class="videoTag underVideo" autoPlay loop muted>
            <source src={"../assets/videos/bg_video.mp4"} type="video/mp4" />
          </video> */}
          {/* If using this video or BackgroundAnimation, make Clock's background Black */}
          <img
            src="../assets/images/realtimedata/rtd_dashboard_bg.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </section>
      {/* <BackgroundAnimation /> */}
    </div>
  );
}

export default RealTimeDataDashboard;
