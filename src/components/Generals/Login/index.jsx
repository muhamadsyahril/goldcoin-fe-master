import { Input, Space } from "antd";
import React, { useRef, useState } from "react";
import {
	Row,
	Col,
	Modal,
  } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import EyeIcon from "../../Icons/EyeIcon";
const Login = (props) => {
	return (
		<>
		{/* login start */}
		<Modal
		isOpen={props.modalLogin}
		toggle={() => {
			props.showModalLogin();
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
						props.setModalLogin(false);
					}}
				  ></i>
				</div>
			  </div>
			</div>
			<Col lg={10} offset={2}>
			  <div className="service-wrapper text-center">
				<Row>
				  <div className="col-lg-12">
					<h2 className="text-white mb-3">Login</h2>
					<AvForm
					  className="form-horizontal mt-4"
					  onValidSubmit={() => props.handleLoginSubmit()}
					>
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
						<div className="col-md-12">
						  <button
							type="submit"
							className="btn btn-secondary waves-effect"
						  >
							Login
						  </button>
						</div>
					  </Row>
					</AvForm>
				  </div>
				</Row>
			  </div>
			  <div className="mt-2 text-center">
				<div className="text-white">
				  Not Registered Yet? {""}
				  <div
					className="fw-medium text-custom text-pointer"
					onClick={() => {
						props.handleGetAddress();
						props.setModalLogin(false);
						props.setModalRegister(true);
					}}
				  >
					Signup
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
	  {/* login end */}
	  </>
	);
};

export default Login;
