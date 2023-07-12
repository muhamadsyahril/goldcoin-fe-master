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

const BlogList = () => {
  const [activeTab, toggleTab] = useState("1")

  const toggle = tab => {
    if (activeTab !== tab) toggleTab(tab)
  }
  return (
    <React.Fragment>
      <Row>
        <Col xl={3} lg={3}>
          <div className="content-blog">
            <Link to="/bitcoin-btc-price-prediction-for-june-2023">
              <div className="header-content-img">
                <img src={harga} alt="" className="" />
              </div>
              <span className="tag-blog">CRYPTOCURRENCY</span>
              <h1>Bitcoin (BTC) price prediction for June 2023</h1>
              <p>
                Predicting what will happen to Bitcoin’s price is difficult. The
                token traded at almost £50,000 in November 2021 and today it’s
                valued at £21,118.
              </p>
              <div className="time">
                <span>10 Mei 2023</span> - 4 min read
              </div>
            </Link>
          </div>
        </Col>
        <Col xl={3} lg={3}>
          <div className="content-blog">
            <Link to="/bitcoin-btc-price-prediction-for-june-2023">
              <div className="header-content-img">
                <img src={harga} alt="" className="" />
              </div>
              <span className="tag-blog">CRYPTOCURRENCY</span>
              <h1>Bitcoin (BTC) price prediction for June 2023</h1>
              <p>
                Predicting what will happen to Bitcoin’s price is difficult. The
                token traded at almost £50,000 in November 2021 and today it’s
                valued at £21,118.
              </p>
              <div className="time">
                <span>10 Mei 2023</span> - 4 min read
              </div>
            </Link>
          </div>
        </Col>
        <Col xl={3} lg={3}>
          <div className="content-blog">
            <Link to="/bitcoin-btc-price-prediction-for-june-2023">
              <div className="header-content-img">
                <img src={harga} alt="" className="" />
              </div>
              <span className="tag-blog">CRYPTOCURRENCY</span>
              <h1>Bitcoin (BTC) price prediction for June 2023</h1>
              <p>
                Predicting what will happen to Bitcoin’s price is difficult. The
                token traded at almost £50,000 in November 2021 and today it’s
                valued at £21,118.
              </p>
              <div className="time">
                <span>10 Mei 2023</span> - 4 min read
              </div>
            </Link>
          </div>
        </Col>
        <Col xl={3} lg={3}>
          <div className="content-blog">
            <Link to="/bitcoin-btc-price-prediction-for-june-2023">
              <div className="header-content-img">
                <img src={harga} alt="" className="" />
              </div>
              <span className="tag-blog">CRYPTOCURRENCY</span>
              <h1>Bitcoin (BTC) price prediction for June 2023</h1>
              <p>
                Predicting what will happen to Bitcoin’s price is difficult. The
                token traded at almost £50,000 in November 2021 and today it’s
                valued at £21,118.
              </p>
              <div className="time">
                <span>10 Mei 2023</span> - 4 min read
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default BlogList
