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
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { message, Spin } from 'antd';
import i18n from '~/i18n';
import Layout from './layout/layout';
import { setGlobal } from './common/utils';
import { NotFound } from './layout/common/error-page';
import MyRouter from './layout/common/my-route';
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
    title: 'Erda Cloud',
  },
  {
    exact: true,
    path: '/contact',
    component: ContactUs,
    title: i18n.t('{title} contact us', { title: 'Erda Cloud - ' }),
  },
  {
    exact: true,
    path: '/market/:type',
    component: Market,
    title: i18n.t('{title} service market', { title: 'Erda Cloud - ' }),
  },
  {
    exact: true,
    path: '/market/:type/:serviceName',
    component: ServiceDetail,
    title: i18n.t('{title} service market', { title: 'Erda Cloud - ' }),
  },
  {
    exact: true,
    path: '/download/:publishItemId',
    component: DownloadPage,
    title: i18n.t('{title} service market', { title: 'Erda Cloud - ' }),
  },
  {
    exact: true,
    path: '/library/:publishItemId',
    component: LibraryDetail,
    title: i18n.t('{title} service market', { title: 'Erda Cloud - ' }),
  },
  {
    exact: true,
    path: '/customer-case',
    component: CustomerCase,
    title: i18n.t('{title} success stories', { title: 'Erda Cloud - ' }),
  },
  {
    exact: true,
    path: '/customer-case/:caseId',
    component: CustomerCaseDetail,
    title: i18n.t('{title} success stories', { title: 'Erda Cloud -' }),
  },
  {
    exact: true,
    path: '/price',
    component: Price,
    title: i18n.t('{title} pricing', { title: 'Erda Cloud - ' }),
  },
  {
    exact: true,
    path: '/why-erda',
    component: WhyErda,
    title: 'Erda Cloud - WhyErda',
  },
  {
    exact: true,
    path: '*',
    component: NotFound,
    title: 'Erda Cloud',
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
      <Spin spinning tip={i18n.t('page loading')} />
    </div>
  </div>
);

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Suspense fallback={Fallback}>
          <MyRouter routeList={routeList} />
        </Suspense>
      </Layout>
    </Router>
  );
};

window.addEventListener('offline', () => {
  message.warning(i18n.t('your network is disconnected'));
});
window.addEventListener('online', () => {
  message.success(i18n.t('your network has been restored'));
});

export default App;
