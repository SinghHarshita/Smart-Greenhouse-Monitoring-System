// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';
// import Demo from './page-demo/Demo';
import HomeOlive from './HomeOlive';
// import HomeHorizontal from './HomeHorizontal';
// import BlogGrid from './blog/BlogGrid';

// import BlogTwoColumn from './blog/BlogTwoColumn';
// import BlogDetails from './blog/BlogDetails';


import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/> */}
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOlive}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/home-two`} component={HomeHorizontal}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-grid`} component={BlogGrid}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-two-column`} component={BlogTwoColumn}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/> */}

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();


