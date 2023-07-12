import React,{useState} from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Row, Col, BreadcrumbItem, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"

const Breadcrumb = (props) => {
  const [setting_Menu, setsetting_Menu] = useState(false)

  return (
    <Row className="align-items-center">
      <Col sm={12}>
        <div className="page-title-box">
          <ol className="breadcrumb mb-0">
            {
              (props.maintitle) ?
            <>
            <BreadcrumbItem>
              <Link to="/news">{props.maintitle}</Link>
            </BreadcrumbItem>
            </> : ''
            }
            <BreadcrumbItem>
              <Link to="/#">{props.title}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {props.breadcrumbItem}
            </BreadcrumbItem>
          </ol>
        </div>
      </Col>
    </Row>
  )
}

export default Breadcrumb
