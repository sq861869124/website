import * as React from 'react';
import classNames from 'classnames';

interface IProps {
  type: string
  className?: string
  color?: boolean
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
}

export const Icon = ({
  type, className, style, onClick, color, ...rest
}: IProps) => {
  const classes = classNames(
    !color && 'iconfont',
    !color && `icon${type}`,
    color && 'icon',
    className
  );
  if (color) {
    return (
      <svg className={classes} aria-hidden="true" style={style} onClick={onClick}>
        <use xlinkHref={`#icon${type}`} />
      </svg>
    );
  }
  return <i className={classes} style={style} onClick={onClick} {...rest} />;
};
