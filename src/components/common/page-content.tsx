import React from 'react';
import classNames from 'classnames';
import './page-content.scss'

interface IProps{
  className?:string;
  children: React.ReactNode
}

const PageContent = (props: IProps) => {
  const {children, className} = props;
  const cls = classNames('erda-page-content', {
    // @ts-ignore
    [className]:!!className
  })
  return (
    <div className={cls}>{children}</div>
  )
}

export default PageContent
