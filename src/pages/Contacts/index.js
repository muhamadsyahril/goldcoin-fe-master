import React from "react"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from "react-router-dom"

const Contacts = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Veltrix" title="Tables" breadcrumbItem="Responsive Table" />
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Example </CardTitle>
                 <p className="card-title-desc text-start">
                    <Link to="#" className="btn btn-primary btn-sm">Create</Link>
                  </p>

                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th data-priority="1">No</Th>
                            <Th data-priority="3">Phone</Th>
                            <Th data-priority="1">Name</Th>
                            <Th data-priority="6">Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>1</Td>
                            <Td>0896736663</Td>
                            <Th>
                              GOOG <span className="co-name">Google Inc.</span>
                            </Th>
                            <Td>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>2</Td>
                            <Td>0896736663</Td>
                            <Th>
                              AAPL <span className="co-name">Apple Inc.</span>
                            </Th>
                            <Td>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>3</Td>
                            <Td>0896736663</Td>
                            <Th>
                              AMZN{" "}
                              <span className="co-name">Amazon.com Inc.</span>
                            </Th>
                            <Td>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contacts
