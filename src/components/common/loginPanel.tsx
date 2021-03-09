import * as React from 'react';
import { Popover } from 'antd';
import userStore from '~/models/user';

import './loginPanel.scss';

const LoginPanel = () => {

  const handleLogin =  () => {
    userStore.effects.login();
  }

  return (
    <div className="site-loginpanel">
      <span className="login-item">
        <a onClick={handleLogin} target="_blank" rel="noopener noreferrer">登录</a>
      </span>
      <Popover content="敬请期待" placement="bottom">
        <a href='/' className="free-registration ml20">免费注册</a>
      </Popover>

    </div>
  );
};

export default LoginPanel;
