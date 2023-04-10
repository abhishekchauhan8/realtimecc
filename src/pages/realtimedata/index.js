import * as React from "react";
import Layout from "../../components/Layout";
import AboutRealTimeData from "../../components/realtimedata/AboutRealTimeData";
import PILandscape from "../../components/realtimedata/PILandscape";
import RealTimeDataDashboard from "../../components/realtimedata/RealTimeDataDashboard";
import RealTimeDataServices from "../../components/realtimedata/RealTimeDataServices";
import RealTimeDataServices_Section from "../../components/realtimedata/RealTimeDataServices_Section";
import RealTimeDataTeam from "../../components/realtimedata/RealTimeDataTeam";

export default function RealTimeData() {
  return (
    <div>
      <Layout>
        <RealTimeDataDashboard />
        <AboutRealTimeData />
        <PILandscape />
        <RealTimeDataServices />

        <RealTimeDataServices_Section />

        <RealTimeDataTeam />

        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
      </Layout>
    </div>
  );
}
