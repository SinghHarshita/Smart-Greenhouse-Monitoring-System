import React, { Component, Fragment } from "react";
import {
  Container, Row, Card, CardBody, Pagination, Badge,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionNewsletter from "Components/LandingPage/SectionNewsletter";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import {landingPageMobileMenuToggle,landingPageMobileMenuClose} from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen} = landingPage;
  return { isMobileMenuOpen };
}

class Docs extends Component {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMobileMenuToggle(){
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu(){
    this.props.landingPageMobileMenuClose()
    return true;
  }
  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
  }

  onMenuClick(ref, event) {
    event.preventDefault();
    let scroller;
    if (ref !== "home") {
      scroller = scrollToComponent(this[ref], { align: 'top', offset: 60 });
      scroller.on('end', () => {
        this.headroom.unpin();
        this.props.landingPageMobileMenuClose();
      });
    } else {
      scrollToComponent(this[ref], { align: 'top'});
    }
  }

  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen?"landing-page show-mobile-menu":"landing-page"}>
        <MenuMultipageMobile  onUnmountingMenu={()=>this.onUnmountingMobileMenu()}></MenuMultipageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
            <MenuMultipage onMobileMenuToggle={()=>this.onMobileMenuToggle()}></MenuMultipage>
            </Headroom>

            <div className="content-container" ref={(x) => { this.home = x; }}>
              <div className="section home subpage">
                <Container>
                  <SubHero title={messages["lp.docs.title"]} detail={messages["lp.docs.detail"]} >
                    <div className="doc-search">
                      <input placeholder={messages["lp.docs.search"]} />
                      <span className="search-icon">
                        <i className="simple-icon-magnifier"></i>
                      </span>
                    </div>
                  </SubHero>
                  <Row>
                    <NavLink className="btn btn-circle btn-outline-semi-light hero-circle-button" to="#" onClick={(event) => this.onMenuClick("content", event)}>
                      <i className="simple-icon-arrow-down"></i>
                    </NavLink>
                  </Row>
                </Container>
              </div>

              <div className="section" ref={(x) => { this.content = x; }}>
                <Container>
                  <Row className="mt-5">
                    <Colxx xxs="12">

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink className="list-item-heading mb-1 w-60 w-xs-100" to="/docs-detail">
                              Getting Started with Dore Admin Theme
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">18.11.2018</p>
                            <div className="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                              <Badge pill color="secondary">BEGINNER</Badge>
                            </div>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink className="list-item-heading mb-1 w-60 w-xs-100" to="/docs-detail">
                              Plugins and Libraries
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">12.11.2018</p>
                            <div className="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                              <Badge pill color="secondary">BEGINNER</Badge>
                            </div>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink className="list-item-heading mb-1 w-60 w-xs-100" to="/docs-detail">
                              Menu Types and Usage
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">04.11.2018</p>
                            <div className="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                              <Badge pill color="secondary">BEGINNER</Badge>
                            </div>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink className="list-item-heading mb-1 w-60 w-xs-100" to="/docs-detail">
                              File Structure
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">04.11.2018</p>
                            <div className="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                              <Badge pill color="secondary">BEGINNER</Badge>
                            </div>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink className="list-item-heading mb-1 w-60 w-xs-100" to="/docs-detail">
                              Api Integrations
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">27.10.2018</p>
                            <div className="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                              <Badge pill color="primary">ADVANCED</Badge>
                            </div>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink className="list-item-heading mb-1 w-60 w-xs-100" to="/docs-detail">
                              Applications and Layouts
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">22.10.2018</p>
                            <div className="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                              <Badge pill color="primary">ADVANCED</Badge>
                            </div>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink className="list-item-heading mb-1 w-60 w-xs-100" to="/docs-detail">
                              Colors and Theming Options
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">16.10.2018</p>
                            <div className="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                              <Badge pill color="primary">ADVANCED</Badge>
                            </div>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink className="list-item-heading mb-1 w-60 w-xs-100" to="/docs-detail">
                              Bootstrap Xxs and Xxl Classes
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">17.10.2018</p>
                            <div className="w-20 w-xs-100 align-self-center d-flex justify-content-start justify-content-md-end">
                              <Badge pill color="primary">ADVANCED</Badge>
                            </div>
                          </CardBody>
                        </div>
                      </Card>

                    </Colxx>
                  </Row>

                  <Row>
                    <Colxx xxs="12" className="text-center mt-5 mb-5">
                      <Pagination aria-label="Page navigation example" listClassName="justify-content-center">
                        <PaginationItem>
                          <PaginationLink className="first" href="#">
                            <i className="simple-icon-control-start" />
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="prev" href="#">
                            <i className="simple-icon-arrow-left" />
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="next" href="#">
                            <i className="simple-icon-arrow-right" />
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink className="last" href="#">
                            <i className="simple-icon-control-end" />
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </Colxx>
                  </Row>
                </Container>
              </div>


              <div className="section background background-no-bottom mb-0">
                <Container>
                  <SectionNewsletter />
                </Container>
              </div>

              <div className="section footer mb-0">
                <Footer onClick={this.onMenuClick} />
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, {landingPageMobileMenuToggle,landingPageMobileMenuClose})(injectIntl(Docs))
