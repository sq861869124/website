import React from 'react';
import classNames from 'classnames';
import './quote-card.scss'

interface IProps{
  className?:string;
  children: React.ReactNode;
  title?: React.ReactNode;
  icon?: React.ReactNode
}

const QuoteCard = ({className, children, title, icon}: IProps) => {

  const cls = classNames('erda-quote-card', {
    // @ts-ignore
    [className]:!!className
  })
  return (
    <div className={cls}>
      <div className="px24 py16 ">
        <div className="flex-box erda-quote-card-title flex-start mb16">
          {icon && <div className="erda-quote-card-title-icon mr8">{icon}</div>}
          <p className="erda-quote-card-title-text">{title}</p>
        </div>
        <div className={`erda-quote-card-body ${icon ? 'pl32 ' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default QuoteCard
