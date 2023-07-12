import React from "react";
import { Row, Col } from "reactstrap";

const BannerHome = () => {
  return (
      <div className="section bg-black align-items-center" id="roadmap">
        <div className="content-center">
          <div className="container">
            <Row className="justify-content-center mt-3">
              <Col lg={12}>
              <section className="design-section">
                  <div className="timeline">
                    <div className="timeline-component timeline-content">
                      <h3>2023, January</h3>
                      <p>Start of the NurGolds Concept</p>
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
                      <h3>2023, March</h3>
                      <p>First DEP Explorer Launch</p>
                    </div>
                    
                    <div className=" timeline-component timeline-content">
                      <h3>2023, April</h3>
                      <p>First Universal API Launch</p>
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
                      <h3>2023, May</h3>
                      <p>Meetup with Puri Minang Owner and Ayam Mbal Mbul Owner</p>
                    </div>
                    
                    <div className=" timeline-component timeline-content">
                      <h3>2023, June</h3>
                      <p>Start Of ICO</p>
                    </div>
                    <div className="timeline-middle">
                      <div className="timeline-circle-red"></div>
                    </div>
                    <div className="timeline-empty"></div>
                    
                    <div className="timeline-empty"></div>
                    <div className="timeline-middle">
                      <div className="timeline-circle-red"></div>
                    </div>
                    <div className="timeline-component timeline-content">
                      <h3>2023, September</h3>
                      <p>Android releases</p>
                    </div>

                    <div className=" timeline-component timeline-content">
                      <h3>2023, October</h3>
                      <p>Gron Wallet releases</p>
                    </div>
                    <div className="timeline-middle">
                      <div className="timeline-circle-red"></div>
                    </div>
                    <div className="timeline-empty"></div>
                    
                    <div className="timeline-empty"></div>
                    <div className="timeline-middle">
                      <div className="timeline-circle-red"></div>
                    </div>
                    <div className="timeline-component timeline-content">
                      <h3>2023, November</h3>
                      <p>Contract with Gold Company And Blockchain Restaurant</p>
                    </div>
                    
                    <div className=" timeline-component timeline-content">
                      <h3>First Quartal 2024</h3>
                      <p>MuBdI Platform Universal</p>
                    </div>
                    <div className="timeline-middle">
                      <div className="timeline-circle-red"></div>
                    </div>
                    <div className="timeline-empty"></div>
                    
                    
                  </div>
                </section>
              </Col>
            </Row>
          </div>
        </div>
      </div>
  );
};

export default BannerHome;
