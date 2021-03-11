import * as React from 'react';
import './category-list.scss';

interface IProps {
  list: string[];
  activeKey?: string;
  className?: string;
  onClick(name: string, e: any): any;
}

export const CategoryList = ({
  list,
  activeKey,
  onClick,
  className = '',
}: IProps) => {
  return (
    <div className={`service-category-list ${className}`}>
      {list.map((category, i) => {
        const cls = activeKey === category ? 'active' : '';
        return (
          <div
            key={i}
            className={`category-item ${cls}`}
            onClick={e => onClick(category, e)}
          >
            <span>{category}</span>
          </div>
        );
      })}
    </div>
  );
};
