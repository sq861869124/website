import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { message, Spin } from 'antd';
import Layout from './layout/layout';
import { setGlobal } from './common/utils';
import { NotFound } from './layout/common/error-page';
import './styles/global.scss';
import { RouteComponentProps } from 'react-router'

const Home = React.lazy(() => import('pages/home'));
const ContactUs = React.lazy(() => import('pages/contact-us'));
const Market = React.lazy(() => import('pages/market/market'));
const ServiceDetail = React.lazy(() => import('pages/market/service-detail'));
const DownloadPage = React.lazy(() => import('pages/market/download'));
const LibraryDetail = React.lazy(() => import('pages/market/library-detail'));

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
const history = createBrowserHistory();
setGlobal('history', history);
const onlyMain = [ '/login', '/regist', '/download' ]

const App = () => {

  const inOnlyMain = ({ pathname }: RouteComponentProps['location']) => {
    return onlyMain.some(item => pathname.includes(item))
  }

  return (
    <Router history={history}>
      <Layout inOnlyMain={inOnlyMain}>
        <Suspense fallback={<Spin spinning={true}></Spin>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={ContactUs}/>
            <Route exact path="/market/:type" component={Market}/>
            <Route exact path="/market/:type/:serviceName" component={ServiceDetail}/>
            <Route exact path="/download/:publishItemId" component={DownloadPage}/>
            <Route exact path="/library/:publishItemId" component={LibraryDetail}/>
            <Route path="*" component={NotFound}/>
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
