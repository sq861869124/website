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
import classnames from 'classnames';
import { Icon as CustomIcon } from 'common';

import './tab.scss';

interface ITab {
  key: string;
  name: string;
  icon: string;
}
interface IProps {
  list: ITab[];
  className?: string;
  activeKey?: string;
  onClick?: (key: string, name: string) => any;
}

export const Tab = ({ list, activeKey, onClick, className = '' }: IProps) => {
  if (!list) {
    return null;
  }
  return (
    <div className="service-market-tab-container">
      <div className={`service-market-tab ${className}`}>
        <ul className="tab-list">
          {list.map(({ key, name, icon }) => {
            const cls = classnames({
              'tab-item': true,
              active: activeKey === key,
            });
            return (
              <li
                key={key}
                className={cls}
                onClick={() => onClick && onClick(key, name)}
              >
                <CustomIcon type={icon} />
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
