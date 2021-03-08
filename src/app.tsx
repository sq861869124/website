import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { message } from 'antd';
import Layout from './layout/layout';
import { setGlobal } from './common/utils';

import Home from 'pages/home';
import About from 'pages/about';
import Login from 'pages/login';
import Regist from 'pages/regist';
import { NotFound } from './layout/common/error-page';
import { useEnv } from './models/env';
import './styles/global.scss';

const history = createBrowserHistory();
setGlobal('history', history);

const App = () => {
  const env = useEnv();

  console.log(env)


  return (
    <Router history={history}>
      <Layout onlyMain key={env.fullSite}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/regist" component={Regist}/>
          <Route exact path="/about" component={About}/>
          <Route path="*" component={NotFound}/>
        </Switch>

      </Layout>
    </Router>
  );
};

window.addEventListener('offline', () => {
  message.warning('您的网络已断开');
});
window.addEventListener('online', () => {
  message.success('您的网络已恢复');
});

export default App;
