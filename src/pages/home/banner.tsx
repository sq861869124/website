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
import { Button } from 'antd';
import { CopmFadeInUp } from 'pages/component/animate-comp';

const Banner = () => {
  return (
    <div className="erda-home-banner">
      <div className="erda-home-banner-mask" />
      <PageContent>
        <CopmFadeInUp delay={0}>
          <div className="erda-home-banner-title">Erda Cloud</div>
        </CopmFadeInUp>
        <CopmFadeInUp delay={100}>
          <div className="erda-home-banner-desc mt16">基于多云架构的一站式企业数字化平台，为企业提供 DevOps、微服务治理、多云管理以及快数据管理等云厂商无绑定的 IT 服务</div>
        </CopmFadeInUp>
        <CopmFadeInUp delay={200}>
          <Button
            className="erda-home-banner-free-trial mt24"
            onClick={() => {
              window.open('/login-dice');
            }}
          >免费试用
          </Button>
        </CopmFadeInUp>
        <div className="earth">
          <img width={550} height={550} src="/images/home/banner/earth.png" alt="" />
        </div>
      </PageContent>
    </div>
  );
};

export default Banner;
