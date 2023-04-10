import { Link } from "gatsby";
import React from "react";
import SubServicesCards from "../../components/realtimedata/services/SubServicesCards";

export default function RealTimeDataServices_Section() {
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
        <div class="servicecards_with_description_section">
          <div class="servicecards_with_description_grid">
            <SubServicesCards
              service_image="../../../assets/images/realtimedata/services/11services.png"
              service_title="Consultancy"
              service_subtitle="Consult & Grow"
              service_info="To thrive amidst change, you need a transformative business strategy centered on your goal"
              service_route="/realtimedata/services/consultancy"
            />

            <SubServicesCards
              service_image="../../../assets/images/realtimedata/services/12services.png"
              service_title="Solutioning"
              service_subtitle="Get Dreams Delivered"
              service_info="Intelligent solutions through modernization, simplification and state-of-the-art products."
              service_route="/realtimedata/services/solutioning"
            />
            <SubServicesCards
              service_image="../../../assets/images/realtimedata/services/13services.png"
              service_title="DIY"
              service_subtitle="Pick & Use"
              service_info="Build your own tags, AF hierarchies, calculations, displays, etc."
              service_route="/realtimedata/services/diy"
            />
            <SubServicesCards
              service_image="../../../assets/images/realtimedata/services/14services.png"
              service_title="Off-the-Shelf"
              service_subtitle="Choose & Chop"
              service_info="Pre-built solutions enabling quick & easy implementations"
              service_route="/realtimedata/services/offtheshelfsolutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
