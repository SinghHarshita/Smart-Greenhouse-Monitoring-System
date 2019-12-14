import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import './index.scss';
import LandingPage from './LandingPage'

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/> */}
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={LandingPage}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/home-two`} component={HomeHorizontal}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-grid`} component={BlogGrid}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-two-column`} component={BlogTwoColumn}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/> */}

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
