import React from "react";

function AboutRealTimeData() {
  return (
    <section id="aboutrealtimedata" class="aboutrealtimedata section-bg">
      <div class="container-fluid aos-init aos-animate" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div class="content">
              <h3>
                Real-Time Data CC is a part of{" "}
                <strong>Shell's overall strategy & Roadmap</strong>
              </h3>
              <p>
                {" "}
                To lead the transformation, Shell formed the Real-Time Data
                Center of Excellence (CoE), a team of knowledgeable and talented
                engineers who work closely with various vendors to architect the
                company's global data infrastructure
              </p>
            </div>
            <div class="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    class="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span>Data Acquisition and Storage{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-1"
                    class="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      {" "}
                      We gather operational data from thousands of PI System
                      servers across the world into a few Super Collectives
                      located on different continents. With Super Collectives
                      centralizing millions of data streams across entire lines
                      of business, Shell's operational data is available
                      globally.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    class="collapsed"
                  >
                    <span>02</span>Structurization, Visualization and Analysis{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-2"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      {" "}
                      To bring a consistent structure to operational data, we
                      deploy Aveva's Asset Framework (AF) and create an
                      enterprise-wide data model that adds context and structure
                      to the time-series data. AF allows calculations and visual
                      displays of data to be templated and replicated quickly to
                      different assets.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    class="collapsed"
                  >
                    <span>03</span>Real-Time Data Connected Portfolios{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-3"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      {" "}
                      To maximize actionable insights, Smart Solutions blends
                      operational data with business enterprise data such as SAP
                      and laboratory and maintenance data. The combined data is
                      then fed to Advanced Analytics tools for complex
                      calculations and then deployed back into the platform with
                      new Machine Learning algorithms that help thousands of
                      users leverage data for operational intelligence and
                      decision support
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-5 align-items-stretch order-1 order-lg-2 img aos-init aos-animate"
            style={{
              backgroundImage:
                'url("../assets/images/realtimedata/piservices_img1.gif")',
            }}
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutRealTimeData;
