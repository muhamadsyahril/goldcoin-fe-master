import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { Select } from "antd";
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
import { AvForm, AvField } from "availity-reactstrap-validation";
import { QRCodeCanvas } from "qrcode.react";

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
// users
import user1 from "../../assets/images/users/user-1.jpg";
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import Rightbar from "../CommonForBoth/Rightbar";
import EyeIcon from "../Icons/EyeIcon";
import { login, register, getAddress } from "../../actions";

const Header = (listMenu) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const [showRightSidebarAction, setShowRightSidebarAction] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  const [isReady, setIsReady] = useState(false);
  const [addressKey, setAddressKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const showModalLogin = () => {
    setModalLogin(!modalLogin);
    removeBodyCss();
  };

  const gotoBuy = () => {
    console.log("goto buy");
  };

  const handleLoginSubmit = () => {
    setError({
      email: email !== "" ? false : true,
      password: password !== "" ? false : true,
    });

    if (email && password) {
      const user = {
        email,
        password,
      };
      dispatch(login(user)).then((response) => {
        if (response.status === 200) {
          localStorage.setItem("userAuth", JSON.stringify(response));
          setModalLogin(false);
          Swal.fire({
            icon: "success",
            text: "You are successfully logged in !",
            background: "#23262f",
            confirmButtonColor: "#f27474",
            color: "#fff",
          });
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
  };

  const handleRegisterSubmit = () => {
    setError({
      email: email !== "" ? false : true,
      password: password !== "" ? false : true,
    });

    if (userName && email && password && confirmpassword) {
      if (password == confirmpassword) {
        const user = {
          addressKey,
          publicKey,
          privateKey,
          userName,
          email,
          password,
          confirmpassword,
        };
        dispatch(register(user)).then((response) => {
          if (response.status === 200) {
            setModalRegister(false);
            window.location = process.env.REACT_APP_BASE_URL + '/verify-email/' + response.data.uuid;
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
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Passwords do not match!",
          background: "#23262f",
          confirmButtonColor: "#f27474",
          color: "#fff",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please complete the register form",
        background: "#23262f",
        confirmButtonColor: "#f27474",
        color: "#fff",
      });
    }
  };

  const showModalRegister = () => {
    setModalRegister(!modalLogin);
    removeBodyCss();
  };

  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };

  const handleGetAddress = () => {
    var dataBody = {};
    dispatch(getAddress(dataBody)).then((response) => {
      console.log("get address", response.data.address)
      setAddressKey(response.data.address.addressKey);
      setPublicKey(response.data.address.publicKey);
      setPrivateKey(response.data.address.privateKey);
    });
  };

  return (
    <React.Fragment>
      <nav
        id="main_navbar"
        className="navbar navbar-expand-lg  fixed-top navbar-custom sticky sticky-dark"
      >
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            <img src={`${process.env.REACT_APP_BASE_URL}/images/logo.png`} alt="" height="60" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
              <li className="nav-item">
                <a href="https://drive.google.com/file/d/1SCipnQAW_p1KCQolcLj3zZz8q3nDzKPX/view" className="nav-link">
                  Whitepaper
                </a>
              </li>
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/#partners`} className="nav-link">
                  Partners
                </a>
              </li>
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/#roadmap`} className="nav-link">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/#teams`} className="nav-link">
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/#aboutus`} className="nav-link">
                  About Us
                </a>{" "}
              </li>
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/news`} className="nav-link">
                  News
                </a>{" "}
              </li>
              {(() => {
                if (userAuth) {
                  return (
                    <>
                      <NotificationDropdown />
                    </>
                  );
                }

                return null;
              })()}
              
              <li className="nav-item">
                <LanguageDropdown />
              </li>

              {(() => {
                if (userAuth) {
                  return (
                    <li className="nav-item">
                      <div
                        onClick={() => {
                          gotoBuy();
                        }}
                        className={
                          "btn btn-outline-light waves-effect waves-light btn-lg login-page"
                        }
                      >
                        Buy Coin
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li className="nav-item">
                      <div
                        onClick={() => {
                          showModalLogin();
                        }}
                        className={
                          "btn btn-outline-light waves-effect waves-light btn-lg login-page"
                        }
                      >
                        Buy Coin
                      </div>
                    </li>
                  );
                }

                return null;
              })()}
              {(() => {
                if (userAuth) {
                  return (
                    <>
                      <li className="nav-item">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setShowRightSidebarAction(!showRightSidebarAction);
                          }}
                        >
                          <span className="p-3">
                            <img
                              className="rounded-circle header-profile-user"
                              src={userAuth.data.user.avatar}
                              alt="User Avatar"
                            />
                          </span>
                          {/* <span className="text-white">{userAuth.data.user.userName}</span> */}
                        </div>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          onClick={() => {
                            setShowRightSidebarAction(!showRightSidebarAction);
                          }}
                          className="btn header-item noti-icon right-bar-toggle waves-effect"
                        >
                          <i className="mdi mdi-cog-outline"></i>
                        </button>
                      </li>
                    </>
                  );
                }

                return null;
              })()}
            </ul>
          </div>
          {/* profile setting */}
          {showRightSidebarAction == true ? (
            <Rightbar
              isOpen={showRightSidebarAction}
              addressKey={addressKey}
              handleClick={(e) => setShowRightSidebarAction(false)}
            />
          ) : (
            <></>
          )}
          {/* login start */}
          <Modal
            isOpen={modalLogin}
            toggle={() => {
              showModalLogin();
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
                          setModalLogin(false);
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
                          onValidSubmit={() => handleLoginSubmit()}
                        >
                          {error.email && (
                            <Alert color="danger">Tolong masukkan Email!</Alert>
                          )}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                type={passwordShown ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              <div
                                className="show-password"
                                onClick={() => {
                                  setPasswordShown(!passwordShown);
                                }}
                              >
                                <EyeIcon
                                  className="text-white"
                                  open={passwordShown}
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
                          handleGetAddress();
                          setModalLogin(false);
                          setModalRegister(true);
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
          {/* register start */}
          <Modal
            isOpen={modalRegister}
            toggle={() => {
              showModalRegister();
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
                          setModalRegister(false);
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
                            value={addressKey}
                            viewBox={`0 0 256 256`}
                          />
                        </div>
                        <h2 className="text-white mb-3">Register</h2>
                        <AvForm
                          className="form-horizontal mt-4"
                          onValidSubmit={() => handleRegisterSubmit()}
                        >
                          {error.email && (
                            <Alert color="danger">Tolong masukkan Email!</Alert>
                          )}
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
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                type={passwordShown ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              <div
                                className="show-password"
                                onClick={() => {
                                  setPasswordShown(!passwordShown);
                                }}
                              >
                                <EyeIcon
                                  className="text-white"
                                  open={passwordShown}
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
                                  confirmpasswordShown ? "text" : "password"
                                }
                                value={confirmpassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                required
                              />
                              <div
                                className="show-password"
                                onClick={() => {
                                  setConfirmPasswordShown(
                                    !confirmpasswordShown
                                  );
                                }}
                              >
                                <EyeIcon
                                  className="text-white"
                                  open={confirmpasswordShown}
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
                          setModalRegister(false);
                          setModalLogin(true);
                        }}
                      >
                        Login
                      </div>
                    </div>
                    <div className="text-white mt-2">
                      © {new Date().getFullYear()} NurlGolds
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </Modal>
          {/* register end */}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
