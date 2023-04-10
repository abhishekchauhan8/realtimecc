import { Link } from "react-router-dom";

function Downstream() {
  return (
    <div class="services2 topPadding">
      <h3>Downstream</h3>
      <p>
        Downstream business is key to delivering Shell’s strategy. This sector
        is the final step in the production process with processes like oil
        refining, supply and trading, product marketing and retail being the key
        business sectors. The customer is the key to the future – and Downstream
        is the key to the customer.
      </p>
      <p>
        Real-time solutions and PI Systems play a major role for real-time
        access to operational intelligence that drives bottom line results. They
        help improve asset reliability and utilization, prevent unplanned
        shutdowns, optimize energy management and production and reduce costs.
        They also allow teams to make better and faster decision using the data
        available.
      </p>

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
    </div>
  );
}

export default Downstream;
