import * as React from 'react';
import { Icon as CustomIcon } from 'common';
import { Popover } from 'antd'
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
  onClick(name: string): any;
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
    <div key={name} className='service-card' onClick={() => clickCard(name)}>
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

export const ServiceCardList = ({ list, className = '' }: { list: ICard[], className?: string }) => {
  if (!list || !list.length) {
    return null;
  }
  return (
    <div className={`service-card-list ${className}`}>
      {list.map(ServiceCard)}
    </div>
  );
};
