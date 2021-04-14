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
import PageContent from '~/layout/common/page-content';
import ImgLazy from 'pages/component/img-lazy';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import { useMobile } from 'common/utils';
import { Link } from 'react-router-dom';
import { Icon } from 'common';
import imagesMap from './images';

const config = {
  title: '为什么选择 Erda Cloud?',
  description: '采用多云架构的一站式企业数字化平台，为企业提供 DevOps、微服务治理、多云管理以及快数据管理等云原生服务。',
};


const MainCard = () => {
  const isMobild = useMobile();
  return (
    <PageContent className="erda-home-main-card">
      <CopmFadeInUp>
        <div className="card-title">{config.title}</div>
      </CopmFadeInUp>
      <CopmFadeInUp>
        <div className="card-desc mt16">
          {config.description}
          <Link className="link-to" to="/why-erda">更多<Icon type="Rightarrow" /></Link>
        </div>
      </CopmFadeInUp>
      <div className="img-wrapper mt20">
        <CopmFadeInUp>
          {
            isMobild ? null : <ImgLazy lazy={false} width={295} height={430} src={imagesMap.mainLeft} />
          }
          <ImgLazy lazy={false} width={430} height={430} src={imagesMap.mainCenter} />
          {
            isMobild ? null : <ImgLazy lazy={false} width={295} height={430} src={imagesMap.mainRight} />
          }
        </CopmFadeInUp>
      </div>
    </PageContent>
  );
};

export default MainCard;
