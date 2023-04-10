import React from "react";

function CallToAction() {
  return (
    <section id="cta" class="cta">
      <div class="container aos-init aos-animate" data-aos="zoom-in">
        <div class="row">
          <div class="col-lg-9 text-center text-lg-start">
            <h3>Share your problems</h3>
            <p>
              {" "}
              Stop worrying about your assets and business. Connect with us
              without wasting a single more second.
            </p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            {" "}
            <a class="cta-btn align-middle" href="#">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
