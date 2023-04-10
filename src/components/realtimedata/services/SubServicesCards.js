import React from "react";
import { Link } from "gatsby";

export default function SubServicesCards(props) {
  return (
    <div class="subservicecard-inherited">
      <div class="subservicecard">
        <img src={props.service_image} class="subservicecard-img" alt=""></img>
        <h1 class="subservicecard-title_on_image">{props.service_title}</h1>
        <div class="subservicecard-body">
          <h1 class="subservicecard-title">{props.service_title}</h1>
          <p class="subservicecard-subtitle">{props.service_subtitle}</p>
          <p class="subservicecard-info">{props.service_info}</p>
          <Link to={props.service_route}>
            {/* If want to use Link, need to do this: https://stackoverflow.com/questions/45583358/open-link-at-top-of-page */}{" "}
            <button class="subservicecard-btn">Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
