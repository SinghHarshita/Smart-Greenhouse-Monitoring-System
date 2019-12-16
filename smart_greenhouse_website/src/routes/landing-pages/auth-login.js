import React, { Component, Fragment } from "react";
import { Container, Row, Button, Label, Input, Form } from "reactstrap";
import { MenuSinglepage, MenuSinglepageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";

import { connect } from "react-redux";
import {landingPageMobileMenuToggle,landingPageMobileMenuClose} from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen} = landingPage;
  return { isMobileMenuOpen };
}

class AuthLogin extends Component {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
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
  onMobileMenuToggle(){
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu(){
    this.props.landingPageMobileMenuClose()
    return true;
  }
  onResizeLandingPage() {
    var rowOffestHome = document.querySelector(".home-row").offsetLeft;
    document.querySelector(".landing-page .section.home").style.backgroundPositionX=rowOffestHome - 270 + "px";
}
  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
    this.onResizeLandingPage()
    window.addEventListener("resize", this.onResizeLandingPage, true);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeLandingPage, true);
}

  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen?"landing-page show-mobile-menu":"landing-page"}>
        <MenuSinglepageMobile  onUnmountingMenu={()=>this.onUnmountingMobileMenu()}></MenuSinglepageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
            <MenuSinglepage onMobileMenuToggle={()=>this.onMobileMenuToggle()}></MenuSinglepage>
            </Headroom>

            <div className="content-container" ref={(x) => { this.home = x; }}>

              <div className="section home subpage-long">
                <Container>
                  <Row className="home-row mb-0">
                    <Colxx xxs="12" lg="6" xl="4" md="12">
                      <div className="home-text">
                        <div className="display-1">
                          <IntlMessages id="lp.login.title" />
                        </div>
                        <p className="white mb-5">
                          <IntlMessages id="lp.login.detail-1" /><br />
                          <IntlMessages id="lp.login.detail-2" />{" "}
                          <NavLink className="white-underline-link" to="/auth-register">
                            <IntlMessages id="lp.login.register" />.
                          </NavLink>
                        </p>

                        <Form className="dark-background">

                          <Label className="form-group has-top-label">
                            <Input type="email" />
                            <IntlMessages id="lp.login.email" />
                          </Label>

                          <Label className="form-group has-top-label">
                            <Input type="password" />
                            <IntlMessages id="lp.login.password" />
                          </Label>

                          <Button color="empty" className="btn-outline-semi-light mt-4" size="xl" href="/app/dashboards/default">
                            {messages["lp.login.buttonlabel"]}
                          </Button>

                        </Form>
                      </div>
                    </Colxx>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, {landingPageMobileMenuToggle,landingPageMobileMenuClose})(injectIntl(AuthLogin))