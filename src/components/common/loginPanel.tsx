import * as React from 'react';

import './loginPanel.scss';

const LoginPanel = () => {
  return (
    <div className="site-loginpanel">
      <span className="login-item">
        <a href="/login" target="_blank" rel="noopener noreferrer">登录</a>
      </span>
      <a href='regist' className="free-registration ml20">免费注册</a>
    </div>
  );
};

export default LoginPanel;
