import React from "react";
import RealTimeServiceCard from "./RealTimeServiceCard";

function RealTimeServices() {
  return (
    <section id="RTservicesCards" class="RTservicesCards">
      <div class="realtimeservicecard-container">
        <RealTimeServiceCard
          sr="01"
          title="Real Time Data Services"
          subtitle="Anything, we are here"
          route="/realtimedata/services"
        />

        <RealTimeServiceCard
          sr="02"
          title="Real Time Monitoring"
          subtitle="Anything, we are here"
          route="https://app.powerbi.com/groups/me/apps/f520805d-d3d1-45ab-976d-f4f32e57750b/reports/0a876daf-cdbf-4bf1-9969-4dfa0c9121be/ReportSection4cfd8e5f2ee9057ca61d"
        />

        <RealTimeServiceCard
          sr="03"
          title="Training"
          subtitle="Anything, we are here"
          route="trainings"
        />
      </div>
    </section>
  );
}

export default RealTimeServices;
