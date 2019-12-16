import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Alert,
  UncontrolledAlert,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle
} from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import {  NotificationManager} from "Components/ReactNotifications";

export default class AlertsUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  createNotification = (type, className) => {
    let cName = className || "";
    return () => {
      switch (type) {
        case "primary":
          NotificationManager.primary(
            "This is a notification!",
            "Primary Notification",
            3000,
            null,
            null,
            cName
          );
          break;
        case "secondary":
          NotificationManager.secondary(
            "This is a notification!",
            "Secondary Notification",
            3000,
            null,
            null,
            cName
          );
          break;
        case "info":
          NotificationManager.info("Info message", "", 3000, null, null, cName);
          break;
        case "success":
          NotificationManager.success(
            "Success message",
            "Title here",
            3000,
            null,
            null,
            cName
          );
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000,
            null,
            null,
            cName
          );
          break;
        case "error":
          NotificationManager.error(
            "Error message",
            "Click me!",
            5000,
            () => {
              alert("callback");
            },
            null,
            cName
          );
          break;
        default:
          NotificationManager.info("Info message");
          break;
      }
    };
  };

  onDismiss() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.alerts" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="alert.react-notifications" />
                </CardTitle>
                <CardSubtitle>
                  <IntlMessages id="alert.outline" />
                </CardSubtitle>
                <Button
                  outline
                  className="mb-3"
                  color="primary"
                  onClick={this.createNotification("primary")}
                >
                  <IntlMessages id="alert.primary" />
                </Button>{" "}
                <Button
                  outline
                  className="mb-3"
                  color="secondary"
                  onClick={this.createNotification("secondary")}
                >
                  <IntlMessages id="alert.secondary" />
                </Button>{" "}
                <Button
                  outline
                  className="mb-3"
                  color="info"
                  onClick={this.createNotification("info")}
                >
                  <IntlMessages id="alert.info" />
                </Button>{" "}
                <Button
                  outline
                  className="mb-3"
                  color="success"
                  onClick={this.createNotification("success")}
                >
                  <IntlMessages id="alert.success" />
                </Button>{" "}
                <Button
                  outline
                  className="mb-3"
                  color="warning"
                  onClick={this.createNotification("warning")}
                >
                  <IntlMessages id="alert.warning" />
                </Button>{" "}
                <Button
                  outline
                  className="mb-3"
                  color="danger"
                  onClick={this.createNotification("error")}
                >
                  <IntlMessages id="alert.error" />
                </Button>
                <CardSubtitle>
                  <IntlMessages id="alert.filled" />
                </CardSubtitle>
                <Button
                  className="mb-3"
                  color="primary"
                  onClick={this.createNotification("primary", "filled")}
                >
                  <IntlMessages id="alert.primary" />
                </Button>{" "}
                <Button
                  className="mb-3"
                  color="secondary"
                  onClick={this.createNotification("secondary", "filled")}
                >
                  <IntlMessages id="alert.secondary" />
                </Button>{" "}
                <Button
                  className="mb-3"
                  color="info"
                  onClick={this.createNotification("info", "filled")}
                >
                  <IntlMessages id="alert.info" />
                </Button>{" "}
                <Button
                  className="mb-3"
                  color="success"
                  onClick={this.createNotification("success", "filled")}
                >
                  <IntlMessages id="alert.success" />
                </Button>{" "}
                <Button
                  className="mb-3"
                  color="warning"
                  onClick={this.createNotification("warning", "filled")}
                >
                  <IntlMessages id="alert.warning" />
                </Button>{" "}
                <Button
                  className="mb-3"
                  color="danger"
                  onClick={this.createNotification("error", "filled")}
                >
                  <IntlMessages id="alert.error" />
                </Button>
              
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="alert.rounded" />
                </CardTitle>
                <Alert color="primary" className="rounded">
                  <IntlMessages id="alert.primary-text" />
                </Alert>
                <Alert color="secondary" className="rounded">
                  <IntlMessages id="alert.secondary-text" />
                </Alert>
                <Alert color="success" className="rounded">
                  <IntlMessages id="alert.success-text" />
                </Alert>
                <Alert color="danger" className="rounded">
                  <IntlMessages id="alert.danger-text" />
                </Alert>
                <Alert color="warning" className="rounded">
                  <IntlMessages id="alert.warning-text" />
                </Alert>
                <Alert color="info" className="rounded">
                  <IntlMessages id="alert.info-text" />
                </Alert>
                <Alert color="light" className="rounded">
                  <IntlMessages id="alert.light-text" />
                </Alert>
                <Alert color="dark" className="rounded">
                  <IntlMessages id="alert.dark-text" />
                </Alert>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="alert.default" />
                </CardTitle>
                <Alert color="primary">
                  <IntlMessages id="alert.primary-text" />
                </Alert>
                <Alert color="secondary">
                  <IntlMessages id="alert.secondary-text" />
                </Alert>
                <Alert color="success">
                  <IntlMessages id="alert.success-text" />
                </Alert>
                <Alert color="danger">
                  <IntlMessages id="alert.danger-text" />
                </Alert>
                <Alert color="warning">
                  <IntlMessages id="alert.warning-text" />
                </Alert>
                <Alert color="info">
                  <IntlMessages id="alert.info-text" />
                </Alert>
                <Alert color="light">
                  <IntlMessages id="alert.light-text" />
                </Alert>
                <Alert color="dark">
                  <IntlMessages id="alert.dark-text" />
                </Alert>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="alert.dismissing" />
                </CardTitle>
                <Alert
                  color="warning"
                  className="rounded"
                  isOpen={this.state.visible}
                  toggle={this.onDismiss}
                >
                  <IntlMessages id="alert.dismissing-text" />
                </Alert>
                <UncontrolledAlert color="warning" fade={false}>
                  <IntlMessages id="alert.dismissing-without-animate-text" />
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
