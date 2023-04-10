import React from "react";

export default function RealTimeServiceCard(props) {
  return (
    <div class="realtimeservicecard-container">
      <div class="realtimeservicecard">
        <div class="realtimeservicecard-box" href="">
          {/* <div
              class="RTcardServicesBackground"
              style={{
                "background-image": "url(assets/img/rtd_assets/1_services.png)",
              }}
            ></div> */}
          <div class="realtimeservicecard-content">
            <h2>{props.sr}</h2>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <a href={props.route}>Know More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
