import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { Row, Col} from "reactstrap";
import Swal from "sweetalert2";
import { VerifyEmailAct } from "../../actions";

const VerifyEmailStatus = () => {
  const history = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();
  const gotoLogin = () => {
    document.querySelector('.login-page').click();
  };

  useEffect(() => {
    handleVerifyEmail()
  })

  const handleVerifyEmail = () => {
    if (id) {
      const user = {
        uuid: id,
      };
      dispatch(VerifyEmailAct(user)).then((response) => {
        if (response.status === 200) {
          
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
          <Row className="justify-content-center" style={{paddingTop: 100}}>
            <Col lg={6}>
              <div className="verification-box verification-rounded text-center p-4">
                <div className="promote-desc">
                  <div className="service-title mt-5 mb-5 position-relative">
                    <h2 className="font-weight-normal tex-center text-white">
                      Verification Email Successfully
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
                  <div className="mt-3">
                      <Link to="#" 
                        onClick={() => {
                          gotoLogin();
                        }}
                        className={"btn btn-info waves-effect waves-light btn-md"}
                        >
                        Login
                    </Link>
                  </div>
                  <div className="mt-5">
                      <p className="text-white">Contact Live  <Link to="#">NurGolds Support</Link></p>
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

export default VerifyEmailStatus
