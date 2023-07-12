import React, { useEffect, useState } from "react";
import { Row, Col} from "reactstrap"
import { Link } from "react-router-dom"

const VerifyEmail = () => {
  const gotoLogin = () => {
    document.querySelector('.login-page').click();
  };

  return (
    <React.Fragment>
      <div className="page-content bg-verification">
        <div className="container-fluid">
          <Row className="justify-content-center" style={{paddingTop: 100}}>
            <Col lg={6}>
              <div className="verification-box verification-rounded text-center p-4">
                <div className="promote-desc">
                  <div className="service-title mt-5 mb-5 position-relative">
                    <h2 className="font-weight-normal tex-center text-white">
                      You Will Need Your Desktop
                    </h2>
                  </div>
                  <div className="mt-5 mb-5">
                  <Link className="navbar-brand logo" to="/">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/images/icons/verification-email.png`}
                        alt=""
                        width="80"
                        height="70"
                      />
                    </Link>
                  </div>
                  <div className="mt-5">
                      <p className="text-white">Check your mailbox and click the activation link</p>
                  </div>
                  <div className="mt-3">
                      <Link to="#" 
                        onClick={() => {
                          gotoLogin();
                        }}
                        className={"btn btn-info waves-effect waves-light btn-md"}
                        >
                          Resend Email
                    </Link>
                  </div>
                  <div className="mt-5">
                      <p className="text-white">Contact Live NurGolds Support</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default VerifyEmail
