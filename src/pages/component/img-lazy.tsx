import React from 'react';
import LazyLoad from 'react-lazyload';
// @ts-ignore
import {LazyLoadProps} from '@types/react-lazyload'
import classNames from 'classnames';
import './img-lazy.scss'

interface  IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{
  className?: string;
  lazyProps?: LazyLoadProps
}

const ImgLazy = ({className, lazyProps, ...rest}:IProps) => {
  const cls = classNames('erda-lazyload-img-wrap', {
    [`${className}`]:!!className
  })
  const lProps: LazyLoadProps = {
    once: true,
    ...lazyProps
  }
  return (
    <div className={cls}>
      <LazyLoad {...lProps}>
        <img alt="" {...rest}/>
      </LazyLoad>
    </div>
  )
}

export default ImgLazy
