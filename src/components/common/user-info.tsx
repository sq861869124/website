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
import { Avatar, Popover } from 'antd';
import userStore from '~/models/user';
import { Icon as CustomIcon } from 'common';
import { getParentContainer } from 'common/utils';
import './user-info.scss';
import i18n from '~/i18n';

const UserInfo = ({ data }: { data: USER.IUser }) => {
  const logout = () => {
    userStore.effects.logout();
  };
  const goToDice = () => {
    window.open('/login-dice');
  };

  const content = (
    <div className="py4">
      <div className="erda-user-info-menu-item px16 py4" onClick={goToDice}>{i18n.t('enter the platform')}</div>
      <div className="erda-user-info-menu-item px16 py4" onClick={logout}>{i18n.t('sign out')}</div>
    </div>
  );
  return (
    <div className="erda-header-user-wrap">
      <Popover
        placement="bottomRight"
        className="user-info flex-box"
        trigger="click"
        title={data.nick}
        content={content}
        overlayClassName="action-wrapper"
        getPopupContainer={getParentContainer}
      >
        <Avatar className="mr8" src={data.avatar}>
          {data.nick.slice(0, 1).toUpperCase()}
        </Avatar>
        <CustomIcon className="unfold fz12" type="unfold" />
      </Popover>
    </div>
  );
};

export default UserInfo;
