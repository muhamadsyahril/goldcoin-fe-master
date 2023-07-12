import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Countdown
import Countdown from "react-countdown";

const BannerHome = () => {
  return (
    <React.Fragment>
      <div className="section bg-black align-items-center">
        <div className="content-center">
          <div className="container">
            <Row className="justify-content-center mt-3">
              <Col lg={6}>
              <section className="design-section">
                  <div className="timeline">
                    <div className="timeline-component timeline-content">
                      <h3>2015</h3>
                      <div>Start of the Cryptrocick ICO concept</div>
                    </div>
                    <div className="timeline-middle">
                      <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-empty"></div>

                    <div className="timeline-empty"></div>
                    <div className="timeline-middle">
                      <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-component timeline-content">
                      <h3>2016</h3>
                      <div>Cryptronick.com trading platform is launched</div>
                    </div>
                    
                    <div className=" timeline-component timeline-content">
                      <h3>2017</h3>
                      <div>ICO Platform is launched with full solutions</div>
                    </div>
                    <div className="timeline-middle">
                      <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-empty"></div>
                    
                    <div className="timeline-empty"></div>
                    <div className="timeline-middle">
                      <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-component timeline-content">
                      <h3>2018</h3>
                      <div>Start of the ICO token firstpre-sale</div>
                    </div>
                    
                    <div className=" timeline-component timeline-content">
                      <h3>2019</h3>
                      <div>ICO Mobile App full version release</div>
                    </div>
                    <div className="timeline-middle">
                      <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-empty"></div>
                    
                    
                  </div>
                </section>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BannerHome;
