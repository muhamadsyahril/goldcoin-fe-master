import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { getExchange } from "../../actions";
import { formatRupiah } from "../../helpers/formatDigit";
import classnames from "classnames"

const Payment = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  const [total, setTotal] = useState(1);
  const [activeTab, setActiveTab] = useState("1");
  const [virtualAccount, setVirtualAccount] = useState(false);
  const [transferBank, setTransferBank] = useState(false);
  const [digitalWallet, setDigitalWallet] = useState(false);

  const handlePayment = (value) => {
    if (activeTab !== value) {
      setActiveTab(value)
    }
  }

  const calculateTotal = (value, exchangeValue) => {
    var getTotal = value*exchangeValue
    getTotal = getTotal.toFixed(2)
    setTotal(getTotal)
  }

  return props.isOpen == true ? (
    <React.Fragment>
      <div className="page-content bg-verification">
        <div className="container-fluid">
          <Row className="justify-content-center" style={{paddingTop: 100}}>
            <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4 mb-3">Payment Method</CardTitle>
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            handlePayment("1")
                          }}
                        >
                          <img
                              src={`${process.env.REACT_APP_BASE_URL}/images/payments/virtualaccount.png`}
                              alt=""
                              width="40"
                              height="40"
                              />&nbsp; Transfer Virtual Account
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab === "2",
                          })}
                          onClick={() => {
                            handlePayment("2")
                          }}
                        >
                          <img
                              src={`${process.env.REACT_APP_BASE_URL}/images/payments/digitalwallet.png`}
                              alt=""
                              width="40"
                              height="40"
                              />&nbsp; Digital Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: activeTab === "3",
                          })}
                          onClick={() => {
                            handlePayment("3")
                          }}
                        >
                          <img
                              src={`${process.env.REACT_APP_BASE_URL}/images/payments/cryptocurrency.png`}
                              alt=""
                              width="40"
                              height="40"
                              />&nbsp; Crypto currency
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab} className="p-3 text-muted">
                      <TabPane tabId="1">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <span className="p-4">
                              <input type="radio" name="payment" id="payment-channel-1" />
                              &nbsp;
                              <label for="payment-channel-1">
                                <img 
                                width="50"
                                height="50"
                                src={`${process.env.REACT_APP_BASE_URL}/images/payments/bca.png`} />
                                &nbsp; BCA
                              </label>
                            </span>
                            <span className="p-4">
                              <input type="radio" name="payment" id="payment-channel-2" />
                              &nbsp;
                              <label for="payment-channel-2">
                                <img 
                                width="50"
                                height="50"
                                src={`${process.env.REACT_APP_BASE_URL}/images/payments/mandiri.png`} />
                                &nbsp; MANDIRI
                              </label>
                            </span>
                            <span className="p-4">
                              <input type="radio" name="payment" id="payment-channel-3" />
                              &nbsp;
                              <label for="payment-channel-3">
                                <img 
                                width="50"
                                height="50"
                                src={`${process.env.REACT_APP_BASE_URL}/images/payments/bni.png`} />
                                &nbsp; BNI
                              </label>
                            </span>
                            <span className="p-4">
                              <input type="radio" name="payment" id="payment-channel-4" />
                              &nbsp;
                              <label for="payment-channel-4">
                                <img 
                                width="50"
                                height="50"
                                src={`${process.env.REACT_APP_BASE_URL}/images/payments/bri.png`} />
                                &nbsp; BRI
                              </label>
                            </span>
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <span className="p-4">
                              <input type="radio" name="payment" id="payment-channel-5" />
                              &nbsp;
                              <label for="payment-channel-5">
                                <img 
                                width="50"
                                height="50"
                                src={`${process.env.REACT_APP_BASE_URL}/images/payments/ovo.png`} />
                                &nbsp; OVO
                              </label>
                            </span>
                            <span className="p-4">
                              <input type="radio" name="payment" id="payment-channel-6" />
                              &nbsp;
                              <label for="payment-channel-6">
                                <img 
                                width="50"
                                height="50"
                                src={`${process.env.REACT_APP_BASE_URL}/images/payments/gopay.png`} />
                                &nbsp; GOPAY
                              </label>
                            </span>
                            <span className="p-4">
                              <input type="radio" name="payment" id="payment-channel-6" />
                              &nbsp;
                              <label for="payment-channel-6">
                                <img 
                                width="50"
                                height="50"
                                src={`${process.env.REACT_APP_BASE_URL}/images/payments/dana.png`} />
                                &nbsp; DANA
                              </label>
                            </span>
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                              Crypto currency
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
        </Row>
      </div>
    </div>
    </React.Fragment>
  ) : (
    <></>
  );
}

export default Payment
