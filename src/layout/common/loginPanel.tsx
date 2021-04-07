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
import { Popover } from 'antd';
import userStore from '~/models/user';

import './loginPanel.scss';

const LoginPanel = () => {
  const handleLogin = () => {
    userStore.effects.login();
  };

  return (
    <div className="site-loginpanel">
      <span className="login-item">
        <a onClick={handleLogin} className="bold" target="_blank" rel="noopener noreferrer">登录</a>
      </span>
      <Popover content="敬请期待" placement="bottom">
        <a className="bold free-registration ml20">免费注册</a>
      </Popover>

    </div>
  );
};

export default LoginPanel;
