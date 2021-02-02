import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { v1 as uuid } from 'uuid';

import App from './App';
import Categories from './views/Categories.js';
import SelectedCategory from './views/SelectedCategory.js';
import AllApis from './views/AllApis.js';
import RandomApi from './views/RandomApi.js';
import SingleEntry from './views/SingleEntry.js';
import reportWebVitals from './reportWebVitals';

import "assets/scss/material-kit-react.scss?v=1.9.0";

var hist = createBrowserHistory();
// attention a l'ordre des routes : la '/' doit se placer à la fin sinon toutes les autres match
ReactDOM.render(
  <Router basename="/publics-apis-app" history={hist}> {/* */}
    <Switch>
      <Route path="/categories/:catId" component={SelectedCategory} />
      <Route path="/categories" component={Categories} />
      <Route path="/entry" component={SingleEntry} />
      <Route path="/random" render={(props) => <RandomApi {...props} key={uuid()}/>} />
      <Route path="/all" component={AllApis} />
      <Route path="/" component={App} /> {/* derniere route */}
      
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
