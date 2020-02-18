import React from 'react';
import { Link, HashRouter, Route, Switch } from 'react-router-dom';
import {} from 'react-router-dom';
import createComponent from '../router/createComponent';
const IndexPage = () => (
    <div style={{ padding: 40, fontSize: 20 }}>
      <h3>运行态势</h3>
      <div>
        <Link to='/qgyq'>全国疫情</Link>
      </div>
    </div>
  );
  const BasicRoute  = () => (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route
          exact
          path='/qgyq'
          component={createComponent(() => import('../pages/qgyq'))}
        />/
        </Switch>
    </HashRouter>
  );
  
  export default BasicRoute;