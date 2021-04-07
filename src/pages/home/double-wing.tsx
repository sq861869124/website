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
import classNames from 'classnames';
import PageContent from '~/layout/common/page-content';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import ImgLazy, { IProps as ILazy } from 'pages/component/img-lazy';
import Accordion, { IListItem } from 'pages/home/accordion';
import './double-wing.scss';

interface IDocProps {
  list: IListItem[];
  title: string;
  description: string;
}

interface IImgProps extends ILazy{
  offSet?: [number, number];
}

export interface IProps {
  className?: string;
  identifier: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  docProps: IDocProps;
  imgProps: IImgProps;
}

const DocColumn = (props: Merge<IDocProps, { reverse: boolean }>) => {
  const { title, description, list, reverse } = props;
  const cls = classNames('flex-1 text-column', {
    pl28: reverse,
    pr28: !reverse,
  });
  return (
    <div className={cls}>
      <CopmFadeInUp>
        <div className="card-title">{title}</div>
      </CopmFadeInUp>
      <CopmFadeInUp>
        <div className="card-desc mt24">
          {description}
        </div>
      </CopmFadeInUp>
      <CopmFadeInUp>
        <Accordion defaultActiveKey={list[0].key} list={list} className="mt24" />
      </CopmFadeInUp>
    </div>
  );
};

const ImgColumn = ({ offSet, ...props }: IImgProps) => {
  const style: React.CSSProperties = {};
  const [top, left] = offSet || [];
  if (top) {
    style.marginTop = top;
  }
  if (left) {
    style.marginLeft = left;
  }
  return (
    <div className="images-column" style={style}>
      <CopmFadeInUp>
        <ImgLazy {...props} />
      </CopmFadeInUp>
    </div>
  );
};

const DoubleWing = (props: IProps) => {
  const { identifier, className, reverse = false, imgProps, docProps, style = {} } = props;
  const cls = classNames('erda-double-wings', {
    [`${identifier}`]: true,
    [`${className}`]: !!className,
    reverse,
  });

  const RenderContent = () => {
    if (reverse) {
      return (
        <>
          <ImgColumn {...imgProps} />
          <DocColumn {...docProps} reverse={reverse} />
        </>
      );
    }
    return (
      <>
        <DocColumn {...docProps} reverse={reverse} />
        <ImgColumn {...imgProps} />
      </>
    );
  };

  return (
    <div className={cls} style={style}>
      <PageContent className="flex-box v-align-start two-column">
        <RenderContent />
      </PageContent>
    </div>
  );
};

export default DoubleWing;
