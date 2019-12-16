import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import todo from "./todo";
import surveyList from "./survey";
import surveyDetail from "./survey-detail";
import chat from "./chat";

const Applications = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/todo`} />
      <Route path={`${match.url}/todo`} component={todo} />
      <Route
        path={`${match.url}/survey/:surveyid`}
        component={surveyDetail}
        isExact
      />
      <Route path={`${match.url}/survey`} component={surveyList} isExact />
      <Route path={`${match.url}/chat`} component={chat} />
      <Redirect to="/error" />
    </Switch>
  </div>
);

export default Applications;
