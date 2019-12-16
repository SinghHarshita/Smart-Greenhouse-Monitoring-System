import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import { ThemeColors } from "Util/ThemeColors";
import PerfectScrollbar from "react-perfect-scrollbar";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";
import {
  lineChartConfig,
  doughnutChartConfig
} from "Constants/chartConfig";

import {
  LineShadow,
  DoughnutShadow,
} from "Components/Charts";
import eventsData from "Data/events.json";
import ticketsData from "Data/tickets.json";
import productsData from "Data/products.json";
import cakeData from "Data/dashboard.cakes.json";

BigCalendar.momentLocalizer(moment);

const recentOrders = productsData.data.slice(0, 6);
const tickets = ticketsData.data;
const events = eventsData.data;
const dataTableData = productsData.data.slice(0, 12);
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

const CustomToolbar = toolbar => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };
  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };
  const goToCurrent = () => {
    toolbar.onNavigate("TODAY");
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      <span>
        <span>{date.format("MMMM")} </span>
        <span> {date.format("YYYY")}</span>
      </span>
    );
  };

  return (
    <div className="big-calendar-header">
      <div className="float-left">
        <label>{label()}</label>
      </div>

      <div className="float-right">
        <div>
          <button
            className="btn btn-primary calendar-today-btn mr-2"
            onClick={goToCurrent}
          >
            Today
            </button>
          <button className="btn calendar-prev-btn mr-1" onClick={goToBack}>
            <span className="simple-icon-arrow-left" />
          </button>
          <button className="btn calendar-next-btn" onClick={goToNext}>
            <span className="simple-icon-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default class ECommerceDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.ecommerce" />}
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
                      <IntlMessages id="dashboards.sales" />
                    </CardTitle>
                    <div className="dashboard-line-chart">
                      <LineShadow {...lineChartConfig} />
                    </div>
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
                  <IntlMessages id="dashboards.recent-orders" />
                </CardTitle>
                <div className="scroll dashboard-list-with-thumbs">
                  <PerfectScrollbar
                    option={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    {recentOrders.map((order, index) => {
                      return (
                        <div key={index} className="d-flex flex-row mb-3">
                          <NavLink
                            to="/app/layouts/details"
                            className="d-block position-relative"
                          >
                            <img
                              src={order.img}
                              alt={order.name}
                              className="list-thumbnail border-0"
                            />
                            <Badge
                              key={index}
                              className="position-absolute badge-top-right"
                              color={order.statusColor}
                              pill
                            >
                              {order.status}
                            </Badge>
                          </NavLink>

                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <NavLink to="/app/layouts/details">
                              <p className="list-item-heading">{order.name}</p>
                              <div className="pr-4">
                                <p className="text-muted mb-1 text-small">
                                  {order.descrition}
                                </p>
                              </div>
                              <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                                {order.createDate}
                              </div>
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
          <Colxx lg="4" md="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.product-categories" />
                </CardTitle>
                <div className="dashboard-donut-chart">
                  <DoughnutShadow {...doughnutChartConfig} />
                </div>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx lg="4" md="6" className="mb-4">
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
          <Colxx lg="4" md="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.tickets" />
                </CardTitle>
                <div className="dashboard-list-with-user">
                  <PerfectScrollbar
                    option={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    {tickets.map((ticket, index) => {
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
                                {ticket.date}
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
          <Colxx xl="6" lg="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.calendar" />
                </CardTitle>
                <BigCalendar
                  style={{ minHeight: "500px" }}
                  events={events}
                  views={["month"]}
                  components={{
                    toolbar: CustomToolbar
                  }}
                />
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="6" lg="12" className="mb-4">
            <Card className="h-100">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.best-sellers" />
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
      </Fragment>
    )
  }
}
