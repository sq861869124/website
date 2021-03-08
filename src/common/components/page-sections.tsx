import * as React from 'react';
import classnames from 'classnames';
import { SpriteIcons } from '~/common';

import './page-sections.scss';


interface IContent {
  width?: number
  space?: 32 | 60 | 40 | 80 | 0
  className?: string
  children: React.ElementType | JSX.Element | JSX.Element[],
  position?: string;
}

export const PageSection = ({
  width = 800,
  space = 32,
  className = '',
  children,
}: IContent) => {
  if (!children) {
    return null;
  }
  const cls = classnames({
    'page-section': true,
    [`space-${space}`]: true,
    [className]: true,
  });
  return (
    <section className={cls}>
      <div className="section-content" style={{maxWidth: width}}>
        {children}
      </div>
    </section >
  );
};

export const PageTitle = ({
  width = 800,
  className = '',
  children,
  }: IContent) => {
  const cls = classnames({
    'page-section-title': true,
    [className]: true,
  });
  return (
  <section className={cls}>
  <div className="page-title-content" style={{ maxWidth: width }}>
  {children}
  </div>
  </section>
  );
};


interface ISectionTitle {
  title?: React.ElementType | string;
  className?: string;
  beautify?: boolean;
  colorful?: boolean;
}

export const SectionTitle = ({ title, className = '', beautify = false, colorful = false }: ISectionTitle) => {
  if (title === undefined || !beautify) {
    return <div className={`section-title ${className}`}>{title}</div>;
  }
  const leftImg = <SpriteIcons path="common" className={`btz${colorful ? '2' : ''}`} />;
  const rightImg = <SpriteIcons path="common" className={`bty${colorful ? '2' : ''}`} />;
  return (
    <div className={`section-title beautify ${className}`}>
      {leftImg}
      <span>{title}</span>
      {rightImg}
    </div>
  );
};

interface ISectionDot{
  children: any;
  className?: string;
}
export const SectionDot = (props: ISectionDot) => {
  const {className= '', children} = props;
  return (
    <div className={`section-dot-container ${className}`}>
      <SpriteIcons path="common" className="dot-img xbt" />
      <div className="section-dot-content">
        {children}
      </div>
    </div>
  );
};
