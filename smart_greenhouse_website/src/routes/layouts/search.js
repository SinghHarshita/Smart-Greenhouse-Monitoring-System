import React, { Component, Fragment } from 'react'
import IntlMessages from 'Util/IntlMessages';
import { Row, Card, CardBody } from 'reactstrap';
import { NavLink } from "react-router-dom";

import { Colxx, Separator } from 'Components/CustomBootstrap'
import BreadcrumbContainer from 'Components/BreadcrumbContainer'
import Pagination from 'Components/List/Pagination';

import products from 'Data/products.json'




export default class SearchLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: products.data,
            currentPage: 1,
            totalPage: 12,
            keyword: 'Cake'
        }
    }

    onChangePage(page) {
        this.setState({
            currentPage: page
        });
    }

    render() {
        const rowLength = this.state.items.length;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <BreadcrumbContainer heading={`Search : ${this.state.keyword}`} match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="12" className="mb-4">
                        <Card>
                            <CardBody>
                                {
                                    this.state.items.map((item, i) => {
                                        return (
                                            <div key={i} className={`${rowLength !== i + 1 ? 'mb-3' : ''}`}>
                                                <NavLink to={`#${item.id}`} className="w-40 w-sm-100">
                                                    <p className="list-item-heading mb-1 color-theme-1">{item.name}</p>
                                                    <p className="mb-1 text-muted text-small">Products | {item.category}</p>
                                                    <p className="mb-4 text-small">{item.description}</p>
                                                </NavLink>
                                                {
                                                    rowLength !== i + 1 &&
                                                    <Separator />
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </CardBody>
                        </Card>
                    </Colxx>
                    <Pagination currentPage={this.state.currentPage} totalPage={this.state.totalPage} onChangePage={(i) => this.onChangePage(i)} />

                </Row>
            </Fragment>
        )
    }
}
