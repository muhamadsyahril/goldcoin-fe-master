import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import OtpInput from 'react-otp-input';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { VerifyPhoneAct, VerifyOtpAct } from "../../actions";

const VerifyPhone = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [userUuid, setUserUuid] = useState(userAuth.data.user.userUuid);
  const [verifyPhone, setVerifyPhone] = useState(true);
  const [verifyOtp, setVerifyOtp] = useState(false);

  const handleVerifyPhone = () => {
    if (phone) {
      const user = {
        phone,
        userUuid
      };
      dispatch(VerifyPhoneAct(user)).then((response) => {
        if (response.status === 200) {
          setVerifyPhone(false)
          setVerifyOtp(true)
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.message,
            background: "#23262f",
            confirmButtonColor: "#f27474",
            color: "#fff",
          });
        }
      });
    }
  }

  const handleVerifyOtp = () => {
    if (phone && otp) {
      const user = {
        phone,
        otp,
        userUuid
      };
      dispatch(VerifyOtpAct(user)).then((response) => {
        if (response.status === 200) {
          window.location = "/phone-status"
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.message,
            background: "#23262f",
            confirmButtonColor: "#f27474",
            color: "#fff",
          });
        }
      });
    }
  }

  return (
    <React.Fragment>
      <div className="page-content bg-verification">
        <div className="container-fluid">
        {(() => {
                if (verifyPhone) {
                  return (
                    <Row className="justify-content-center" style={{paddingTop: 100}}>
                    <Col lg={3}>
                      <div className="verification-box verification-rounded text-center p-3">
                          <div className="service-title mt-4 mb-4 position-relative">
                            <h2 className="font-weight-normal tex-center text-white">
                              Verification Phone
                            </h2>
                          </div>
                          <Col lg={12}>
                            <div className="service-wrapper text-center">
                              <AvForm
                                className="form-vertical"
                                onValidSubmit={() => handleVerifyPhone()}
                              >
                                <Row className="mb-3">
                                  <PhoneInput
                                    country={"id"}
                                    enableSearch={true}
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                    />
                                </Row>
                                <Row className="mb-3 mt-2">
                                  <button
                                    type="submit"
                                    className="btn btn-info waves-effect waves-light"
                                    >
                                    Verify Phone
                                  </button>
                                </Row>
                                
                              </AvForm>
                            </div>
                          </Col>
                          <div className="mt-5">
                              <p className="text-white">Contact Live NurGolds Support</p>
                          </div>
                      </div>
                    </Col>
                  </Row>
                  );
                }

                if (verifyOtp) {
                  return (
                    <Row className="justify-content-center mt-5">
                    <Col lg={3} className="mt-5">
                      <div className="verification-box verification-rounded text-center p-4">
                          <div className="service-title mt-5 mb-5 position-relative">
                            <h3 className="font-weight-normal tex-center text-white">
                              Confirm Your Phone Number
                            </h3>
                          </div>
                          <div className="mt-3">
                            <Col lg={12}>
                              <div className="service-wrapper text-center">
                                <Row>
                                    
                                    <AvForm
                                      className="form-horizontal"
                                      onValidSubmit={() => handleVerifyOtp()}
                                    >
                                      <Row className="mb-3">
                                      <OtpInput
                                        containerStyle={"otp-input"}
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} />}
                                      />
                                      </Row>
                                      <Row className="mb-3">
                                        <div className="text-white">We’ve sent a verification code to ${phone} &nbsp;</div>
                                        <div className="text-warning">Resend in 28 s</div>
                                      </Row>
                                      
                                      <Row className="mt-3">
                                        <div className="col-lg-12">
                                          <button
                                            type="submit"
                                            className="btn btn-info waves-effect waves-light btn-md"
                                          >
                                            Verify OTP
                                          </button>
                                        </div>
                                      </Row>
                                    </AvForm>
                                </Row>
                              </div>
                            </Col>
                          </div>
                          
                          <div className="mt-5">
                              <p className="text-white">Contact Live NurGolds Support</p>
                          </div>
                      </div>
                    </Col>
                  </Row>
                  );
                }

                return null;
              })()}
        </div>
      </div>
    </React.Fragment>
  )
}

export default VerifyPhone
