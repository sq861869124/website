import * as React from 'react';

import './common.scss';

interface IProps{
  className: string;
  path: string;
  children?: any
}

export default ({className, children= null}: IProps) => {
  return <div className={`sprite-common ${className}`}>{children}</div>;
};
