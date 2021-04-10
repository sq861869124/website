// Copyright (c) 2021 Terminus, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { message, Spin } from 'antd';
import Layout from './layout/layout';
import { setGlobal } from './common/utils';
import { NotFound } from './layout/common/error-page';
import NyRouter from './layout/common/my-route';
import './styles/global.scss';

const Home = React.lazy(() => import('pages/home'));
const ContactUs = React.lazy(() => import('pages/contact-us'));
const Market = React.lazy(() => import('pages/market/market'));
const ServiceDetail = React.lazy(() => import('pages/market/service-detail'));
const DownloadPage = React.lazy(() => import('pages/market/download'));
const LibraryDetail = React.lazy(() => import('pages/market/library-detail'));
const CustomerCase = React.lazy(() => import('pages/customer-case'));
const CustomerCaseDetail = React.lazy(() => import('pages/customer-case/detail'));
const WhyErda = React.lazy(() => import('pages/why-erda'));
const Price = React.lazy(() => import('pages/price'));
// const JoinUs = React.lazy(() => import('pages/join'));

const routeList = [
  {
    exact: true,
    path: '/',
    component: Home,
    title: '尔达云',
  }, {
    exact: true,
    path: '/contact',
    component: ContactUs,
    title: '尔达云 - 联系我们',
  }, {
    exact: true,
    path: '/market/:type',
    component: Market,
    title: '尔达云 - 服务市场',
  }, {
    exact: true,
    path: '/market/:type/:serviceName',
    component: ServiceDetail,
    title: '尔达云 - 服务市场',
  }, {
    exact: true,
    path: '/download/:publishItemId',
    component: DownloadPage,
    title: '尔达云 - 服务市场',
  }, {
    exact: true,
    path: '/library/:publishItemId',
    component: LibraryDetail,
    title: '尔达云 - 服务市场',
  }, {
    exact: true,
    path: '/customer-case',
    component: CustomerCase,
    title: '尔达云 - 成功案例',
  }, {
    exact: true,
    path: '/customer-case/:caseId',
    component: CustomerCaseDetail,
    title: '尔达云 - 成功案例',
  }, {
    exact: true,
    path: '/price',
    component: Price,
    title: '尔达云 - 价格',
  }, {
    exact: true,
    path: '/why-erda',
    component: WhyErda,
    title: '尔达云 - WhyErda',
  }, {
    exact: true,
    path: '*',
    component: NotFound,
    title: '尔达云',
  },
];

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
const history = createBrowserHistory();
setGlobal('history', history);

const Fallback = (
  <div className="page-lazy-loading pt0">
    <div className="title-bg" />
    <div className="center-flex-box py40 my40">
      <Spin spinning tip="页面加载中" />
    </div>
  </div>
);

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Suspense fallback={Fallback}>
          <Switch>
            <NyRouter routeList={routeList} />
            {/* <Route exact path="/join-us" component={JoinUs}/> */}
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </Suspense>
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
