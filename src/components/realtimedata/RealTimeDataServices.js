import { Link } from "gatsby";
import React from "react";

function RealTimeDataServices() {
  return (
    <section id="realtimedataservices" class="servicesCards">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="section-title">
          <h2>Real-Time Data Services</h2>
          <p>
            A single shop for Realtime products, solutions and consultancy for
            various Business and Operational needs.
          </p>
        </div>
        <div class="card-grid">
          <Link to="/realtimedata/services/consultancy" class="cardsS">
            <div
              class="cardServicesBackground"
              style={{
                "background-image":
                  "url(../../../assets/images/realtimedata/services/11services.png)",
              }}
            ></div>
            <div class="cardsContent">
              <p class="cardsCategory">Service</p>
              <h2 class="cardsHeading">Consultancy</h2>
            </div>
          </Link>

          <Link to="/realtimedata/services/solutioning" class="cardsS">
            <div
              class="cardServicesBackground"
              style={{
                "background-image":
                  "url(../../../assets/images/realtimedata/services/12services.png)",
              }}
            ></div>
            <div class="cardsContent">
              <p class="cardsCategory">Service</p>
              <h2 class="cardsHeading">Solutioning</h2>
            </div>
          </Link>

          <Link to="/realtimedata/services/diy" class="cardsS">
            <div
              class="cardServicesBackground"
              style={{
                "background-image":
                  "url(../../../assets/images/realtimedata/services/13services.png)",
              }}
            ></div>
            <div class="cardsContent">
              <p class="cardsCategory">Service</p>
              <h2 class="cardsHeading">DIY</h2>
            </div>
          </Link>
          <Link to="/realtimedata/services/offtheshelfsolutions" class="cardsS">
            <div
              class="cardServicesBackground"
              style={{
                "background-image":
                  "url(../../../assets/images/realtimedata/services/14services.png)",
              }}
            ></div>
            <div class="cardsContent">
              <p class="cardsCategory">Service</p>
              <h2 class="cardsHeading">Off-The-Shelf Solutions</h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RealTimeDataServices;
