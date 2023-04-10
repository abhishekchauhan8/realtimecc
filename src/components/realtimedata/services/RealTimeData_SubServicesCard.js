import React from "react";

export default function RealTimeData_SubServicesCard(props) {
  return (
    <div class="realtimedata_subservicecard-container">
      <div class="realtimedata_subservicecard">
        <div class="realtimedata_subservicecard-box" href="">
          <div class="realtimedata_subservicecard-content">
            {/* <img src="../../../assets/images//realtimedata/services/consultancy/choose.png" /> */}
            <div
              class="realtimedata_subservicecard-background"
              style={{
                "background-image": "url(" + props.image + ")",
              }}
            ></div>
            <h2>{props.sr}</h2>
            {/* <h3>{props.title}</h3> */}
            {/* <p>{props.subtitle}</p> */}
            {/* <a href={props.route}>Know More</a> */}
            <a href={props.route}>{props.title}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
