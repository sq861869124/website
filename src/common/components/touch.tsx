// Copyright (c) 2021 Terminus, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import * as React from 'react';

export const TouchContainer = ({ children, next, prev }: any) => {
  const MIN_TOUCH_DISTENCE = 50;
  const [startX, setStartX] = React.useState(0);
  const [endX, setEndX] = React.useState(0);
  const handleTouchEnd = React.useCallback((e: any) => {
    if (startX === 0 || endX === 0) return;
    const distance = Math.abs(startX - endX);
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
    React.isValidElement(children) ? children : <span>{children}</span>,
    {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  );
};
