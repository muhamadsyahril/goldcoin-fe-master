import { Input, Space } from "antd";
import React, { useRef, useState } from "react";
import {
	Row,
	Col,
	Modal,
  } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { QRCodeCanvas } from "qrcode.react";
import EyeIcon from "../../Icons/EyeIcon";

const Register = (props) => {
	const userAuth = JSON.parse(localStorage.getItem("userAuth"));
	const [addressKey, setAddressKey] = useState("");
	const [publicKey, setPublicKey] = useState("");
	const [privateKey, setPrivateKey] = useState("");

	return (
		<>
		{/* register start */}
		<Modal
            isOpen={props.modalRegister}
            toggle={() => {
              props.showModalRegister();
            }}
            size="md"
            backdropClassName=""
            className="login-modal border-0"
          >
            <div className="modal-body login-box login-rounded">
              <div className="container-fluid">
                <div className="close-modal">
                  <div className="modal-header">
                    <div className="col-sm-1 offset-11 pull-right">
                      <i
                        className="mdi mdi-close-thick text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
							props.setModalRegister(false);
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
                <Col lg={10}>
                  <div className="service-wrapper text-center">
                    <Row>
                      <div className="col-lg-12">
                        <div
                          style={{
                            height: "auto",
                            margin: "0 auto",
                            maxWidth: 150,
                            width: "100%",
                          }}
                        >
                          <QRCodeCanvas
                            size={256}
                            style={{
                              height: "auto",
                              maxWidth: "100%",
                              width: "100%",
                            }}
                            value={props.addressKey}
                            viewBox={`0 0 256 256`}
                          />
                        </div>
                        <h2 className="text-white mb-3">Register</h2>
                        <AvForm
                          className="form-horizontal mt-4"
                          onValidSubmit={() => props.handleRegisterSubmit()}
                        >
                          <Row className="mb-3">
                            <label
                              htmlFor="example-email-input"
                              className="col-md-4 text-white"
                            >
                              Username
                            </label>
                            <div className="col-md-8">
                              <input
                                className="form-control"
                                type="text"
                                value={props.userName}
                                onChange={(e) => props.setUserName(e.target.value)}
                                required
                              />
                            </div>
                          </Row>
                          <Row className="mb-3">
                            <label
                              htmlFor="example-email-input"
                              className="col-md-4 text-white"
                            >
                              Email
                            </label>
                            <div className="col-md-8">
                              <input
                                className="form-control"
                                type="email"
                                value={props.email}
                                onChange={(e) => props.setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </Row>
                          <Row className="mb-3">
                            <label
                              htmlFor="example-email-input"
                              className="col-md-4 text-white"
                            >
                              Password
                            </label>
                            <div className="col-md-8">
                              <input
                                className="form-control"
                                type={props.passwordShown ? "text" : "password"}
                                value={props.password}
                                onChange={(e) => props.setPassword(e.target.value)}
                                required
                              />
                              <div
                                className="show-password"
                                onClick={() => {
									props.setPasswordShown(!props.passwordShown);
                                }}
                              >
                                <EyeIcon
                                  className="text-white"
                                  open={props.passwordShown}
                                />
                              </div>
                            </div>
                          </Row>
                          <Row className="mb-3">
                            <label
                              htmlFor="example-email-input"
                              className="col-md-4 text-white"
                            >
                              Confirm Password
                            </label>
                            <div className="col-md-8">
                              <input
                                className="form-control"
                                type={
									props.confirmPasswordShown ? "text" : "password"
                                }
                                value={props.confirmPassword}
                                onChange={(e) =>
									props.setConfirmPassword(e.target.value)
                                }
                                required
                              />
                              <div
                                className="show-password"
                                onClick={() => {
									props.setConfirmPasswordShown(
                                    !props.confirmPasswordShown
                                  );
                                }}
                              >
                                <EyeIcon
                                  className="text-white"
                                  open={props.confirmpasswordShown}
                                />
                              </div>
                            </div>
                          </Row>
                          <Row className="mb-3">
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="btn btn-secondary waves-effect"
                              >
                                Register
                              </button>
                            </div>
                          </Row>
                        </AvForm>
                      </div>
                    </Row>
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-white">
                      Already a member? {""}
                      <div
                        className="fw-medium text-custom text-pointer"
                        onClick={() => {
							props.setModalRegister(false);
							props.setModalLogin(true);
                        }}
                      >
                        Login
                      </div>
                    </div>
                    <div className="text-white mt-2">
                      © {new Date().getFullYear()} NurGolds
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </Modal>
          {/* register end */}
		  </>
	)
};

export default Register;
