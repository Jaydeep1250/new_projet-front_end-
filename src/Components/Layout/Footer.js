import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-4 ">
            <div className="social-links col-auto col-lg-12 mb-3"></div>
          </div>

          <div className="col-12 col-sm-12 col-lg-8 d-none d-md-block">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 footer-links mb-3">
                <h3 className="footer-title">About</h3>

                <a href="#">TOP RATED THERAPISTS</a>
                <a href="#">SITE MAP</a>

                {/* <a href="#">TERMS AND CONDITIONS</a> */}
                <a href="#">PRIVACY POLICY</a>
              </div>
              <div className="col-12 col-sm-6 col-md-8 footer-links">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 footer-links mb-3">
                    <h3 className="footer-title">HOW IT WORKS</h3>
                    <a href="#">GETTING STARTED </a>
                    <a href="#">WHAT TO EXPECT</a>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 footer-links mb-3">
                    <h3 className="footer-title">HOW WE CAN HELP</h3>
                    <a href="faq">FAQ </a>
                    <a href="dashboardtherapists">FIND A THERAPIST </a>
                    <a href="contactus">CONTACT US</a>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="footer-input mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address here to Subscribe our Newsletter"
                      />
                      <input type="button" value="SUBSCRIBE" className="btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-8  d-block d-md-none mobile-footer-links">
            <div className="row">
              <div className="col-12 mb-3">
                <div className="footer-input mb-3 mb-sm-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email Address here to Subscribe our Newsletter"
                  />
                  <input type="button" value="SUBSCRIBE" className="btn" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 footer-links mb-3">
                <h3 className="footer-title">About</h3>
                <a href="about-us">ABOUT US</a>
                <a href="#">TOP RATED THERAPISTS</a>
                <a href="#">SITE MAP</a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 footer-links mb-3">
                <h3 className="footer-title">HOW IT WORKS</h3>
                <a href="#">GETTING STARTED </a>
                <a href="#">WHAT TO EXPECT</a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 footer-links mb-3">
                <h3 className="footer-title">HOW WE CAN HELP</h3>
                <a href="faq">FAQ </a>
                <a href="/therapists">FIND A THERAPIST </a>
                <a href="contactus">CONTACT US</a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 footer-links mb-3">
                <a href="#">PRIVACY POLICY</a>
              </div>
            </div>
          </div>
          <p className="txt my-2 col-12 text-center d-block d-lg-none color-txt">
            © 2022 THE YOGA OF IMMORTALS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
