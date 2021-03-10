import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const CopmFadeInUp = (props: {children: React.ReactNode}) => {
  return (
    <ScrollAnimation offset={20} animateOnce animateIn="fadeInUp">
      {props.children}
    </ScrollAnimation>
  )
}
