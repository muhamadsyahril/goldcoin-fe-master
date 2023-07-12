import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
//SimpleBar
import SimpleBar from "simplebar-react";
import { QRCodeCanvas } from "qrcode.react";
import { getBalance, getExchange } from "../../actions";
import "../../components/CommonForBoth/rightbar.scss";
import { formatRupiah } from "../../helpers/formatDigit";




const RightSidebar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  const [isReady, setIsReady] = useState(false);
  const [balance, setBalance] = useState(0);
  const [exchangeCurrency, setExchangeCurrency] = useState("");
  const [exchangeValue, setExchangeValue] = useState(0);
  const [coin, setCoin] = useState(1);
  const [total, setTotal] = useState(1);
  const handleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };

  useEffect(() => {
    if(!isReady){
      handleBalance()
      handleExchange()
    }
  })
  
  const handleBalance = () => {
    setIsReady(true)
    if (userAuth.data.user.addressKey) {
      dispatch(getBalance(userAuth.data.user.addressKey)).then((response) => {
        if (response) {
          setBalance(response.balance)
        } else {
          setBalance(0)
        }
      });
    }
  }

  const handleExchange = () => {
    setIsReady(true)
    dispatch(getExchange()).then((response) => {
      if (response) {
        setExchangeCurrency(response[0].curr)
        var exChangeResponse = response[0].xauPrice*0.5
        setExchangeValue(exChangeResponse.toFixed(2))
      } else {
        
      }
    });
  }

  const calculateTotal = (value, exchangeValue) => {
    var getTotal = value*exchangeValue
    getTotal = getTotal.toFixed(2)
    setTotal(getTotal)
  }

  return props.isOpen == true ? (
    <React.Fragment>
      <div className="right-bar" style={{ right: 0 }}>
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4 mb-2">
              <Link
                to="#"
                onClick={props.handleClick}
                className="right-bar-toggle float-end"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
            </div>
            
            
            <Col xl={12} md={6}>
              <Card className="bg-secondary text-white align-items-center">
                <CardBody>
                <div className="d-flex">
                    <div className="col-md-8">
                      <img
                        src={userAuth.data.user.avatar} alt="" height={60} width={60}
                      />
                      <div className="flex-1">
                        <h5 className="text-white font-size-18 mt-0 mb-1">
                          {userAuth.data.user.userName}
                        </h5>
                        <p className="font-size-12 text-uppercase mb-0">Balance : $ {balance}{" "}</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <QRCodeCanvas
                          size={250}
                          style={{
                            height: "80px",
                            maxWidth: "80px",
                            width: "100%",
                          }}
                          value={userAuth.data.user.addressKey}
                          viewBox={`0 0 250 250`}
                        />
                        
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-md-12">
                      <p className="mb-0">{userAuth.data.user.addressKey}{" "} <i  style={{ cursor: "pointer" }} onClick={() =>  navigator.clipboard.writeText(userAuth.data.user.addressKey)} className="mdi mdi-content-copy"></i></p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={12} md={6}>
              <Card className="bg-secondary text-white align-items-center">
                <CardBody>
                <div className="d-flex">
                    <div className="col-md-5">
                      <div className="flex-1">
                        <h5 className="text-white font-size-12 mt-0 mb-1">
                          $ {exchangeValue}
                        </h5>
                        <h3 className="text-white font-size-12 mt-0 mb-1">NurGolds / {exchangeCurrency} </h3>
                      </div>
                    </div>
                    <div className="col-md-4 font-size-12">
                      <input
                            className="form-control"
                            type="number"
                            value={coin}
                            onChange={(e) => {
                              setCoin(e.target.value)
                              calculateTotal(e.target.value,exchangeValue)
                            }}
                            required
                          />
                        
                    </div>
                    <div className="col-md-3 font-size-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-md waves-effect"
                      >Buy</button>
                        
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-md-12">
                      <h5 className="text-white font-size-12 mt-0 mb-1">
                        Total : $ {total > 1 ? total : exchangeValue}
                      </h5>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <hr className="my-0" />
           
            <Col xl={12} md={6}>
              <Card className="bg-secondary text-white align-items-center">
                <CardBody>
                <div className="d-flex">
                    <div className="col-md-2 font-size-16">
                      <div className="flex-1">
                        <Link to="#" className="text-white float-start">
                          <i className="mdi mdi-account-cash-outline"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8 font-size-14">
                      Wallet is missing
                    </div>
                    <div className="col-md-2 font-size-16">
                      <Link to="#" className="text-white float-end">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link> 
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
      
            <hr className="my-0" />
            <Row className="align-items-left mt-2 mb-2">
              <h4 className="px-4">EARNINGS</h4>
            </Row>
            <hr className="my-0" />
            <ul className=" ml-auto navbar-center">
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/profile`} className="nav-link  text-white">
                 Profile
                </a>
              </li>
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/verify-phone`} className="nav-link  text-white">
                 Verify Phone
                </a>
              </li>
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/referal`} className="nav-link  text-white">
                  Referal
                </a>
              </li>
              <li className="nav-item">
                <a href={`${process.env.REACT_APP_BASE_URL}/news`} className="nav-link  text-white">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a href="#" 
                  onClick={() => {
                    handleLogout();
                  }} 
                  className="nav-link text-white"
                  >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </React.Fragment>
  ) : (
    <></>
  );
};

export default RightSidebar;
