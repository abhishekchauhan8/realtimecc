import * as React from "react";
import RealTimeDashboard from "../components/realtime/RealTimeDashboard";
import RealTimeServices from "../components/realtime/RealTimeServices";
import RealTimeCCs from "../components/realtime/RealTimeCCs";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import CallToAction from "../components/realtime/CallToAction";

export default function Home() {
  return (
    <div class="App App2">
      <Helmet>
        <title>Shell Real Time CC</title>
      </Helmet>
      <Layout>
        <RealTimeDashboard />
        <CallToAction />
        <RealTimeServices />
        <RealTimeCCs />
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
