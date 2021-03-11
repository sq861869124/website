
import * as React from 'react';

export const TouchContainer = ({children, next, prev}: any) => {

  const MIN_TOUCH_DISTENCE = 50;
  const [startX, setStartX] = React.useState(0);
  const [endX, setEndX] = React.useState(0);
  const handleTouchEnd = React.useCallback((e: any) => {
    if (startX === 0 || endX === 0)return;
    let distance = Math.abs(startX - endX);
    if (distance > MIN_TOUCH_DISTENCE) {
      if (startX > endX) {
        next && next();
      } else {
        prev && prev();
      }
    }
  }, [startX, endX]);
  if (React.Children.count(children) !== 1) {
    console.error('error: TouchContainer require only one child');
    return children;
  }


  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e: any) => {
    setEndX(e.touches[0].clientX);
  };

  return React.cloneElement(
    React.isValidElement(children) ? children :  <span>{children}</span>,
    {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  );
};
