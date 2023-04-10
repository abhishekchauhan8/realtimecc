import { Link } from "react-router-dom";

function CEMIS() {
  return (
    <div class="services3 topPadding">
      <h3>CO2 Emission Management Solution</h3>
      <p>
        CO2 Emission Management Solution can be used to monitor energy use and
        performance to target, with a goal to improve the energy efficiency of a
        unit and the site as a whole. It displays the value associated with
        performance against a target for parameters that are directly related to
        the energy use of the unit and as result has an impact on the site's
        energy index (Solomon EII & EEI and Shell's CEI and CEL are examples of
        such indices.) Energy savings also result in CO2 emission reductions.
        The parameters, also called drivers, displayed in the solution, are
        related to Operational Excellence and Maintenance, and can be influenced
        by operator and maintenance actions. Examples of the latter are
        parameters that can be used to monitor the fouling of heat exchangers on
        a continuous basis and to initiate corrective action when needed.
      </p>

      <div className="justGap"></div>

      <div class="row">
        <div
          class="col-xl-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <a href="https://pivisionam.shell.com/PIVision/PB/#/PBDisplays/287169">
            <div class="icon-box align">
              <div class="icon">
                <img
                  src="assets/img/use_cases/usecase2.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              Coker Energy Management
              {/* <a href="">View on PI Vision</a> */}
            </div>
          </a>
        </div>
        <div
          class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <a href="https://pivisionaus.shell.com/PIVision/#/Displays/74061/CEMIS-Prelude-Overview-Screen">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="assets/img/use_cases/usecase3.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              CEMIS Prelude
              {/* <a href="">View on PI Vision</a> */}
            </div>
          </a>
        </div>
        <div
          class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <a href="https://pivisionaus.shell.com/PIVision/#/Displays/74089/U40000_BOILER_A-40040_New_CBD">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="assets/img/use_cases/usecase4.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              Boiler CBD
              {/* <a href="">View on PI Vision</a> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CEMIS;
