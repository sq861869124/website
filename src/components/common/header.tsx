import * as React from 'react';
import { throttle, isEmpty } from 'lodash';
import classNames from 'classnames';
import IntroMenu from './menu';
import IntroMobileMenu from './menu-mobile';
import LoginPanel from './loginPanel';
import { Link } from 'react-router-dom';
import { getScrollTop } from '~/common/utils';
import UserInfo from '~/components/common/user-info';
import userStore from '~/models/user';
import './header.scss';

let mobileMenuOpen = false;

interface IProps {
  onChangeVisible(vis: boolean): void;
}
const Header = ({ onChangeVisible }: IProps) => {
  let lastTop = React.useRef(getScrollTop());
  const [visible, setVisible] = React.useState(true);
  const [flexHeader, setFlexHeader] = React.useState(lastTop.current !== 0);
  const userData = userStore.useStore(s=>s.user);
  const {getCurrentUser} = userStore.effects;

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

  const cls = classNames({
    'site-header': true,
    'unselectable': true,
    // hide: !visible,
    'flex-header': flexHeader,
  });
  const logo = flexHeader ?   'logo-colorful' : 'logo-white'
  return (
    <header className={cls}>
      <div className="site-header-wrap">
        <Link className="logo" aria-label="go to home page" to="/">
          <img width={160} src={`/images/${logo}.svg`} alt=""/>
        </Link>
        <IntroMenu />
        {isEmpty(userData)? <LoginPanel />: <UserInfo data={userData}/>}
        <IntroMobileMenu onToggle={(visible: boolean) => mobileMenuOpen = visible} />
      </div>
    </header>
  );
};

export default Header;
