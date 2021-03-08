import * as React from 'react';

import './about.scss';

interface IProps{
  className: string;
  path: string;
  children?: any
}

export default ({className, children= null}: IProps) => {
  return <div className={`sprite-about ${className}`}>{children}</div>;
};
