import React from "react";
import { Link } from "react-router-dom";
import {Row, Col } from "reactstrap";

const HowToBuys = () => {
  return (
      <Col lg={10}>
        <div className="service-wrapper text-center mb-5">
          <Row>
            <div className="col-lg-4 col-md-6 p-4">
              <div className="service-box service-rounded p-4">
                <div className="services-desc">
                  <Link className="navbar-brand logo" to="/">
                    <img
                      src="images/bnb.png"
                      alt=""
                      width="80"
                      height="70"
                    />
                  </Link>
                  <div className="service-title mb-2 mt-3 position-relative">
                    <h5 className="font-weight-normal tex-center text-white">
                      Option 1: Buy with DASH
                    </h5>
                  </div>
                  <p className="text-white tex-center">
                    Our motto is better, faster because the market needs
                    a crypto exchange which will not fail investors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4">
              <div className="service-box service-rounded p-4">
                <div className="services-desc">
                  <Link className="navbar-brand logo" to="/">
                    <img
                      src="images/usdt.png"
                      alt=""
                      width="80"
                      height="70"
                    />
                  </Link>
                  <div className="service-title mb-2 mt-3 position-relative">
                    <h5 className="font-weight-normal tex-center text-white">
                      Option 2: Buy with USDT
                    </h5>
                  </div>
                  <p className="text-white tex-center">
                    Exchanging Fiat and Crypto and Vis versa can be made
                    through an easy app revolutionising.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4">
              <div className="service-box service-rounded p-4">
                <div className="services-desc">
                  <Link className="navbar-brand logo" to="/">
                    <img
                      src="images/usd-card.png"
                      alt=""
                      width="80"
                      height="70"
                    />
                  </Link>
                  <div className="service-title mb-2 mt-3 position-relative">
                    <h5 className="font-weight-normal tex-center text-white">
                      Option 3: top up USD with Card
                    </h5>
                  </div>
                  <p className="text-white tex-center">
                    The accounts can be opened using ICO and will allow
                    a pure crypto-trading experience.
                  </p>
                </div>
              </div>
            </div>
          </Row>
          <Row className="align-items-center mt-5" id="partners">
            <Col md="6">
              <div className="about-desc text-left">
                <p className="text-success font-weight-light">Our Partners</p>
                <h3 className="text-white font-weight-light">
                  Partnerships
                </h3>
                <p className="text-white f-15">
                  NurGolds is proud to be partnering with some of the
                  most reputable and established companies in Indonesia
                  and internationally. Through our collaborations, we
                  are striving to create innovative solutions that will
                  benefit our customers and enhance their experiences.
                  Our partnerships with Padang Restaurant Puri Minang,
                  Chicken Mbal-Mbul, and Gron are just some of the
                  examples of how we are working to revolutionize
                  various industries.
                </p>
              </div>
            </Col>

            <Col md="6">
              <div className="about-img light-img position-relative p-4">
                <img
                  src="images/isolation_mode.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <div className="col-lg-4 col-md-6 p-4">
              <div className="service-box service-rounded p-4">
                <div className="services-desc">
                  <Link className="navbar-brand logo" to="/">
                    <img
                      src="images/puri-minang.png"
                      alt=""
                      width="80"
                      height="70"
                    />
                  </Link>
                  <div className="service-title mb-2 mt-3 position-relative">
                    <h5 className="font-weight-normal tex-center text-white">
                      Puri Minang
                    </h5>
                  </div>
                  <p className="text-white tex-center">
                    Our motto is better, faster because the market needs
                    a crypto exchange which will not fail investors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4">
              <div className="service-box service-rounded p-4">
                <div className="services-desc">
                  <Link className="navbar-brand logo" to="/">
                    <img
                      src="images/ayam-bakar-mbal-mbul.png"
                      alt=""
                      width="80"
                      height="70"
                    />
                  </Link>
                  <div className="service-title mb-2 mt-3 position-relative">
                    <h5 className="font-weight-normal tex-center text-white">
                      Ayam Bakar Mbal Mbul
                    </h5>
                  </div>
                  <p className="text-white tex-center">
                    Exchanging Fiat and Crypto and Vis versa can be made
                    through an easy app revolutionising.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4">
              <div className="service-box service-rounded p-4">
                <div className="services-desc">
                  <Link className="navbar-brand logo" to="/">
                    <img
                      src="images/gron-transportation.png"
                      alt=""
                      width="80"
                      height="70"
                    />
                  </Link>
                  <div className="service-title mb-2 mt-3 position-relative">
                    <h5 className="font-weight-normal tex-center text-white">
                      Gron Transportation
                    </h5>
                  </div>
                  <p className="text-white tex-center">
                    The accounts can be opened using ICO and will allow
                    a pure crypto-trading experience.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Col>
  );
};

export default HowToBuys;
