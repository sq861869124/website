import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon as CustomIcon } from 'common';

import './error-page.scss';


const NotFound = () => {
  return (
    <div className="not-found-page basic-error-page">
      <div className="info gray-bg">
        <CustomIcon type="404" color />
        <div className="desc">
          <span>啊哦，这里没有任何内容</span>
          <Link aria-label="go back to home page" to="/"> 返回首页 </Link>
        </div>
      </div>
    </div>
  );
};


export {
  NotFound,
};
