import React from "react";
import { Link } from "gatsby";
import Layout from "../../../components/Layout";
import RealTimeDataServices from "../../../components/realtimedata/RealTimeDataServices";
import RealTimeDataServices_Section from "../../../../src/components/realtimedata/RealTimeDataServices_Section";

export default function Services() {
  return (
    <Layout>
      <div>
        <div class="services_home">
          <div class="services_home-title">
            <h2>RTD Services | What We Do</h2>
            <h3>-------------------------------------</h3>
            <p class="col-lg-4 heading">
              We help the business to become better
            </p>
            <a
              href="https://www.youtube.com/watch?v=wKCFFwuItmE"
              // href="https://www.youtube.com/watch?v=8pQKh31PGvU"
              class="glightbox btn-lets-talk"
            >
              <i class="bi bi-play-circle"></i>
              <span>Let's Connect</span>
            </a>
          </div>

          <div id="services_home" class="services_home_image">
            <img
              class="services_home_image"
              src="../../../assets/images//realtimedata/services/services.png"
              alt=""
            />
          </div>
        </div>
        <RealTimeDataServices />
        <RealTimeDataServices_Section />
      </div>
    </Layout>
  );
}
