import React from "react";
import Layout from "../../../../components/Layout";
import RealTimeData_SubServicesCard from "../../../../components/realtimedata/services/RealTimeData_SubServicesCard";
import SubServicesCards from "../../../../components/realtimedata/services/SubServicesCards";

export default function OffTheShelfSolutions() {
  return (
    <Layout>
      <div>
        <div>
          <div class="consultancy_home">
            <div class="consultancy_home-title">
              <h2>Services / OffTheShelfSolutions</h2>
              <h3>---------------------------------</h3>
              <p class="col-lg-6 heading">Your goal, our strategy</p>
              <a
                href="https://www.youtube.com/watch?v=wKCFFwuItmE"
                // href="https://www.youtube.com/watch?v=8pQKh31PGvU"
                class="glightbox btn-lets-talk"
              >
                <i class="bi bi-play-circle"></i>
                <span>Let's Connect</span>
              </a>
            </div>

            <div id="consultancy_home" class="consultancy_home_image">
              <div>
                <img
                  src="../../../assets/images//realtimedata/services/services.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* <SubServicesCards
          service_title="Consultancy"
          service_subtitle="Consult & Grow"
          service_info="To thrive amidst change, you need a transformative business strategy centered on your goal"
        /> */}

        <div class="realtimeservicecard-div">
          <div class="realtimeservicecard-container">
            <RealTimeData_SubServicesCard
              sr="01"
              image="../../../assets/images//realtimedata/services/consultancy/choose.png"
              title="Choose right solution/product"
              // subtitle="Anything, we are here"
              route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
            />

            <RealTimeData_SubServicesCard
              sr="02"
              image="../../../assets/images//realtimedata/services/consultancy/prototype.png"
              title="Build a prototype"
              // subtitle="Anything, we are here"
              route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
            />

            <RealTimeData_SubServicesCard
              sr="03"
              image="../../../assets/images//realtimedata/services/consultancy/full_stack.png"
              title="Full-Stack Consultancy"
              // subtitle="Anything, we are here"
              route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
            />

            <RealTimeData_SubServicesCard
              sr="04"
              image="../../../assets/images//realtimedata/services/consultancy/connect.png"
              title="Connect All Parties"
              // subtitle="Anything, we are here"
              route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
            />

            <RealTimeData_SubServicesCard
              sr="05"
              image="../../../assets/images//realtimedata/services/consultancy/drive_it.png"
              title="Drive IT Processes"
              // subtitle="Anything, we are here"
              route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
            />
            <RealTimeData_SubServicesCard
              sr="06"
              image="../../../assets/images//realtimedata/services/consultancy/stakeholder.png"
              title="Stakeholder Management"
              // subtitle="Anything, we are here"
              route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
            />

            <RealTimeData_SubServicesCard
              sr="07"
              image="../../../assets/images//realtimedata/services/consultancy/training_rt.png"
              title="Training"
              // subtitle="Anything, we are here"
              route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
            />

            {/* <RealTimeData_SubServicesCard
              sr="08"
              image="../../../assets/images//realtimedata/services/consultancy/choose.png"
              title="Stakeholder Management"
              // subtitle="Anything, we are here"
              route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
            /> */}
          </div>
        </div>

        <div class="consultancy">
          <div class="section-title">
            <h1 class="heading1">Consultancy</h1>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <img
                class="sevicesPageImg1"
                src="assets/img/rtd_assets/consultancy1.jpg"
              ></img>
            </div>

            <div class="col-lg-6">
              <h2 class="heading2">
                Shell business landscape calls for new strategies, technological
                innovation, and a holistic approach to the changing expectations
                of end users. To thrive amidst change, you need a transformative
                business strategy centered on your goal.
              </h2>
              <a href="#why-us" class="btn-get-started">
                Your goal, our strategy
              </a>{" "}
            </div>
          </div>
          <div class="justGap">{""}</div>

          <h1>Our Approach</h1>

          <img
            class="sevicesPageImg1"
            src="assets/img/rtd_assets/consultancy2.png"
          ></img>

          <div class="justGap">{""}</div>

          <h3>
            {" "}
            <b>Thoughts that you may have:</b>
          </h3>
          <ul>
            <li>
              <i class="ri-check-double-line"></i>
              Have ideas about improving your business operations but don't know
              how to achieve it?
            </li>
            <li>
              <i class="ri-check-double-line"></i>
              Have a business/operational problem but don't know how to resolve
              it?
            </li>
            <li>
              <i class="ri-check-double-line"></i>
              Don't know which real-time data product fits your need?
            </li>
          </ul>

          <div class="justGap">{""}</div>

          <h3>
            {" "}
            <b>How can RTD Consultancy Services help you?</b>
          </h3>
          <ul>
            <li>
              <i class="ri-check-double-line"></i>
              Implement an asset-wide transformation, from vision and strategy
              to execution and outcomes.
            </li>
            <li>
              <i class="ri-check-double-line"></i>
              Ideate, create, and deploy new business models.
            </li>
            <li>
              <i class="ri-check-double-line"></i>
              Innovate for continuous value creation.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
