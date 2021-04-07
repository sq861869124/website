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

import React from 'react';
import LazyLoad from 'react-lazyload';
// @ts-ignore
import { LazyLoadProps } from '@types/react-lazyload';
import classNames from 'classnames';
import { useMobile } from 'common/utils';
import './img-lazy.scss';

export interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className?: string;
  lazy?: boolean;
  lazyProps?: LazyLoadProps;
}

const ImgLazy = ({ className, lazy = true, lazyProps, width, height, ...rest }: IProps) => {
  const isMobile = useMobile();
  const cls = classNames('erda-lazyload-img-wrap', {
    [`${className}`]: !!className,
  });
  const lProps: LazyLoadProps = {
    once: true,
    ...lazyProps,
  };
  const imgProps = isMobile ? { ...rest, width: '100%' } : { ...rest, width, height };
  return (
    <div className={cls}>
      {
        lazy ? (
          <LazyLoad {...lProps}>
            <img alt="" {...imgProps} />
          </LazyLoad>
        ) : (
          <div>
            <img alt="" {...imgProps} />
          </div>
        )
      }
    </div>
  );
};

export default ImgLazy;
