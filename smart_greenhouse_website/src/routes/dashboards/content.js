import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  FormGroup,
  Label,
  Button,
  Form,
  Input
} from "reactstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { NavLink } from "react-router-dom";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";
import CircularProgressbar from "react-circular-progressbar";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";

import { LineShadow } from "Components/Charts";
import commentsData from "Data/comments.json";
import productsData from "Data/products.json";
import cakeData from "Data/dashboard.cakes.json";


import {
  visitChartConfig,
  conversionChartConfig,
} from "Constants/chartConfig";

const comments = commentsData.data;
const dataTableData = productsData.data;
const cakes = cakeData.data;

const dataTableColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Sales",
    accessor: "sales",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Stock",
    accessor: "stock",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: props => <p className="text-muted">{props.value}</p>
  }
];

const selectData = [
  { label: "Cake", value: "cake", key: 0 },
  { label: "Cupcake", value: "cupcake", key: 1 },
  { label: "Dessert", value: "dessert", key: 2 }
];


export default class ContentDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedOptions: []
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.content" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row>
          <Colxx lg="12" xl="6">
            <div className="icon-cards-row">
              <ReactSiemaCarousel
                perPage={{
                  0: 1,
                  320: 2,
                  576: 3,
                  1800: 4
                }}
                controls={false}
                loop={false}
              >
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsmind-Alarm" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.pending-orders" />
                      </p>
                      <p className="lead text-center">14</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsmind-Basket-Coins" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.completed-orders" />
                      </p>
                      <p className="lead text-center">32</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsmind-Arrow-Refresh" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.refund-requests" />
                      </p>
                      <p className="lead text-center">74</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsmind-Mail-Read" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.new-comments" />
                      </p>
                      <p className="lead text-center">25</p>
                    </CardBody>
                  </Card>
                </div>
              </ReactSiemaCarousel>
            </div>

            <Row>
              <Colxx md="12" className="mb-4">
                <Card>
                  <div className="position-absolute card-top-buttons">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        color=""
                        className="btn btn-header-light icon-button"
                      >
                        <i className="simple-icon-refresh" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <IntlMessages id="dashboards.sales" />
                        </DropdownItem>
                        <DropdownItem>
                          <IntlMessages id="dashboards.orders" />
                        </DropdownItem>
                        <DropdownItem>
                          <IntlMessages id="dashboards.refunds" />
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <CardBody>
                    <CardTitle>
                      <IntlMessages id="dashboards.quick-post" />
                    </CardTitle>
                    <Form className="dashboard-quick-post">
                      <FormGroup row>
                        <Label sm={3}>
                          <IntlMessages id="dashboards.title" />
                        </Label>
                        <Colxx sm={9}>
                          <Input type="text" name="text" />
                        </Colxx>
                      </FormGroup>

                      <FormGroup row>
                        <Label sm={3}>
                          <IntlMessages id="dashboards.content" />
                        </Label>
                        <Colxx sm={9}>
                          <Input type="textarea" rows="3" />
                        </Colxx>
                      </FormGroup>

                      <FormGroup row>
                        <Label sm={3}>
                        <IntlMessages id="dashboards.category" />
                        </Label>
                        <Colxx sm={9}>
                          <Select
                          components={{ Input:  CustomSelectInput}}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={selectData}
                          />
                        </Colxx>
                      </FormGroup>
                      <Button className="float-right" color="primary">
                      <IntlMessages id="dashboards.save-and-publish" />
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Colxx>

          <Colxx lg="12" xl="6" className="mb-4">
            <Card>
              <div className="position-absolute card-top-buttons">
                <button className="btn btn-header-light icon-button">
                  <i className="simple-icon-refresh" />
                </button>
              </div>
              <CardBody>
                <CardTitle>
                <IntlMessages id="dashboards.top-viewed-posts" />
                </CardTitle>
                <ReactTable
                  defaultPageSize={6}
                  data={dataTableData}
                  columns={dataTableColumns}
                  minRows={0}
                  PaginationComponent={DataTablePagination}
                />
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx md="6" lg="4" className="mb-4">
            <Card className="dashboard-link-list">
              <CardBody>
                <CardTitle>
                <IntlMessages id="dashboards.cakes" />
                </CardTitle>
                <div className="d-flex flex-row">
                  <div className="w-50">
                    <ul className="list-unstyled mb-0">
                    {
                        cakes.slice(0, 12).map((c, index) => {
                          return (
                            <li key={index} className="mb-1">
                              <NavLink to={c.link}>{c.title}</NavLink>
                            </li>
                          )
                        })
                      }                     
                    </ul>
                  </div>
                  <div className="w-50">
                    <ul className="list-unstyled mb-0">
                    {
                        cakes.slice(12, 24).map((c, index) => {
                          return (
                            <li key={index} className="mb-1">
                              <NavLink to={c.link}>{c.title}</NavLink>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx lg="8" md="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                <IntlMessages id="dashboards.new-comments" />
                </CardTitle>
                <div className="dashboard-list-with-user">
                  <PerfectScrollbar
                    option={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    {comments.map((ticket, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex flex-row mb-3 pb-3 border-bottom"
                        >
                          <NavLink to="/app/layouts/details">
                            <img
                              src={ticket.thumb}
                              alt={ticket.label}
                              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                            />
                          </NavLink>

                          <div className="pl-3 pr-2">
                            <NavLink to="/app/layouts/details">
                              <p className="font-weight-medium mb-0 ">
                                {ticket.label}
                              </p>
                              <p className="text-muted mb-0 text-small">
                                {ticket.detail}
                              </p>
                            </NavLink>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx sm="12" md="6" className="mb-4">
            <Card className="dashboard-filled-line-chart">
              <CardBody>
                <div className="float-left float-none-xs">
                  <div className="d-inline-block">
                    <h5 className="d-inline">
                    <IntlMessages id="dashboards.website-visits" />
                    </h5>
                    <span className="text-muted text-small d-block">
                      <IntlMessages id="dashboards.unique-visitors" />
                    </span>
                  </div>
                </div>

                <div className="btn-group float-right float-none-xs mt-2">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color="primary"
                      className="btn-xs"
                      outline
                    >
                      <IntlMessages id="dashboards.this-week" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <IntlMessages id="dashboards.last-week" />
                      </DropdownItem>
                      <DropdownItem>
                        <IntlMessages id="dashboards.this-month" />
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </CardBody>

              
              <div className="chart card-body pt-0">
                <LineShadow {...visitChartConfig} />
              </div>
            </Card>
          </Colxx>
          <Colxx sm="12" md="6" className="mb-4">
            <Card className="dashboard-filled-line-chart">
              <CardBody>
                <div className="float-left float-none-xs">
                  <div className="d-inline-block">
                    <h5 className="d-inline">
                    <IntlMessages id="dashboards.conversion-rates" />
                    </h5>
                    <span className="text-muted text-small d-block">
                    <IntlMessages id="dashboards.per-session" />
                    </span>
                  </div>
                </div>
                <div className="btn-group float-right float-none-xs mt-2">
                  <UncontrolledDropdown>
                  <DropdownToggle
                      caret
                      color="secondary"
                      className="btn-xs"
                      outline
                    >
                      <IntlMessages id="dashboards.this-week" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <IntlMessages id="dashboards.last-week" />
                      </DropdownItem>
                      <DropdownItem>
                        <IntlMessages id="dashboards.this-month" />
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </CardBody>
              <div className="chart card-body pt-0">
                <LineShadow {...conversionChartConfig} />
              </div>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx lg="4" className="mb-4">
            <Card className="progress-banner">
              <CardBody className="justify-content-between d-flex flex-row align-items-center">
                <div>
                  <i className="iconsmind-Alarm mr-2 text-white align-text-bottom d-inline-block" />
                  <div>
                    <p className="lead text-white">5 <IntlMessages id="dashboards.posts" /></p>
                    <p className="text-small text-white">
                    <IntlMessages id="dashboards.pending-for-publish" />
                    </p>
                  </div>
                </div>
                <div className="progress-bar-circle progress-bar-banner position-relative">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={40}
                    text={"5/12"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx lg="4" className="mb-4">
            <Card className="progress-banner">
              <CardBody className="justify-content-between d-flex flex-row align-items-center">
                <div>
                  <i className="iconsmind-Male mr-2 text-white align-text-bottom d-inline-block" />
                  <div>
                    <p className="lead text-white">4 <IntlMessages id="dashboards.users" /></p>
                    <p className="text-small text-white">
                    <IntlMessages id="dashboards.on-approval-process" />
                    </p>
                  </div>
                </div>
                <div className="progress-bar-circle progress-bar-banner position-relative">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={66}
                    text={"4/6"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx lg="4" className="mb-4">
            <Card className="progress-banner">
              <CardBody className="justify-content-between d-flex flex-row align-items-center">
                <div>
                  <i className="iconsmind-Bell-2 mr-2 text-white align-text-bottom d-inline-block" />
                  <div>
                    <p className="lead text-white">8 <IntlMessages id="dashboards.alerts" /></p>
                    <p className="text-small text-white">
                    <IntlMessages id="dashboards.waiting-for-notice" />
                    </p>
                  </div>
                </div>
                <div className="progress-bar-circle progress-bar-banner position-relative">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={80}
                    text={"8/10"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
