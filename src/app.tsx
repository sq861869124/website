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
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/market/:type" component={Market} />
            <Route exact path="/market/:type/:serviceName" component={ServiceDetail} />
            <Route exact path="/download/:publishItemId" component={DownloadPage} />
            <Route exact path="/library/:publishItemId" component={LibraryDetail} />
            <Route exact path="/customer-case" component={CustomerCase} />
            <Route exact path="/customer-case/:caseId" component={CustomerCaseDetail} />
            <Route exact path="/price" component={Price} />
            <Route exact path="/why-erda" component={WhyErda} />
            {/* <Route exact path="/join-us" component={JoinUs}/> */}
            <Route path="*" component={NotFound} />
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
