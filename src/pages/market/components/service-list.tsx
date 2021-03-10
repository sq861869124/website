import * as React from 'react';
import { Icon as CustomIcon } from 'common';
import './service-card.scss';
import { Popover } from "antd";

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

const Comp = ({ list, className = '', onClick }: { list: IPublishItemCard[], className?: string, onClick: Function}) => {
  if (!list || !list.length) {
    return null;
  }
  const handleClick = (item: IPublishItemCard) => {
    onClick(item);
  };
  return (
    <div className={`service-card-list ${className}`} style={{width: '100%'}}>
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

export const ServiceList =  React.memo(Comp);
