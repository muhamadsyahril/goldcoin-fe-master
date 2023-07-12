import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
//Import Countdown
import Countdown from "react-countdown";

const Home = () => {
  return (
    <React.Fragment>
      <div className="section bg-black align-items-center">
        <div className="content-center">
          <div className="container">
          {/* <Row className="align-items-center mt-3">
            
          </Row> */}
            <Row className="justify-content-center">
            <Col lg={4}>
              <div className="about-desc text-center">
                <p className="text-success font-weight-light">Our Team</p>
                <h1 className="text-white mb-3 font-weight-light">
                  NurGolds Team composition
                </h1>
              </div>
            </Col>
              <Col lg={10}>
                <div className="service-wrapper text-center">
                  <Row>
                    <div className="col-lg-3 col-md-6 p-4">
                      <div className="service-box service-rounded p-4">
                        <div className="services-desc">
                          <Link className="navbar-brand logo" to="/">
                            <img
                              src="images/teams/hatta.png"
                              alt=""
                              width="170"
                              height="150"
                            />
                          </Link>
                          <div className="service-title mt-2 mb-2 position-relative">
                            <h5 className="font-weight-normal tex-center text-white">
                              Hatta Y
                            </h5>
                          </div>
                          <p className="text-white tex-center">
                            Founder
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-4">
                      <div className="service-box service-rounded p-4">
                        <div className="services-desc">
                          <Link className="navbar-brand logo" to="/">
                            <img
                              src="images/teams/alvian.png"
                              alt=""
                              width="170"
                              height="150"
                            />
                          </Link>
                          <div className="service-title mt-2 mb-2 position-relative">
                            <h5 className="font-weight-normal tex-center text-white">
                              Alvian S
                            </h5>
                          </div>
                          <p className="text-white tex-center">
                            Co-Founder
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-4">
                      <div className="service-box service-rounded p-4">
                        <div className="services-desc">
                          <Link className="navbar-brand logo" to="/">
                            <img
                              src="images/teams/edy.png"
                              alt=""
                              width="170"
                              height="150"
                            />
                          </Link>
                          <div className="service-title mt-2 mb-2 position-relative">
                            <h5 className="font-weight-normal tex-center text-white">
                              Edy PD
                            </h5>
                          </div>
                          <p className="text-white tex-center">
                            Chief Financial Officer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 p-4">
                      <div className="service-box service-rounded p-4">
                        <div className="services-desc">
                          <Link className="navbar-brand logo" to="/">
                            <img
                              src="images/teams/daranova.png"
                              alt=""
                              width="170"
                              height="150"
                            />
                          </Link>
                          <div className="service-title mt-2 mb-2 position-relative">
                            <h5 className="font-weight-normal tex-center text-white">
                              Daranova H
                            </h5>
                          </div>
                          <p className="text-white tex-center">
                            Main Director
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-4">
                      <div className="service-box service-rounded p-4">
                        <div className="services-desc">
                          <Link className="navbar-brand logo" to="/">
                            <img
                              src="images/teams/gusti.png"
                              alt=""
                              width="170"
                              height="150"
                            />
                          </Link>
                          <div className="service-title mt-2 mb-2 position-relative">
                            <h5 className="font-weight-normal tex-center text-white">
                            Gusti A
                            </h5>
                          </div>
                          <p className="text-white tex-center">
                            Vice Director
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-4">
                      <div className="service-box service-rounded p-4">
                        <div className="services-desc">
                          <Link className="navbar-brand logo" to="/">
                            <img
                              src="images/teams/pancha.png"
                              alt=""
                              width="170"
                              height="150"
                            />
                          </Link>
                          <div className="service-title mt-2 mb-2 position-relative">
                            <h5 className="font-weight-normal tex-center text-white">
                              Pancha D
                            </h5>
                          </div>
                          <p className="text-white tex-center">
                            -
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-4">
                      <div className="service-box service-rounded p-4">
                        <div className="services-desc">
                          <Link className="navbar-brand logo" to="/">
                            <img
                              src="images/teams/rian.png"
                              alt=""
                              width="170"
                              height="150"
                            />
                          </Link>
                          <div className="service-title mt-2 mb-2 position-relative">
                            <h5 className="font-weight-normal tex-center text-white">
                              Rian F
                            </h5>
                          </div>
                          <p className="text-white tex-center">
                            -
                          </p>
                        </div>
                      </div>
                    </div>
                    
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
