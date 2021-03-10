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
  onClick?(key: string, name: string): any;
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
