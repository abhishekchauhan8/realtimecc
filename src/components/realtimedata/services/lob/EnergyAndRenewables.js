import { Link } from "react-router-dom";

function EnergyAndRenewables() {
  return (
    <div class="services2 topPadding">
      <h3>Energy and Renewables</h3>
      <p>
        Shell is working on providing more renewable and low-carbon energy
        options for customers through investments in wind, solar, electric
        vehicle charging, hydrogen, and more. Shell is committed to producing
        and supplying low carbon fuels (LCF) such as sustainable aviation fuel
        (SAF), biodiesel, bioethanol and renewable compressed natural gas
        (R-CNG), to help lower carbon emissions from transportation. As
        photovoltaic technology advances and production costs decrease, Shell is
        also incorporating solar energy into its portfolio as customer choice
        drives the shift toward decentralized electricity. Shell has now about
        50 gigawatts of renewable generation capacity in operation, under
        construction and in the funnel of potential projects.​
      </p>
      <p>
        ​Real time solutions empower the business to improve asset reliability,
        prevent unplanned shutdowns, troubleshoot problems in minutes, save time
        and money with condition-based maintenance and manage energy usage and
        production. Real-time data allows users to assess critical equipment and
        processes continuously. Any issues can be identified quickly and
        resolved – or even prevented from occurring. Data created in real-time
        can be analyzed to check systems and schedule repairs or upgrades in the
        most effective way thus reducing downtime. Real-time solutions provide
        continuous assessment of pipelines and facilities – used effectively,
        this information can help to reduce both possible downtime and the risk
        of accidents. Real-time solutions allow companies to identify and
        possibly prevent safety or production issues, to schedule maintenance
        and repairs more efficiently and to optimize their operations. Real-time
        data can be compared with previous results to spot and resolve
        inefficiencies.​
      </p>

      <div class="row">
        <div
          class="col-xl-3 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Link to="/hydrogensefuelstation">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="assets/img/use_cases/image4.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              <p>Hydrogen Refuel Station</p>
            </div>
          </Link>
        </div>

        <div
          class="col-xl-3 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Link to="/offshorewindpark">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="assets/img/use_cases/image5.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              <p>Offshore Windpark</p>
            </div>
          </Link>
        </div>

        <div
          class="col-xl-3 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Link to="/windtopia">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="assets/img/use_cases/image6.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              <p>Windtopia</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EnergyAndRenewables;
