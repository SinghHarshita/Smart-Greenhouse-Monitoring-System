import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import dataList from './data-list';
import thumbList from './thumb-list';
import imageList from './image-list';
import search from './search';
import details from './details';

const Layouts = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/data-list`} />
            <Route path={`${match.url}/data-list`} component={dataList} />            
            <Route path={`${match.url}/thumb-list`} component={thumbList} />            
            <Route path={`${match.url}/image-list`} component={imageList} />            
            <Route path={`${match.url}/details`} component={details} />            
            <Route path={`${match.url}/search`} component={search} />  
            <Redirect to="/error" />
          
        </Switch>
    </div>
);

export default Layouts;