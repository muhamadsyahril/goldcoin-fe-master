import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  Col,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import classnames from "classnames"

//import images
import harga from "../../../assets/images/blog/harga.webp"

const HeaderBlog = () => {
  const [activeTab, toggleTab] = useState("1")

  const toggle = tab => {
    if (activeTab !== tab) toggleTab(tab)
  }
  return (
    <React.Fragment>
      <div className="header-blog">
        <Row>
          <Col xl={6} lg={6}>
            <div className="header-blog-img">
              <img src={harga} alt="" className="" />
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="content-blog">
              <span className="tag-blog">CRYPTOCURRENCY</span>
              <Link to="/bitcoin-btc-price-prediction-for-june-2023"><h1>Bitcoin (BTC) price prediction for June 2023</h1></Link>
              <p>
                Predicting what will happen to Bitcoin’s price is difficult. The
                token traded at almost £50,000 in November 2021 and today it’s
                valued at £21,118.
              </p>
              <p>
                As volatile as BTC prices are, they’re driven by four main
                factors: supply, demand, competition and sentiment. Here, we’ve
                taken a look at how each might play out in the foreseeable
                future – plus some additional pressures and expert opinions - to
                predict what might be next for bitcoin prices.
              </p>
              <p>
                The Financial Conduct Authority (FCA) has warned repeatedly that
                anyone investing in crypto should be prepared to lose
                everything.
              </p>
              <div className="time">
                <span>10 Mei 2023</span> - 4 min read
              </div>
            </div>
          </Col>
        </Row>
        
      </div>
    </React.Fragment>
  )
}

export default HeaderBlog
