import classnames from 'classnames';
import * as React from 'react';
import { Icon as CustomIcon } from 'common';
import './empty-holder.scss';

export const EmptyHolder = ({
  icon = 'not-found',
  tip = '暂无内容',
  relative = false,
  style = {},
  action = null,
}) => {
  const cls = classnames({
    'empty-holder': true,
    'multi-line': true,
    relative,
  });
  return (
    <div className={cls} style={style}>
      <CustomIcon type={icon} />
      <span>{tip} <span className="action">{action}</span></span>
    </div>
  );
};
