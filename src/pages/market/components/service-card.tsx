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
import { Popover } from 'antd';
import { goTo } from 'common/utils';

import './service-card.scss';

interface ICard {
  id: string;
  displayName: string;
  name: string;
  logoUrl: string;
  desc: string;
  category: string;
  type: string;
  onClick: (name: string) => any;
}

export const ServiceCard = ({
  displayName,
  name,
  logoUrl,
  desc,
  type,
  category,
  onClick,
}: ICard) => {
  const clickCard = (_name: string) => {
    onClick ? onClick(_name) : goTo(`/market/${type}/${_name}`);
  };

  return (
    <div key={name} className="service-card" onClick={() => clickCard(name)}>
      <div className="card-logo mb12">
        {
          logoUrl ? <img src={logoUrl} alt="service-logo" /> : <CustomIcon type="yf" />
        }
      </div>
      <Popover content={displayName || name}>
        <div className="card-name nowrap">{displayName || name}</div>
      </Popover>
      <div className="card-line my12" />
      <div className="card-desc">{desc}</div>
    </div>
  );
};

export const ServiceCardList = ({ list, className = '' }: { list: ICard[]; className?: string }) => {
  if (!list || !list.length) {
    return null;
  }
  return (
    <div className={`service-card-list ${className}`}>
      {list.map(ServiceCard)}
    </div>
  );
};
