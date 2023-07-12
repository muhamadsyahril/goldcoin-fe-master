import React from "react"
import { Row} from "reactstrap"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import BannerHome from "./banner-home";
import Abouts from "./abouts";
import HowToBuys from "./how-to-buys";
import RoadMap from "./roadmap";
import Team from "./team";
import { Link } from "react-router-dom"
import Allocations from "./allocations";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-black">
        <div className="container-fluid">
          <BannerHome />
          <Row className="justify-content-center">
            <Abouts />
            <HowToBuys />
          </Row>
          <Allocations />
          <RoadMap />
          <Team />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePage
