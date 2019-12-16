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
  Progress,
  CardHeader
} from "reactstrap";
import {
  PolarShadow,
  LineShadow,
  SmallLineChart,
  RadarShadow,
  DoughnutShadow
} from "Components/Charts";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import Sortable from "react-sortablejs";
import CircularProgressbar from "react-circular-progressbar";
import "chartjs-plugin-datalabels";
import "react-circular-progressbar/dist/styles.css";

import {
  visitChartConfig,
  conversionChartConfig,
  lineChartConfig,
  polarChartConfig,
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4,
  doughnutChartConfig,
  radarChartConfig
} from "Constants/chartConfig";

import profileStatusData from "Data/dashboard.profile.status.json";
const profileStatuses = profileStatusData.data;

export default class AnalyticsDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.analytics" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
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
          <Colxx xl="4" lg="6" md="12" className="mb-4">
            <Card className="h-100">
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
          <Colxx xl="4" lg="6" md="12" className="mb-4">
            <Card className="dashboard-progress">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.profile-status" />
                </CardTitle>
                {profileStatuses.map((s, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <p className="mb-2">
                        {s.title}
                        <span className="float-right text-muted">
                          {s.status}/{s.total}
                        </span>
                      </p>
                      <Progress value={(s.status / s.total) * 100} />
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="4" lg="12" md="12">
            <Row>
              <Colxx xxs="6" className="mb-4">
                <Card className="dashboard-small-chart-analytics">
                  <CardBody>
                    <SmallLineChart {...smallChartData1} />
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx xxs="6" className="mb-4">
                <Card className="dashboard-small-chart-analytics">
                  <CardBody>
                    <SmallLineChart {...smallChartData2} />
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx xxs="6" className="mb-4">
                <Card className="dashboard-small-chart-analytics">
                  <CardBody>
                    <SmallLineChart {...smallChartData3} />
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx xxs="6" className="mb-4">
                <Card className="dashboard-small-chart-analytics">
                  <CardBody>
                    <SmallLineChart {...smallChartData4} />
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Colxx>
        </Row>

        <Sortable
          options={{
            handle: ".handle"
          }}
          className="row"
        >
          <Colxx xl="3" lg="6" className="mb-4">
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.payment-status" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={64}
                    text={"64%"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="3" lg="6" className="mb-4">
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.work-progress" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={75}
                    text={"75%"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="3" lg="6" className="mb-4">
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.tasks-completed" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={32}
                    text={"32%"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="3" lg="6" className="mb-4">
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.payments-done" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={60}
                    text={"45%"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Sortable>

        <Row>
          <Colxx xxs="12" lg="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.order-stock" />
                </CardTitle>
                <div className="chart-container">
                  <RadarShadow {...radarChartConfig} />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="12" lg="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.categories" />
                </CardTitle>
                <div className="chart-container">
                  <PolarShadow {...polarChartConfig} />
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12" className="mb-4">
            <Card>
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
      </Fragment>
    );
  }
}
