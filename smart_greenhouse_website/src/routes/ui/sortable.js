import React, { Component, Fragment } from "react";
import { Row, Card, CardBody } from "reactstrap";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import Sortable from "react-sortablejs";
import IntlMessages from "Util/IntlMessages";

export default class SortableUi extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.sortable" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12">
            <h5 className="mb-4">
              <IntlMessages id="sortable.columns" />
            </h5>

            <Sortable className="row icon-cards-row mb-2">
              <Colxx xxs="6" sm="4" md="3" className="mb-4">
                <Card>
                  <CardBody className="text-center">
                    <i className="iconsmind-Alarm" />
                    <p className="card-text font-weight-semibold mb-0">
                      Pending Orders
                    </p>
                    <p className="lead text-center">14</p>
                  </CardBody>
                </Card>
              </Colxx>

              <Colxx xxs="6" sm="4" md="3" className="mb-4">
                <Card>
                  <CardBody className="text-center">
                    <i className="iconsmind-Basket-Coins" />
                    <p className="card-text font-weight-semibold mb-0">
                      Completed Orders
                    </p>
                    <p className="lead text-center">32</p>
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx xxs="6" sm="4" md="3" className="mb-4">
                <Card>
                  <CardBody className="text-center">
                    <i className="iconsmind-Arrow-Refresh" />
                    <p className="card-text font-weight-semibold mb-0">
                      Refund Requests
                    </p>
                    <p className="lead text-center">74</p>
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx xxs="6" sm="4" md="3" className="mb-4">
                <Card>
                  <CardBody className="text-center">
                    <i className="iconsmind-Mail-Read" />
                    <p className="card-text font-weight-semibold mb-0">
                      New Comments
                    </p>
                    <p className="lead text-center">25</p>
                  </CardBody>
                </Card>
              </Colxx>
            </Sortable>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12">
            <h5 className="mb-4">
              <IntlMessages id="sortable.basic" />
            </h5>

            <Card className="mb-4">
              <CardBody>
                <Sortable tag="ul" className="list-unstyled">
                  <li>
                    <p>1. Angel Cake</p>
                  </li>
                  <li>
                    <p>2. Bibingka</p>
                  </li>
                  <li>
                    <p>3. Cremeschnitte</p>
                  </li>
                  <li>
                    <p>4. Faworki</p>
                  </li>
                </Sortable>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12">
            <h5 className="mb-4">
              <IntlMessages id="sortable.handles" />
            </h5>
            <Card className="mb-4">
              <CardBody>
                <Sortable
                  tag="ul"
                  className="list-unstyled"
                  options={{
                    handle: ".handle"
                  }}
                >
                  <li>
                    <p>
                      <span className="badge badge-pill badge-secondary handle mr-1">
                        <i className="simple-icon-cursor-move" />
                      </span>
                      <span>Angel Cake</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="badge badge-pill badge-secondary handle mr-1">
                      <i className="simple-icon-cursor-move" />
                      </span>
                      Bibingka
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="badge badge-pill badge-secondary handle mr-1">
                      <i className="simple-icon-cursor-move" />
                      </span>
                      Cremeschnitte
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="badge badge-pill badge-secondary handle mr-1">
                      <i className="simple-icon-cursor-move" />
                      </span>
                      Faworki
                    </p>
                  </li>
                </Sortable>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
