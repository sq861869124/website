import * as React from 'react';

import './home.scss';

interface IProps{
  className: string;
  path: string;
  children?: any
}

export default ({className, children= null}: IProps) => {
  return <div className={`sprite-home ${className}`}>{children}</div>;
};
