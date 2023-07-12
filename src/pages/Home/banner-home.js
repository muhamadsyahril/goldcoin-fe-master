import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Progress } from "reactstrap";
import { detailProduct } from "../../actions";
//Import Countdown
import Countdown from "react-countdown";


const BannerHome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  const [productUuid, setProductUuid] = useState("e20c1417-cd37-42a3-912b-7cad3edd93eb");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [stock, setStock] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const gotoBuy = () => {
    console.log("goto buy");
  };
  const Completionist = () => <span>You are good to go!</span>;

  const rendererCountDown = ({ days, hours,  minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      return (
        <>
        <div className="well">
          <div className="counter" id="clockdiv">
          <div className="sq">
              <span className="days bord">{days}</span> <span className="smalltext text-white">DAYS</span>
          </div>
          <div className="sq">
              <span className="hours bord">{hours}</span> <span className="smalltext text-white">HOURS</span>
          </div>
          <div className="sq">
              <span className="minutes bord">{minutes}</span> <span className="smalltext text-white">MINUTES</span>
          </div>
          <div className="sq">
              <span className="seconds bord">{seconds}</span> <span className="smalltext text-white">SECONDS</span>
          </div>
          </div>
      </div>
      </>
      );
    }
  };

  useEffect(() => {
    if(!isReady){
      handleProductDetail()
    }
  })
  
  const handleProductDetail = () => {
    if (productUuid) {
      dispatch(detailProduct(productUuid)).then((response) => {
        if (response.status === 200) {
          setPrice(response.data.price)
          setQty(response.data.qty)
          setStock(response.data.stock)
          setEndDate(response.data.endDate)
          setDiscount(response.data.discount)
          setIsReady(true)
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
    <div className="page-content bg-black home-bg">
      <div className="container-fluid">
      <div className="section align-items-center" id="home">
        <div className="content-center">
          <div className="container">
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="home-wrapper text-center">
                    <Row className="align-items-center">
                    <div className="col-md-12 text-center">
                      <div className="title-heading">
                        <h1 className="text-white font-weight-normal mb-0">Introducing NurGolds</h1>
                        <h1 className="text-white font-weight-normal mb-0"> Invaluable Real Gold</h1>
                        <p className="text-white-70 mt-4 f-15 mb-0">
                          {" "}
                          Gold has always been a safe haven for investors, but
                          it's always been subject to the whims of fiat
                          currency. That's why our team has created NurGolds, a
                          new cryptocurrency that allows you to save, use, and
                          distribute gold. By using the full potential of
                          blockchain technology, we've given gold a new value
                          that makes it "invaluable."
                        </p>
                        <div className="text-white mt-2">
                          {(() => {
                            if (userAuth) {
                              return (
                                <Link to="#" onClick={() => {
                                  gotoBuy();
                                }} className={"btn btn-outline-light waves-effect waves-light btn-lg"}>
                                  Buy Now
                                </Link>
                              );
                            } else {
                              return (
                                <Link to="#" className={"btn btn-outline-light waves-effect waves-light btn-lg"}>
                                  Buy Now
                                </Link>
                              );
                            }

                            return null;
                          })()}
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-5 mb-4">
              <Col lg={6}>
                <div className="home-wrapper text-center">
                <Row className="align-items-center">
                    <div className="promote-box service-rounded p-4">
                    <div className="promote-desc">
                        <div className="service-title mb-2 position-relative">
                        <h2 className="font-weight-normal tex-center text-white">
                            Coin sale is Live!
                        </h2>
                        </div>
                        <p className="text-white tex-center">
                        {discount}% sales ends in
                        </p>
                        <Row className="align-items-center mt-3">
                          {isReady ? <Countdown date={endDate} renderer={rendererCountDown} /> : <></>}
                        </Row>
                        <p className="mt-3 mb-5">
                            <Link to="#" className={"btn btn-primary waves-effect waves-light btn-lg"}>
                                Register and Buy Coin Now
                          </Link>
                        </p>
                        {/* <div className="mt-3 mb-5">
                            <p className="text-white float-right">Hard Cap</p>
                        </div> */}
                        <div className="mt-3 mb-5">
                            <div className="mt-3"><Progress color="success" value={75} /></div>
                            <p className="text-white float-left mt-1">Risen:  {qty}</p>
                            <p className="text-white float-right mt-1"> {qty+stock}</p>
                        </div>
                    </div>
                    </div>
                    </Row>
                    </div>
                </Col>
            </Row>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default BannerHome;
