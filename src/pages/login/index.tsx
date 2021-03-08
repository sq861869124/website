import React from 'react';
import { Link } from 'react-router-dom';
import AccountLogin from 'pages/login/account-login';
import VerificationCodeLogin from 'pages/login/verification-code-login';

import './index.scss';

const LoginComp = {
  account: AccountLogin,
  verification: VerificationCodeLogin
};

const Login = () => {
  const [loginType, setLoginType] = React.useState('account');

  const handleChangeLoginType = React.useCallback(() => {
    setLoginType(loginType === 'account'? 'verification': 'account')
  }, [loginType])

  const Comp = LoginComp[loginType];
  return (
    <div className="login-container">
      <div className="form-wrap pt24 px28 pb36">
        <Comp/>
        <div className="flex-box sign-in-column mt8">
          <div>忘记密码</div>
          <div className="flex-box">
            <div className="mr8" onClick={handleChangeLoginType}>{loginType === 'account' ? '验证码登录' : '账户登录'}</div>
            <Link to="/regist">注册</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
