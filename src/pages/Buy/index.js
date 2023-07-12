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
import { getExchange } from "../../actions";
import { formatRupiah } from "../../helpers/formatDigit";
import PaymentGateway from "./payment";

const Buy = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  const [isReady, setIsReady] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [balance, setBalance] = useState(0);
  const [exchangeCurrency, setExchangeCurrency] = useState("");
  const [exchangeValue, setExchangeValue] = useState(0);
  const [coin, setCoin] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    if(!isReady){
      handleExchange()
    }
  })

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

  const handleBuy = () => {
    setIsPayment(true)
  }

  const calculateTotal = (value, exchangeValue) => {
    var getTotal = value*exchangeValue
    getTotal = getTotal.toFixed(2)
    setTotal(getTotal)
  }

  return (
    <React.Fragment>
    {isPayment == true ? (
      <PaymentGateway 
      isOpen={isPayment}
      />
    ) : (
      <>
      <div className="page-content bg-verification">
        <div className="container-fluid">
          <Row className="justify-content-center" style={{paddingTop: 100}}>
            <Col lg={3}>
            <div className="verification-box verification-rounded text-center p-3">
              <div className="service-title mt-4 mb-4 position-relative">
                <h3 className="font-weight-normal tex-center text-white">
                  $ {exchangeValue}
                </h3>
                <h4 className="font-weight-normal tex-center text-white">
                  NurGolds / {exchangeCurrency}
                </h4>
                <h5 className="font-weight-normal tex-center text-white">
                  Total : $ {total > 1 ? total : exchangeValue}
                </h5>
              </div>
              <Col lg={12}>
                <div className="service-wrapper text-center">
                  <AvForm
                    className="form-vertical"
                    onValidSubmit={() => handleBuy()}
                  >
                    <Row className="mb-3">
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
                    </Row>
                    <Row className="mb-3 mt-2">
                      <button
                        type="submit"
                        className="btn btn-info waves-effect waves-light"
                        >
                        Buy
                      </button>
                    </Row>
                    
                  </AvForm>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    </>
    )}
    </React.Fragment>
  )
}

export default Buy
