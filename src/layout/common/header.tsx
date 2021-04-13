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
import { throttle, isEmpty } from 'lodash';
import { Popover } from 'antd';
import classNames from 'classnames';
import IntroMenu from './menu';
import IntroMobileMenu from './menu-mobile';
import LoginPanel from './loginPanel';
import { Link } from 'react-router-dom';
import { getScrollTop } from '~/common/utils';
import UserInfo from '~/layout/common/user-info';
import userStore from '~/models/user';
import { useSiteEnv } from '~/models/env';
import { Icon } from 'common';
import i18n, {switchLocale} from '~/i18n';
import './header.scss';

let mobileMenuOpen = false;

interface IProps {
  onChangeVisible: (vis: boolean) => void;
  path: string;

  isWhite?: boolean;
}

const Header = ({ onChangeVisible, path }: IProps) => {
  const lastTop = React.useRef(getScrollTop());
  const [showHeaderDrawer, setShowHeaderDrawer] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [flexHeader, setFlexHeader] = React.useState(lastTop.current !== 0);
  const userData = userStore.useStore((s) => s.user);
  const { getCurrentUser } = userStore.effects;
  const [{ whiteHeader, headerShadow }] = useSiteEnv();

  React.useEffect(() => {
    getCurrentUser();
    lastTop.current = getScrollTop();
    // 刷新页面保留了滚动高度时，延时检查
    setTimeout(() => {
      setFlexHeader(lastTop.current !== 0);
      setVisible(true);
    }, 0);
    const onScroll = throttle(() => {
      if (mobileMenuOpen) {
        setFlexHeader(lastTop.current !== 0);
        setVisible(true);
        return;
      }
      const currentTop = Math.max(getScrollTop(), 0); // safari向上拉动时为负
      setFlexHeader(currentTop > 10);
      const direction = currentTop > lastTop.current ? 'down' : 'up';
      const distance = Math.abs(lastTop.current - currentTop);
      const shouldChange = distance > 5;
      // 显示状态时，向上滚动显示，否则隐藏；隐藏状态时，向下滚动显示，否则隐藏
      const nextVisible = visible ? (direction === 'up') : (direction === 'down');
      shouldChange && setVisible(nextVisible);
      lastTop.current = currentTop;
    }, 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  React.useEffect(() => {
    onChangeVisible(visible);
  }, [visible]);
  const toggleMenu = (flag: boolean) => {
    setFlexHeader(flag || lastTop.current !== 0);
  };

  const handlevisibleChange = (flag: boolean) => {
    setShowHeaderDrawer(flag);
  };

  const cls = classNames({
    'site-header': true,
    unselectable: true,
    'flex-header': flexHeader,
    'white-header': whiteHeader || showHeaderDrawer,
    'no-shadow': showHeaderDrawer || !headerShadow,
  });
  // const logo = flexHeader || whiteHeader ? 'logo-colorful' : 'logo-white'
  return (
    <header className={cls} onMouseEnter={() => toggleMenu(true)} onMouseLeave={() => toggleMenu(false)}>
      <div className="site-header-wrap">
        <Link className="logo" aria-label="go to home page" to="/">
          <Icon className="site-logo" type="logo2" />
          {/* <img width={160} height={45} className={`site-logo ${showColorful? 'show': 'hide'}`} src={`/images/logo-colorful.png`} alt=""/> */}
          {/* <img width={160} height={45} className={`site-logo ${showColorful? 'hide': 'show'}`}src={`/images/logo-white.png`} alt=""/> */}
        </Link>
        <IntroMenu page={path} handlevisibleChange={handlevisibleChange} />
        {isEmpty(userData) ? <LoginPanel /> : <UserInfo data={userData} />}
        <Popover content={i18n.t('common:switch language')} placement="bottom" getPopupContainer={(e) => e.parentElement}>
          <Icon onClick={switchLocale} className="switch-lang ml12" type="i18n" />
        </Popover>
        <IntroMobileMenu onToggle={(v: boolean) => { mobileMenuOpen = v; }} />
      </div>
    </header>
  );
};

export default Header;
