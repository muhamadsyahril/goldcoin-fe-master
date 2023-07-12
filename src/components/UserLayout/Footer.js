import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
                <section className="footer-bg">
                    <div className="container">
                    <Container fluid={true}>
                        <Row>
                            <Col lg="4">
                                <div className="mt-4">
                                    <p className="text-uppercase text-white footer-title">NurGolds</p>
                                    <p className="text-white f-14">NurGolds is a cross-platform common rewarding portal for the cryptocurrency market. We offer a platform to reward investors...</p>
                                </div>
                                <div className="mt-3">
                                    <p className="text-uppercase text-white footer-title">Address</p>
                                    <p className="text-white f-14">Jl. KMP. Pondok Jaya No.48 RT.004 RW.001 Kelurahan. Pondok Jaya, Bintaro Sektor 7, Tangerang Selatan Banten, INDONESIA 15224</p>
                                </div>
                            </Col>

                            <Col lg="8">
                                <Row>
                                    <Col lg="8" >
                                    <p className="text-uppercase text-white footer-title mt-4">Quick Links</p>
                                    <Row>
                                        <Col lg="4">
                                            
                                            <ul className="list-unstyled footer-sub-menu">
                                                <li className="f-14"><a href={`${process.env.REACT_APP_BASE_URL}/#aboutus`} className="text-white">What ICO</a></li>
                                                <li className="f-14"><a href="https://drive.google.com/file/d/1SCipnQAW_p1KCQolcLj3zZz8q3nDzKPX/view" className="text-white">Whitepaper</a></li>
                                                <li className="f-14"><a href={`${process.env.REACT_APP_BASE_URL}/#home`} className="text-white">Coins</a></li>
                                                <li className="f-14"><a href={`${process.env.REACT_APP_BASE_URL}/#roadmap`} className="text-white">Roadmap</a></li>
                                            </ul>
                                        </Col>
                                        <Col lg="4">
                                            <ul className="list-unstyled footer-sub-menu">
                                                <li className="f-14"><a href="/" className="text-white">ICO Bonus</a></li>
                                                <li className="f-14"><a href="/" className="text-white">Mobile Wallet</a></li>
                                                <li className="f-14"><a href="/" className="text-white">Chrome Wallet</a></li>
                                                <li className="f-14"><a href={`${process.env.REACT_APP_BASE_URL}/#teams`} className="text-white">Team</a></li>
                                                <li className="f-14"><a href={`${process.env.REACT_APP_BASE_URL}/news`} className="text-white">Media</a></li>
                                            </ul>
                                        </Col>
                                        <Col lg="4">
                                            <ul className="list-unstyled footer-sub-menu">
                                                <li className="f-14"><a href="/" className="text-white">FAQ</a></li>
                                                <li className="f-14"><a href={`${process.env.REACT_APP_BASE_URL}/#aboutus`} className="text-white">About Us</a></li>
                                                <li className="f-14"><a href={`${process.env.REACT_APP_BASE_URL}/news`} className="text-white">Blogs</a></li>
                                                <li className="f-14"><a href={`${process.env.REACT_APP_BASE_URL}/#contactus`} className="text-white">Contact Us</a></li>
                                            </ul>
                                        </Col>
                                        </Row>
                                    </Col>

                                    <Col lg="4">
                                        <div className="mt-3">
                                            <p className="text-uppercase text-white footer-title mb-4">
                                                <a href="/">
                                                    <img src="images/logo.png" alt="" height="80" />
                                                </a>
                                            </p>
                                            
                                            <ul className="footer-social-media">
                                                <li>
                                                <a href="/">
                                                    <img src="images/facebook.png" alt="" height="45" />
                                                </a>
                                                </li>
                                                <li>
                                                <a href="/">
                                                    <img src="images/instagram.png" alt="" height="45" />
                                                </a>
                                                </li>
                                                <li>
                                                <a href="/">
                                                    <img src="images/twitter.png" alt="" height="45" />
                                                </a>
                                                </li>
                                                <li>
                                                <a href="/">
                                                    <img src="images/linkedin.png" alt="" height="45" />
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                      </Container>
                    </div>
                </section>
            </React.Fragment>
  )
}

export default Footer
