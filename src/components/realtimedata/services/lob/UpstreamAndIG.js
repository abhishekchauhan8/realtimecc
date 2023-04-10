import { Link } from "react-router-dom";

function UpstreamAndIG() {
  return (
    <div class="services2 topPadding">
      <h3>Upstream and IG</h3>
      <p>
        The Upstream business is one of Shell’s three strategic pillars and
        plays a critical role in delivering the oil and gas needed to
        responsibly meet society’s ever-growing demand for energy, enhancing
        prosperity and living standards across the world.
      </p>
      <p>
        Real Time Solutions and PI Systems provide vital insights across all
        Shell Upstream production assets, enabling users to compare critical
        factors such as Temperature, Pressure, Flow Rate and more. With Real
        Time solutions, users can improve production rates using real-time
        models, improve asset reliability and prevent unplanned shutdowns. These
        solutions can also help ensure wells operate within safe limits using
        advanced real-time monitoring and exception-based analytics.
      </p>
      <p>
        Shell continues it's work to strengthen it's position as a leading
        independent producer, marketer and trader of liquefied natural gas (LNG)
        and gas-to-liquids (GTL) products. Real Time Solutions and PI Systems
        can help to improve reliability, efficiency, and safety in Integrated
        Gas business. Real-time data can help users track the gathering,
        processing, transmission, and storage of hydrocarbons. With these
        solutions, real-time situational awareness can also be used to optimize
        line pack in a natural gas transmission and storage system.
      </p>

      <div class="row">
        <div
          class="col-xl-3 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Link to="/productionoptimization">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="assets/img/use_cases/image1.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              <p>Product Optimization</p>
            </div>
          </Link>
        </div>

        <div
          class="col-xl-3 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Link to="/cemis">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="assets/img/use_cases/image2.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              <p>CO2 Emission Management</p>
            </div>
          </Link>
        </div>

        <div
          class="col-xl-3 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Link to="/advancesurveillance">
            <div class="icon-box">
              <div class="icon">
                <img
                  src="assets/img/use_cases/image3.jpg"
                  class="img-fluid"
                  // height="300px"
                  // width="100%"
                  alt=""
                />
              </div>
              <p>Asset Surveillance</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpstreamAndIG;
