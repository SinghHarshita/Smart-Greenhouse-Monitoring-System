import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { configureStore } from "Redux/store";

import App from "Containers/App";

const MainApp = () => (
  <Provider store={configureStore()}>
    <Router>
      <Switch>

        <Route path="/" component={App} />
      
      </Switch>
    </Router>
  </Provider>
);

export default MainApp;
