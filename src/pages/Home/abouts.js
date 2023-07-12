import React from "react";
import {Row, Col } from "reactstrap";

const Abouts = () => {
  return (
      <Col lg={6}>
        <div className="about-wrapper text-center" id="aboutus">
          <Row className="align-items-center mt-5">
            <div className="title-heading mb-5">
              <h4 className="text-white font-weight-normal home-2-title mb-0">
                What is ICO NurGolds ?
              </h4>
              <p className="text-white-70 mt-4 f-15 mb-0">
                {" "}
                Our team has designed NurGolds to put control back in
                your hands and make gold a high-value asset. Unlike
                traditional gold that is controlled by fiat currency,
                NurGolds is independent and operates on the MuBdI
                blockchain platform. which includes features such as
                Blockstream technology, a Decentralized Environment
                Platform (DEP), and Real Link Fundamental (RLF) to
                provide a transparent and secure platform for users. The
                blockchain will use the AIRLogic II algorithm for
                hashing and is compatible with all machines, andl
                support Proof of Stake, Masternode, Proof
                of Stake 2, and Proof of Shares consensus mechanisms.
              </p>
            </div>
          </Row>
        </div>
      </Col>
  );
};

export default Abouts;
