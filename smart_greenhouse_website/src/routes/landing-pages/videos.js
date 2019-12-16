import React, { Component, Fragment } from "react";
import {
  Container, Row, Card, CardBody, Pagination,
  PaginationItem,
  PaginationLink,
  Badge
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

class Videos extends Component {
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
                <SubHero title={messages["lp.videos.title"]} detail={messages["lp.videos.detail"]} >
                  <div className="doc-search">
                    <input placeholder={messages["lp.videos.search"]} />
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
                    <Colxx xxs="12" sm="6" lg="3" className="mb-5">
                      <Card>
                        <div className="position-relative">
                          <NavLink to="/video-detail" className="video-play-icon">
                            <span></span>
                          </NavLink>
                          <img className="card-img-top" src="/assets/img/landing-page/values-1.jpg" alt="Card cap" />
                          <Badge pill color="primary" className="position-absolute badge-top-left">BEGINNER</Badge>
                        </div>
                        <CardBody>
                          <NavLink to="/video-detail">
                            <h6 className="mb-4 video-heading ellipsis">Getting Started with Dore Admin Theme</h6>
                          </NavLink>
                          <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">17.11.2018</p>
                          </footer>
                        </CardBody>
                      </Card>
                    </Colxx>

                    <Colxx xxs="12" sm="6" lg="3" className="mb-5">
                      <Card>
                        <div className="position-relative">
                          <NavLink to="/video-detail" className="video-play-icon">
                            <span></span>
                          </NavLink>
                          <img className="card-img-top" src="/assets/img/landing-page/values-2.jpg" alt="Card cap" />
                          <Badge pill color="primary" className="position-absolute badge-top-left">BEGINNER</Badge>
                        </div>
                        <CardBody>
                          <NavLink to="/video-detail">
                            <h6 className="mb-4 video-heading ellipsis">Plugins and Libraries</h6>
                          </NavLink>
                          <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">17.10.2018</p>
                          </footer>
                        </CardBody>
                      </Card>
                    </Colxx>

                    <Colxx xxs="12" sm="6" lg="3" className="mb-5">
                      <Card>
                        <div className="position-relative">
                          <NavLink to="/video-detail" className="video-play-icon">
                            <span></span>
                          </NavLink>
                          <img className="card-img-top" src="/assets/img/landing-page/values-3.jpg" alt="Card cap" />
                          <Badge pill color="primary" className="position-absolute badge-top-left">BEGINNER</Badge>
                        </div>
                        <CardBody>
                          <NavLink to="/video-detail">
                            <h6 className="mb-4 video-heading ellipsis">Menu Types and Usage</h6>
                          </NavLink>
                          <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">14.10.2018</p>
                          </footer>
                        </CardBody>
                      </Card>
                    </Colxx>

                    <Colxx xxs="12" sm="6" lg="3" className="mb-5">
                      <Card>
                        <div className="position-relative">
                          <NavLink to="/video-detail" className="video-play-icon">
                            <span></span>
                          </NavLink>
                          <img className="card-img-top" src="/assets/img/landing-page/values-4.jpg" alt="Card cap" />
                          <Badge pill color="primary" className="position-absolute badge-top-left">BEGINNER</Badge>
                        </div>
                        <CardBody>
                          <NavLink to="/video-detail">
                            <h6 className="mb-4 video-heading ellipsis">File Structure</h6>
                          </NavLink>
                          <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">07.10.2018</p>
                          </footer>
                        </CardBody>
                      </Card>
                    </Colxx>

                    <Colxx xxs="12" sm="6" lg="3" className="mb-5">
                      <Card>
                        <div className="position-relative">
                          <NavLink to="/video-detail" className="video-play-icon">
                            <span></span>
                          </NavLink>
                          <img className="card-img-top" src="/assets/img/landing-page/values-5.jpg" alt="Card cap" />
                          <Badge pill color="secondary" className="position-absolute badge-top-left">ADVANCED</Badge>
                        </div>
                        <CardBody>
                          <NavLink to="/video-detail">
                            <h6 className="mb-4 video-heading ellipsis">Api Integrations</h6>
                          </NavLink>
                          <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">07.10.2018</p>
                          </footer>
                        </CardBody>
                      </Card>
                    </Colxx>

                    <Colxx xxs="12" sm="6" lg="3" className="mb-5">
                      <Card>
                        <div className="position-relative">
                          <NavLink to="/video-detail" className="video-play-icon">
                            <span></span>
                          </NavLink>
                          <img className="card-img-top" src="/assets/img/landing-page/values-6.jpg" alt="Card cap" />
                          <Badge pill color="secondary" className="position-absolute badge-top-left">ADVANCED</Badge>
                        </div>
                        <CardBody>
                          <NavLink to="/video-detail">
                            <h6 className="mb-4 video-heading ellipsis">Applications and Layouts</h6>
                          </NavLink>
                          <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">21.09.2018</p>
                          </footer>
                        </CardBody>
                      </Card>
                    </Colxx>

                    <Colxx xxs="12" sm="6" lg="3" className="mb-5">
                      <Card>
                        <div className="position-relative">
                          <NavLink to="/video-detail" className="video-play-icon">
                            <span></span>
                          </NavLink>
                          <img className="card-img-top" src="/assets/img/landing-page/values-7.jpg" alt="Card cap" />
                          <Badge pill color="secondary" className="position-absolute badge-top-left">ADVANCED</Badge>
                        </div>
                        <CardBody>
                          <NavLink to="/video-detail">
                            <h6 className="mb-4 video-heading ellipsis">Colors and Theming Options</h6>
                          </NavLink>
                          <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">17.09.2018</p>
                          </footer>
                        </CardBody>
                      </Card>
                    </Colxx>

                    <Colxx xxs="12" sm="6" lg="3" className="mb-5">
                      <Card>
                        <div className="position-relative">
                          <NavLink to="/video-detail" className="video-play-icon">
                            <span></span>
                          </NavLink>
                          <img className="card-img-top" src="/assets/img/landing-page/values-8.jpg" alt="Card cap" />
                          <Badge pill color="secondary" className="position-absolute badge-top-left">ADVANCED</Badge>
                        </div>
                        <CardBody>
                          <NavLink to="/video-detail">
                            <h6 className="mb-4 video-heading ellipsis">Bootstrap Xxs and Xxl Classes</h6>
                          </NavLink>
                          <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">11.09.2018</p>
                          </footer>
                        </CardBody>
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
export default connect(mapStateToProps, {landingPageMobileMenuToggle,landingPageMobileMenuClose})(injectIntl(Videos))
