import * as React from 'react';
import Header from '~/components/common/header';
import Footer from '~/components/common/footer';
import { SiteContext } from 'common/utils/site-context';
import {withRouter} from 'react-router-dom'
import classNames from 'classnames';

import './layout.scss';

const onlyMains = ['/login', '/regist']

const PageLayout = ({ children, location }: any) => {
  const [headShow, setHeadShow] = React.useState(true);

  const changeHeadVisible = (vis: boolean) => {
    setHeadShow(vis);
  };
  const onlyMain = onlyMains.includes(location.pathname)
  console.log(location)
  const wrapperClassName = classNames({
    'dice-default-layout': true,
    'theme-dice': true,
    'only-main': onlyMain
  });
  return (
    <SiteContext.Provider value={{ headShow }}>
      <div className={wrapperClassName}>
        {
          onlyMain ? null : <Header onChangeVisible={changeHeadVisible} />
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
