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
import { Icon as CustomIcon } from 'common';
import './service-card.scss';
import { Popover } from 'antd';

export interface IPublishItemCard {
  id: string;
  name: string;
  logo: string;
  publisherId: number;
  publishItemKey: string;
  type: string;
  public: boolean;
  orgId: number;
  desc: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
}

const Comp = ({ list, className = '', onClick }: { list: IPublishItemCard[]; className?: string; onClick: Function}) => {
  if (!list || !list.length) {
    return null;
  }
  const handleClick = (item: IPublishItemCard) => {
    onClick(item);
  };
  return (
    <div className={`service-card-list ${className}`} style={{ width: '100%' }}>
      {list.map((item: IPublishItemCard) => {
        const { name, logo, desc, id } = item;
        return (
          <div key={`${id}-${Date.now()}`} className="service-card" onClick={() => handleClick(item)}>
            <div className="card-logo mb12">
              {
                logo ? <img src={logo} alt="service-logo" /> : <CustomIcon type="yf" />
              }
            </div>
            <Popover content={name}>
              <div className="card-name nowrap">{name}</div>
            </Popover>
            <div className="card-line my12" />
            <div className="card-desc">{desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export const ServiceList = React.memo(Comp);
