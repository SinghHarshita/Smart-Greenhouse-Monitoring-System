import React, { Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

export default class SectionFeatures extends React.Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-center">
                        <h1><IntlMessages id="lp.featuressection.title"/></h1>
                        <p>
                        Our aim is to provide the best possible way to provide with an interractive 
                        <br/>environment for interraction with multi-sensor environment.
                        </p>
                    </Colxx>
                </Row>

                {/* Light Intensity */}
                <Row className="feature-row">
                    <Colxx xxs="12" md="6" lg="5" className="d-flex align-items-center">
                        <div className="d-flex">
                            <div className="feature-text-container">
                                {/* <h2><IntlMessages id="lp.featuressection.title-1"/></h2>
                                <p>
                                    <IntlMessages id="lp.featuressection.detail-1-1"/><br/><br/>
                                    <IntlMessages id="lp.featuressection.detail-1-2"/><br/><br/>
                                    <IntlMessages id="lp.featuressection.detail-1-3"/>
                                </p> */}
                                <h2>Light Intensity</h2>
                                <p>
                                    Enables the user to have access to the live light intensity value inside the greenhouse and notify if not within the recommended range.
                                </p>
                            </div>
                        </div>
                    </Colxx>
                    <Colxx xxs="12" md={{ size: "6", offset: 0 }} lg={{ size: "6", offset: 1 }} className="position-relative">
                        <img alt="feature" className="feature-image-right feature-image-charts position-relative" src="/assets/img/landing-page/feature.png" />
                    </Colxx>
                </Row>

                {/* Air & Soil Humidity */}
                <Row className="featur1e-row">
                    <Colxx xxs={{ size: 12, order: 2 }} md={{ size: 6, order: 1 }} lg="6">
                        <img alt="feature" className="feature-image-left feature-image-charts" src="/assets/img/landing-page/feature-2.png" />
                    </Colxx>
                    <Colxx xxs={{ size: 12, order: 1 }} md={{ size: 6, offset: 0, order: 2 }} lg={{ size: 5, offset: 1 }} className="d-flex align-items-center">
                        <div className="d-flex">
                            <div className="feature-text-container">
                                {/* <h2><IntlMessages id="lp.featuressection.title-2"/></h2>
                                <p>
                                    <IntlMessages id="lp.featuressection.detail-2-1"/><br/><br/>
                                    <IntlMessages id="lp.featuressection.detail-2-2"/><br/><br/>
                                    <IntlMessages id="lp.featuressection.detail-2-3"/>
                                </p> */}
                                <h2>Air &amp; Soil Humidity</h2>
                                <p>
                                    Enables the user to monitor the values of humidity and notify if not within the regulated values
                                </p>
                            </div>
                        </div>
                    </Colxx>
                </Row>

                {/* Automated Irrigation */}
                <Row className="feature-row">
                    <Colxx xxs="12" md="6" lg="5" className="d-flex align-items-center">
                        <div className="d-flex">
                            <div className="feature-text-container">
                                {/* <h2><IntlMessages id="lp.featuressection.title-3"/></h2>
                                <p>
                                    <IntlMessages id="lp.featuressection.detail-3-1"/><br/><br/>
                                    <IntlMessages id="lp.featuressection.detail-3-2"/><br/><br/>
                                    <IntlMessages id="lp.featuressection.detail-3-3"/>
                                 </p> */}
                                 <h2>Automated Irrigation</h2>
                                <p>
                                    Regular irrigation patterns can be set for the crops and notified to the user
                                </p>
                            </div>
                        </div>
                    </Colxx>
                    <Colxx xxs="12" md={{ size: "6", offset: 0 }} lg={{ size: "6", offset: 1 }} className="position-relative">
                        <img alt="feature" className="feature-image-right feature-image-charts position-relative" src="/assets/img/landing-page/feature-3.png" />
                    </Colxx>
                </Row>
                
                {/* Air Quality */}
                <Row className="featur1e-row">
                    <Colxx xxs={{ size: 12, order: 2 }} md={{ size: 6, order: 1 }} lg="6">
                        <img alt="feature" className="feature-image-left feature-image-charts" src="/assets/img/landing-page/feature-2.png" />
                    </Colxx>
                    <Colxx xxs={{ size: 12, order: 1 }} md={{ size: 6, offset: 0, order: 2 }} lg={{ size: 5, offset: 1 }} className="d-flex align-items-center">
                        <div className="d-flex">
                            <div className="feature-text-container">
                                {/* <h2><IntlMessages id="lp.featuressection.title-2"/></h2>
                                <p>
                                    <IntlMessages id="lp.featuressection.detail-2-1"/><br/><br/>
                                    <IntlMessages id="lp.featuressection.detail-2-2"/><br/><br/>
                                    <IntlMessages id="lp.featuressection.detail-2-3"/>
                                </p> */}
                                <h2>Air Quality</h2>
                                <p>
                                    Help Monitor the air quality index (QI) and decide whether it is suitable for any cultivation
                                </p>
                            </div>
                        </div>
                    </Colxx>
                </Row>

                
            </Fragment>
        );
    }
}














