import React, { Component, Fragment } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  ButtonToolbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Row,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

import IntlMessages from "Util/IntlMessages";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import StateButton from "Components/StateButton";

export default class ButtonsUi extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessButtonClick = this.handleSuccessButtonClick.bind(this);
    this.handleFailButtonClick = this.handleFailButtonClick.bind(this);
    this.nestingToggle = this.nestingToggle.bind(this);
    this.verticalToggle = this.verticalToggle.bind(this);

    this.state = {
      nestingDropdownOpen: false,
      verticalDropdownOpen: false,
      checkedCheckboxes: [],
      selectedRadio: 0
    };
  }

  handleSuccessButtonClick() {
    return new Promise((success, fail) => {
      setTimeout(() => {
        success("Everything went right!");
      }, 2000);
    });
  }
  handleFailButtonClick() {
    return new Promise((success, fail) => {
      setTimeout(() => {
        fail("Something is wrong!");
      }, 2000);
    });
  }

  nestingToggle() {
    this.setState({
      nestingDropdownOpen: !this.state.nestingDropdownOpen
    });
  }

  verticalToggle() {
    this.setState({
      verticalDropdownOpen: !this.state.verticalDropdownOpen
    });
  }

  radioButtonSelect(i) {
    this.setState({ selectedRadio: i });
  }

  checkButtonCheck(i) {
    const index = this.state.checkedCheckboxes.indexOf(i);
    if (index === -1) {
      this.state.checkedCheckboxes.push(i);
    } else {
      this.state.checkedCheckboxes.splice(index, 1);
    }
    this.setState({ checkedCheckboxes: this.state.checkedCheckboxes });
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.buttons" />}
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
                  <IntlMessages id="button.rounded" />
                </CardTitle>
                <Button color="primary" className="mb-2">
                  <IntlMessages id="button.primary" />
                </Button>{" "}
                <Button color="secondary" className="mb-2">
                  <IntlMessages id="button.secondary" />
                </Button>{" "}
                <Button color="success" className="mb-2">
                  <IntlMessages id="button.success" />
                </Button>{" "}
                <Button color="info" className="mb-2">
                  <IntlMessages id="button.info" />
                </Button>{" "}
                <Button color="warning" className="mb-2">
                  <IntlMessages id="button.warning" />
                </Button>{" "}
                <Button color="danger" className="mb-2">
                  <IntlMessages id="button.danger" />
                </Button>{" "}
                <Button color="light" className="mb-2">
                  <IntlMessages id="button.light" />
                </Button>{" "}
                <Button color="dark" className="mb-2">
                  <IntlMessages id="button.dark" />
                </Button>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.outline" />
                </CardTitle>
                <Button outline color="primary" className="mb-2">
                  <IntlMessages id="button.primary" />
                </Button>{" "}
                <Button outline color="secondary" className="mb-2">
                  <IntlMessages id="button.secondary" />
                </Button>{" "}
                <Button outline color="success" className="mb-2">
                  <IntlMessages id="button.success" />
                </Button>{" "}
                <Button outline color="info" className="mb-2">
                  <IntlMessages id="button.info" />
                </Button>{" "}
                <Button outline color="warning" className="mb-2">
                  <IntlMessages id="button.warning" />
                </Button>{" "}
                <Button outline color="danger" className="mb-2">
                  <IntlMessages id="button.danger" />
                </Button>{" "}
                <Button outline color="light" className="mb-2">
                  <IntlMessages id="button.light" />
                </Button>{" "}
                <Button outline color="dark" className="mb-2">
                  <IntlMessages id="button.dark" />
                </Button>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.states" />
                </CardTitle>
                <p className="mb-1">
                  <IntlMessages id="button.states-text" />
                </p>
                <StateButton
                  id="successButton"
                  color="primary"
                  className="mb-3"
                  onClick={this.handleSuccessButtonClick}
                >
                  <IntlMessages id="button.click-here" />
                </StateButton>
                <p className="mb-1">
                  <IntlMessages id="button.states-text-alternate" />
                </p>
                <StateButton
                  id="failButton"
                  color="secondary"
                  className="mb-3"
                  onClick={this.handleFailButtonClick}
                >
                  <IntlMessages id="button.click-here" />
                </StateButton>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.sizes" />
                </CardTitle>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.large-button" />
                  </h6>
                  <Button color="primary" size="lg" className="mb-2">
                    <IntlMessages id="button.large-button" />
                  </Button>{" "}
                  <Button color="secondary" size="lg" className="mb-2">
                    <IntlMessages id="button.large-button" />
                  </Button>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.small-button" />
                  </h6>
                  <Button color="primary" size="sm" className="mb-2">
                    <IntlMessages id="button.small-button" />
                  </Button>{" "}
                  <Button color="secondary" size="sm" className="mb-2">
                    <IntlMessages id="button.small-button" />
                  </Button>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.extra-small-button" />
                  </h6>
                  <Button color="primary" size="xs" className="mb-2">
                    <IntlMessages id="button.extra-small-button" />
                  </Button>{" "}
                  <Button color="secondary" size="xs" className="mb-2">
                    <IntlMessages id="button.extra-small-button" />
                  </Button>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.block-button" />
                  </h6>
                  <Button color="primary" block className="mb-2">
                    <IntlMessages id="button.block-button" />
                  </Button>{" "}
                  <Button color="secondary" block className="mb-2">
                    <IntlMessages id="button.block-button" />
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.states" />
                </CardTitle>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.active" />
                  </h6>
                  <Button color="primary" href="#" className="mb-2">
                    <IntlMessages id="button.primary-link" />
                  </Button>{" "}
                  <Button color="secondary" href="#" className="mb-2">
                    <IntlMessages id="button.link" />
                  </Button>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.disabled" />
                  </h6>
                  <Button color="primary" disabled className="mb-2">
                    <IntlMessages id="button.primary-button" />
                  </Button>{" "}
                  <Button color="secondary" disabled className="mb-2">
                    <IntlMessages id="button.button" />
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.button-groups" />
                </CardTitle>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.basic" />
                  </h6>
                  <ButtonGroup className="mb-2">
                    <Button color="primary">
                      <IntlMessages id="button.left" />
                    </Button>
                    <Button color="primary">
                      <IntlMessages id="button.middle" />
                    </Button>
                    <Button color="primary">
                      <IntlMessages id="button.right" />
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.toolbar" />
                  </h6>
                  <ButtonToolbar>
                    <ButtonGroup className="mb-2 mr-1">
                      <Button color="primary">1</Button>
                      <Button color="primary">2</Button>
                      <Button color="primary">3</Button>
                      <Button color="primary">4</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mb-2 mr-1">
                      <Button color="primary">5</Button>
                      <Button color="primary">6</Button>
                      <Button color="primary">7</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mb-2">
                      <Button color="primary">8</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.sizes" />
                  </h6>
                  <ButtonGroup size="lg" className="mb-2 mr-1">
                    <Button color="primary">1</Button>
                    <Button color="primary">2</Button>
                  </ButtonGroup>
                  <ButtonGroup className="mb-2 mr-1">
                    <Button color="primary">1</Button>
                    <Button color="primary">2</Button>
                    <Button color="primary">3</Button>
                  </ButtonGroup>
                  <ButtonGroup size="sm" className="mb-2">
                    <Button color="primary">1</Button>
                    <Button color="primary">2</Button>
                    <Button color="primary">3</Button>
                  </ButtonGroup>
                </div>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.nesting" />
                </CardTitle>
                <ButtonGroup className="mb-2">
                  <Button>1</Button>
                  <Button>2</Button>
                  <ButtonDropdown
                    isOpen={this.state.nestingDropdownOpen}
                    toggle={this.nestingToggle}
                  >
                    <DropdownToggle caret>
                      <IntlMessages id="button.dropdown" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <IntlMessages id="button.dropdown-link" />
                      </DropdownItem>
                      <DropdownItem>
                        <IntlMessages id="button.dropdown-link" />
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.vertical-variation" />
                </CardTitle>
                <ButtonGroup vertical>
                  <Button className="default">1</Button>
                  <Button className="default">2</Button>
                  <ButtonDropdown
                    isOpen={this.state.verticalDropdownOpen}
                    toggle={this.verticalToggle}
                  >
                    <DropdownToggle caret className="default">
                    <IntlMessages id="button.dropdown" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                      <IntlMessages id="button.dropdown-link" />
                      </DropdownItem>
                      <DropdownItem>
                      <IntlMessages id="button.dropdown-link" />
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </CardBody>
            </Card>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.checkbox-radio-button" />
                </CardTitle>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.checkbox" />
                  </h6>
                  <Button
                    className="mb-2"
                    color="primary"
                    onClick={() => this.checkButtonCheck(1)}
                    active={this.state.checkedCheckboxes.indexOf(1) !== -1}
                  >
                    <IntlMessages id="button.checkbox" />
                  </Button>
                  <br />
                  <Button
                    outline
                    color="primary"
                    className="mb-2"
                    onClick={() => this.checkButtonCheck(2)}
                    active={this.state.checkedCheckboxes.indexOf(2) !== -1}
                  >
                    <IntlMessages id="button.checkbox" />
                  </Button>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2">
                    <IntlMessages id="button.radio-button" />
                  </h6>
                  <ButtonGroup>
                    <Button
                      color="primary"
                      onClick={() => this.radioButtonSelect(1)}
                      active={this.state.selectedRadio === 1}
                    >
                      <IntlMessages id="button.radio" />
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => this.radioButtonSelect(2)}
                      active={this.state.selectedRadio === 2}
                    >
                      <IntlMessages id="button.radio" />
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => this.radioButtonSelect(3)}
                      active={this.state.selectedRadio === 3}
                    >
                      <IntlMessages id="button.radio" />
                    </Button>
                  </ButtonGroup>
                </div>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="button.default" />
                </CardTitle>
                <Button color="primary" className="default mb-2">
                  <IntlMessages id="button.primary" />
                </Button>{" "}
                <Button color="secondary" className="default mb-2">
                  <IntlMessages id="button.secondary" />
                </Button>{" "}
                <Button color="success" className="default mb-2">
                  <IntlMessages id="button.success" />
                </Button>{" "}
                <Button color="info" className="default mb-2">
                  <IntlMessages id="button.info" />
                </Button>{" "}
                <Button color="warning" className="default mb-2">
                  <IntlMessages id="button.warning" />
                </Button>{" "}
                <Button color="danger" className="default mb-2">
                  <IntlMessages id="button.danger" />
                </Button>{" "}
                <Button color="light" className="default mb-2">
                  <IntlMessages id="button.light" />
                </Button>{" "}
                <Button color="dark" className="default mb-2">
                  <IntlMessages id="button.dark" />
                </Button>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
