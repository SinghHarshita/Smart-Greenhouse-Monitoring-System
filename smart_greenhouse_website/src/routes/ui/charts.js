import React, { Component, Fragment } from "react";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ChartComponent, { Chart } from "react-chartjs-2";
import {
  PolarShadow,
  LineShadow,
  ScatterShadow,
  BarShadow,
  RadarShadow,
  PieShadow,
  DoughnutShadow
} from "Components/Charts";
import {
  lineChartConfig,
  polarChartConfig,
  barChartConfig,
  scatterChartConfig,
  areaChartConfig,
  radarChartConfig,
  pieChartConfig,
  doughnutChartConfig
} from "Constants/chartConfig";



export default class ChartsUi extends Component {
  componentWillMount() {
    Chart.defaults.polarWithShadow = Chart.defaults.polarArea;
    Chart.controllers.polarWithShadow = Chart.controllers.polarArea.extend({
      draw: function (ease) {
        Chart.controllers.radar.prototype.draw.call(this, ease);
        let ctx = this.chart.chart.ctx;
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.2)";
        ctx.shadowBlur = 7;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 7;
        ctx.responsive = true;
        Chart.controllers.radar.prototype.draw.apply(this, arguments);
        ctx.restore();
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.charts" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.line" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <LineShadow {...lineChartConfig} />
                    </div>
                  </Colxx>

                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ChartComponent type="line" {...lineChartConfig} />
                    </div>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="charts.polar" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <PolarShadow {...polarChartConfig} />
                    </div>
                  </Colxx>

                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ChartComponent type="polarArea" {...polarChartConfig} />
                    </div>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                <IntlMessages id="charts.area" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <LineShadow {...areaChartConfig} />
                    </div>
                  </Colxx>

                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ChartComponent type="line" {...areaChartConfig} />
                    </div>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                <IntlMessages id="charts.scatter" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ScatterShadow {...scatterChartConfig} />
                    </div>
                  </Colxx>

                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ChartComponent type="scatter" {...scatterChartConfig} />
                    </div>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                <IntlMessages id="charts.bar" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <BarShadow {...barChartConfig} />
                    </div>
                  </Colxx>

                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ChartComponent type="bar" {...barChartConfig} />
                    </div>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                <IntlMessages id="charts.radar" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <RadarShadow {...radarChartConfig} />
                    </div>
                  </Colxx>

                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ChartComponent type="radar" {...radarChartConfig} />
                    </div>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                <IntlMessages id="charts.pie" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <PieShadow {...pieChartConfig} />
                    </div>
                  </Colxx>

                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ChartComponent type="pie" {...pieChartConfig} />
                    </div>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                <IntlMessages id="charts.doughnut" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <DoughnutShadow {...doughnutChartConfig} />
                    </div>
                  </Colxx>

                  <Colxx xxs="12" lg="6" className="mb-5">
                    <CardSubtitle>
                      <IntlMessages id="charts.no-shadow" />
                    </CardSubtitle>
                    <div className="chart-container">
                      <ChartComponent
                        type="doughnut"
                        {...doughnutChartConfig}
                      />
                    </div>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
