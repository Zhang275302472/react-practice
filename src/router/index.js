import React from 'react';
import { BrowserRouter,HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import loadable from '../router/loadable';

const AppPage = loadable(() => import('../pages/app.js'))
const LoginPage = loadable(() => import('../pages/loginPage'))
// Switch组件用于在内部Route组件中选一个


// 登录验证
function requireAuth(Layout, props) {
    // debugger
  if (true) { // 未登录
      // sessionStorage.setItem('q', 1)
    return <Redirect to="/login" />;
  } else {
    return <Layout {...props} />
  }
}

// let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

const BasicRoute  = () => (
    <HashRouter>
      <Switch>
          <Route exact path='/' component={ props => requireAuth(AppPage, props) } >

          </Route>
        <Route exact path="/home" component={ props => requireAuth(AppPage, props) } />
        <Route exact path="/login" component={ LoginPage } />
      </Switch>
    </HashRouter>
);
  export default BasicRoute;

{/*<Route*/}
{/*    exact*/}
{/*    path='/qgyq'*/}
{/*    component={createComponent(() => import('../pages/qgyq'))}*/}
{/*/>*/}
