import React from "react";
import { Row, Card, CardBody, Badge } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";

export default class SectionTeam extends React.Component {

    render() {
        return (
            <Row>
                <Colxx xxs={{ size: "12"}} lg={{ size: 4 }} className="mb-4">
                    <h1><IntlMessages id="lp.team.title" /></h1>
                    <p>
                        Our team brings a wealth of experience from some of the world’s most formidable production studios, agencies and startups.
                        <br/><br/>
                        We are a team who constantly questions, tinkers, and challenges to unlock great creativity around every turn.
                    </p>
                </Colxx>
                <Colxx xxs={{size:12, offset:0}} lg={{size:7, offset:1}} className="pl-0 pr-0 team-carousel">
                    <ReactSiemaCarousel
                        perPage={{
                            0: 1,
                            576: 2,
                            1440: 3
                        }}
                        loop={false}>
                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-1.jpg" alt="Card cap" />
                                    <Badge color="secondary" pill className="position-absolute badge-top-left">HARDWARE</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Jay Bendre</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            Sr. Developer
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-3.jpg" alt="Card cap" />
                                    <Badge color="success" pill className="position-absolute badge-top-left">BACKEND</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Sumedh Ghavat</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            Sr. Developer
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-2.jpg" alt="Card cap" />
                                    <Badge color="primary" pill className="position-absolute badge-top-left">DATABASE</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Vignesh Pillai</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            Sr. Developer
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-4.jpg" alt="Card cap" />
                                    <Badge color="danger" pill className="position-absolute badge-top-left">FRONTEND</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Harshita Singh</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            Sr. Developer
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                        {/* <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-5.jpg" alt="Card cap" />
                                    <Badge color="theme-3" pill className="position-absolute badge-top-left">DESIGN</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Esperanza Lodge</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            Artdirector
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>
                     */}
                    </ReactSiemaCarousel>
                </Colxx>
            </Row>
        );
    }
}

