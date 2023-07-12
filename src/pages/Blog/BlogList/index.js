import React from "react"
import MetaTags from "react-meta-tags"
import { Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import BlogList from "./BlogList"
import RightBar from "./RightBar"
import HeaderBlog from "./HeaderBlog"

function index(props) {
  return (
    <React.Fragment>
      <div className="page-content bg-black mt-4">
        <MetaTags className="text-white">
          <title>NurGolds | News</title>
        </MetaTags>
        <div className="container">
          <div className="align-items-center">
            <HeaderBlog />
            <div className="main-blog">
              <h2>Latest News</h2>
              <BlogList />
              <h2>Must Read</h2>
              <BlogList />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default index
