import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter  } from 'react-router-dom';

import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';

import { Bins } from '../imports/collections/bins';

const routes = (
  <BrowserRouter>
      <div>
          <App/>
          <Switch>
            <Route exact path="/" component={BinsList} />
            <Route path="/bins/:binId" component={BinsMain} />
        </Switch>
      </div>
  </BrowserRouter>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
