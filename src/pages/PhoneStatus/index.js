import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Modal,
  Container,
  Alert,
} from "reactstrap";

const PhoneStatus = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState('');

  return (
    <React.Fragment>
      <div className="page-content bg-verification">
        <div className="container-fluid">
          <Row className="justify-content-center mt-5">
            <Col lg={3} className="mt-5">
              <div className="verification-box verification-rounded text-center p-4">
                <div className="promote-desc">
                  <div className="service-title mt-5 mb-5 position-relative">
                    <h4 className="font-weight-normal tex-center text-white">
                      Your Phone Number
                    </h4>
                    <h1 className="font-weight-normal tex-center text-white">
                      Already linked !
                    </h1>
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

export default PhoneStatus
