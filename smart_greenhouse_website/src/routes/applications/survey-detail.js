import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  Button,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  ButtonDropdown,
  FormGroup,
  CustomInput,
  Progress,
  CardTitle
} from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import SurveyQuestionBuilder from "Components/SurveyQuestionBuilder";
import Sortable from "react-sortablejs";
import { mapOrder } from "Util/Utils";
import ApplicationMenu from "Components/ApplicationMenu";
import PerfectScrollbar from "react-perfect-scrollbar";

import { connect } from "react-redux";
import {
    getSurveyDetail,
    deleteSurveyQuestion,
    saveSurvey
    
} from "Redux/actions";


import {
  DoughnutShadow
} from "Components/Charts";
import {
  doughnutChartConfig
} from "Constants/chartConfig";

import { ThemeColors } from "Util/ThemeColors";


const colors = ThemeColors();

const surveyData=[];
const ageChartData = {
  ...doughnutChartConfig,
  data: {
    labels: ["12-24", "24-30", "30-40", "40-50", "50-60"],
    datasets: [
      {
        label: "",
        borderColor: [
          colors.themeColor1,
          colors.themeColor2,
          colors.themeColor3,
          colors.themeColor4,
          colors.themeColor5
        ],
        backgroundColor: [
          colors.themeColor1_10,
          colors.themeColor2_10,
          colors.themeColor3_10,
          colors.themeColor4_10,
          colors.themeColor5_10
        ],
        borderWidth: 2,
        data: [15, 25, 20, 30, 14]
      }
    ]
  }
};
const genderChartData = {
  ...doughnutChartConfig,
  data: {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "",
        borderColor: [
          colors.themeColor1,
          colors.themeColor2,
          colors.themeColor3
        ],
        backgroundColor: [
          colors.themeColor1_10,
          colors.themeColor2_10,
          colors.themeColor3_10
        ],
        borderWidth: 2,
        data: [85, 45, 20]
      }
    ]
  }
};
const workChartData = {
  ...doughnutChartConfig,
  data: {
    labels: [
      "Employed for wages",
      "Self-employed",
      "Looking for work",
      "Retired"
    ],
    datasets: [
      {
        label: "",
        borderColor: [
          colors.themeColor1,
          colors.themeColor2,
          colors.themeColor3,
          colors.themeColor4
        ],
        backgroundColor: [
          colors.themeColor1_10,
          colors.themeColor2_10,
          colors.themeColor3_10,
          colors.themeColor4_10
        ],
        borderWidth: 2,
        data: [15, 25, 20, 8]
      }
    ]
  }
};
const codingChartData = {
  ...doughnutChartConfig,
  data: {
    labels: ["Python", "JavaScript", "PHP", "Java", "C#"],
    datasets: [
      {
        label: "",
        borderColor: [
          colors.themeColor1,
          colors.themeColor2,
          colors.themeColor3,
          colors.themeColor4,
          colors.themeColor5
        ],
        backgroundColor: [
          colors.themeColor1_10,
          colors.themeColor2_10,
          colors.themeColor3_10,
          colors.themeColor4_10,
          colors.themeColor4_10
        ],
        borderWidth: 2,
        data: [15, 25, 20, 8, 25]
      }
    ]
  }
};

 class SurveyDetailApplication extends Component {
  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      activeFirstTab: "1",
      dropdownSplitOpen: false,
      surveyData: surveyData
    };
  }
  componentDidMount() {
    this.props.getSurveyDetail();
}

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab
      });
    }
  }

  toggleSplit() {
    this.setState(prevState => ({
      dropdownSplitOpen: !prevState.dropdownSplitOpen
    }));
  }

  addQuestion() {
    const { survey} = this.props.surveyDetailApp;

    var nextId = 0;
    if (survey.questions.length > 0) {
      var ordered =survey.questions.slice().sort((a, b) => {
        return a.id < b.id;
      });
      nextId = ordered[0].id + 1;
    }
    const newSurvey = Object.assign({},survey);
    newSurvey.questions.push( { id: nextId })
    this.props.saveSurvey(newSurvey)
  }

  handleSortChange(order,sortable,evt){
    const {survey} = this.props.surveyDetailApp;
    var ordered_array = mapOrder(
      survey.questions,
      order,
      "id"
    );
    this.props.saveSurvey(ordered_array)
  }

  deleteQuestion(id) {
    this.props.deleteSurveyQuestion(id,this.props.surveyDetailApp.survey)
  }

  render() {
    const {
      survey,
      loading

  } = this.props.surveyDetailApp;

    return (
      <Fragment>
        <Row className="app-row survey-app">
          <Colxx xxs="12">
            <h1>
              <i className="simple-icon-refresh heading-icon" /> <span className="align-middle d-inline-block pt-1">Developer Survey</span>              
            </h1>
            <div className="float-sm-right mb-2">
              <ButtonDropdown
                className="top-right-button top-right-button-single"
                isOpen={this.state.dropdownSplitOpen}
                toggle={this.toggleSplit}
              >
                <Button
                  outline
                  className="flex-grow-1"
                  size="lg"
                  color="primary"
                >
                  SAVE
                </Button>
                <DropdownToggle
                  size="lg"
                  className="pr-4 pl-4"
                  caret
                  outline
                  color="primary"
                />
                <DropdownMenu right>
                  <DropdownItem header>
                    <IntlMessages id="survey.delete" />
                  </DropdownItem>
                  <DropdownItem disabled>
                  <IntlMessages id="survey.edit" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>

            <BreadcrumbItems match={this.props.match} />
            {loading ?
            <Fragment>
            <Nav tabs className="separator-tabs ml-0 mb-5">
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeFirstTab === "1",
                    "nav-link": true
                  })}
                  onClick={() => {
                    this.toggleTab("1");
                  }}
                  to="#"
                >
                  DETAILS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeFirstTab === "2",
                    "nav-link": true
                  })}
                  onClick={() => {
                    this.toggleTab("2");
                  }}
                  to="#"
                >
                  RESULTS
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeFirstTab}>
              <TabPane tabId="1">
   
                <Row>
                  <Colxx xxs="12" lg="4" className="mb-4">
                    <Card className="mb-4">
                      <CardBody>
                        <p className="list-item-heading mb-4">Summary</p>
                        <p className="text-muted text-small mb-2">Name</p>
                        <p className="mb-3">{survey.title}</p>

                        <p className="text-muted text-small mb-2">Details</p>
                        <p className="mb-3" dangerouslySetInnerHTML={{ __html: survey.detail }}/>

                        <p className="text-muted text-small mb-2">Category</p>
                        <p className="mb-3">{survey.category}</p>

                        <p className="text-muted text-small mb-2">Label</p>
                        <div>
                          <p className="d-sm-inline-block mb-1">
                          <Badge color={survey.labelColor} pill>{survey.label}</Badge>
                          </p>
                          <p className="d-sm-inline-block  mb-1" />
                        </div>
                      </CardBody>
                    </Card>
                  </Colxx>

                  <Colxx xxs="12" lg="8">
                    <ul className="list-unstyled mb-4">
                        {survey.questions.map((item, index) => {
                          return (
                            <li data-id={item.id} key={item.id}>
                              <SurveyQuestionBuilder
                                order={index}
                                {...item}
                                expanded={!item.title && true}
                                deleteClick={id => {
                                  this.deleteQuestion(id);
                                }}
                              />
                            </li>
                          );
                        })}
                    </ul>

                    <div className="text-center">
                      <Button
                        outline
                        color="primary"
                        className="mt-3"
                        onClick={() => this.addQuestion()}
                      >
                        <i className="simple-icon-plus btn-group-icon" /> Add
                        Question
                      </Button>
                    </div>
                  </Colxx>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Colxx xxs="12" lg="4">
                    <Card className="mb-4">
                      <CardBody>
                        <p className="list-item-heading mb-4">Quota</p>

                        <div className="mb-4">
                          <p className="mb-2">Gender</p>

                          <Progress multi className="mb-3">
                            <Progress bar value="60" />
                            <Progress bar color="theme-2" value="40" />
                          </Progress>

                          <table className="table table-sm table-borderless">
                            <tbody>
                              <tr>
                                <td className="p-0 pb-1 w-10">
                                  <span className="log-indicator border-theme-1 align-middle" />
                                </td>
                                <td className="p-0 pb-1">
                                  <span className="font-weight-medium text-muted text-small">
                                    105/125 Male
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0 pb-1 w-10">
                                  <span className="log-indicator border-theme-2 align-middle" />
                                </td>
                                <td className="p-0 pb-1">
                                  <span className="font-weight-medium text-muted text-small">
                                    90/125 Female
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="mb-4">
                          <p className="mb-2">Education</p>
                          <Progress multi className="mb-3">
                            <Progress bar value="80" />
                            <Progress bar color="theme-2" value="20" />
                          </Progress>

                          <table className="table table-sm table-borderless">
                            <tbody>
                              <tr>
                                <td className="p-0 pb-1 w-10">
                                  <span className="log-indicator border-theme-1 align-middle" />
                                </td>
                                <td className="p-0 pb-1">
                                  <span className="font-weight-medium text-muted text-small">
                                    139/125 College
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0 pb-1 w-10">
                                  <span className="log-indicator border-theme-2 align-middle" />
                                </td>
                                <td className="p-0 pb-1">
                                  <span className="font-weight-medium text-muted text-small">
                                    95/125 High School
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="mb-4">
                          <p className="mb-2">Age</p>
                          <Progress multi className="mb-3">
                            <Progress bar value="35" />
                            <Progress bar color="theme-2" value="25" />
                            <Progress bar color="theme-3" value="40" />
                          </Progress>

                          <table className="table table-sm table-borderless">
                            <tbody>
                              <tr>
                                <td className="p-0 pb-1 w-10">
                                  <span className="log-indicator border-theme-1 align-middle" />
                                </td>
                                <td className="p-0 pb-1">
                                  <span className="font-weight-medium text-muted text-small">
                                    50/75 18-24
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0 pb-1 w-10">
                                  <span className="log-indicator border-theme-2 align-middle" />
                                </td>
                                <td className="p-0 pb-1">
                                  <span className="font-weight-medium text-muted text-small">
                                    40/75 24-30
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0 pb-1 w-10">
                                  <span className="log-indicator border-theme-3 align-middle" />
                                </td>
                                <td className="p-0 pb-1">
                                  <span className="font-weight-medium text-muted text-small">
                                    60/75 30-40
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardBody>
                    </Card>
                  </Colxx>

                  <Colxx xxs="12" lg="8">
                    <Card className="mb-4">
                      <CardBody>
                        <CardTitle>How old are you?</CardTitle>
                        <div className="chart-container">
                          <DoughnutShadow {...ageChartData} />
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="mb-4">
                      <CardBody>
                        <CardTitle>What is your gender?</CardTitle>
                        <div className="chart-container">
                          <DoughnutShadow {...genderChartData} />
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="mb-4">
                      <CardBody>
                        <CardTitle>What is your employment status?</CardTitle>
                        <div className="chart-container">
                          <DoughnutShadow {...workChartData} />
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="mb-4">
                      <CardBody>
                        <CardTitle>
                          What programming languages do you use?
                        </CardTitle>
                        <div className="chart-container">
                          <DoughnutShadow {...codingChartData} />
                        </div>
                      </CardBody>
                    </Card>
                  </Colxx>
                </Row>
              </TabPane>
            </TabContent>
            </Fragment>
             :<div className="loading"></div>
            }
          </Colxx>
        </Row>

        <ApplicationMenu>
          <PerfectScrollbar
            option={{ suppressScrollX: true, wheelPropagation: false }}
          >
            <div className="p-4">
              <p className="text-muted text-small">Status</p>
              <ul className="list-unstyled mb-5">
                <li className="active">
                  <NavLink to="#">
                    <i className="simple-icon-refresh" />
                    Active Surveys
                    <span className="float-right">12</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i className="simple-icon-check" />
                    Completed Surveys
                    <span className="float-right">24</span>{" "}
                  </NavLink>
                </li>
              </ul>

              <p className="text-muted text-small">Categories</p>
              <FormGroup className="mb-5">
                <CustomInput
                  type="checkbox"
                  id="developmentCheck"
                  label="Development"
                  className="mb-2"
                />
                <CustomInput
                  type="checkbox"
                  id="workplaceCheck"
                  className="mb-2"
                  label="Workplace"
                />
                <CustomInput
                  type="checkbox"
                  id="hardwareCheck"
                  className="mb-2"
                  label="Hardware"
                />
              </FormGroup>

              <p className="text-muted text-small">Labels</p>
              <div>
                <NavLink to="#">
                  <Badge className="mb-1" color="outline-primary" pill>
                    NEW FRAMEWORK
                  </Badge>{" "}
                </NavLink>

                <NavLink to="#">
                  <Badge className="mb-1" color="outline-secondary" pill>
                    EDUCATION
                  </Badge>{" "}
                </NavLink>
                <NavLink to="#">
                  <Badge className="mb-1" color="outline-dark" pill>
                    PERSONAL
                  </Badge>{" "}
                </NavLink>
              </div>
            </div>
          </PerfectScrollbar>
        </ApplicationMenu>
     
    </Fragment>
    );
  }
}

const mapStateToProps = ({  surveyDetailApp }) => {
  return {
      surveyDetailApp
  };
};
export default connect(
  mapStateToProps,
  {
      getSurveyDetail,
      deleteSurveyQuestion,
      saveSurvey
  }
)(SurveyDetailApplication);
