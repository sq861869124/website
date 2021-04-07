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

import React from 'react';
import { Link } from 'react-router-dom';
import AccountLogin from 'pages/login/account-login';
import VerificationCodeLogin from 'pages/login/verification-code-login';

import './index.scss';

const LoginComp = {
  account: AccountLogin,
  verification: VerificationCodeLogin,
};

const Login = () => {
  const [loginType, setLoginType] = React.useState('account');

  const handleChangeLoginType = React.useCallback(() => {
    setLoginType(loginType === 'account' ? 'verification' : 'account');
  }, [loginType]);

  const Comp = LoginComp[loginType];
  return (
    <div className="login-container">
      <div className="form-wrap pt24 px28 pb36">
        <Comp />
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
