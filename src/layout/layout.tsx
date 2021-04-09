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

import * as React from 'react';
import { Helmet } from "react-helmet";
import Header from '~/layout/common/header';
import Footer from '~/layout/common/temp-footer';
import { SiteContext } from 'common/utils/site-context';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { useSiteEnv } from '~/models/env';
import { RouteComponentProps } from 'react-router';

import './layout.scss';

interface IProps extends RouteComponentProps{
  children: React.ReactNode;
}

const routesArr = [
 {
  pathname: '/contact',
  title: '联系我们',
},{
  pathname: '/market',
  title: '服务市场',
},{
  pathname: '/download',
  title: '服务市场',
},{
  pathname: '/library',
  title: '服务市场',
},{
  pathname: '/customer-case',
  title: '成功案例',
},{
  pathname: '/price',
  title: '价格',
},{
  pathname: '/why-erda',
  title: 'WhyErda',
},{
  pathname: '/',
  title: '',
} ]

const PageLayout = ({children, location}: IProps) => {
  const [headShow, setHeadShow] = React.useState(true);
  const [title, setTitle] = React.useState('');
  const [{ onlyMain }] = useSiteEnv();
  React.useEffect( () => {
    const newTitle = routesArr.filter( ( item: any ) => {
      if( location.pathname.indexOf(item.pathname) !== -1 ) {
        return item
      }
    } )
    if( newTitle.length ) {
      setTitle( newTitle[0].title )
    }
  }, [location] )
  const changeHeadVisible = (vis: boolean) => {
    setHeadShow(vis);
  };
  const wrapperClassName = classNames({
    'dice-default-layout': true,
    'theme-dice': true,
    'only-main': onlyMain,

  });
  return (
    <SiteContext.Provider value={{ headShow }}>
      <Helmet>
        <title>{ title ? `尔达云 - ${title}` : '尔达云' }</title>
      </Helmet>
      <div className={wrapperClassName}>
        {
          onlyMain ? null : <Header path={location.pathname} onChangeVisible={changeHeadVisible} />
        }
        <main className="dice-site-content">
          {children}
        </main>
        {
          onlyMain
            ? null
            : <Footer />
        }
      </div>
    </SiteContext.Provider>
  );
};
export default withRouter(PageLayout);
