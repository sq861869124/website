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
import Accordion, { IListItem } from 'pages/home/accordion';
import { CopmFadeInUp } from 'pages/component/animate-comp';

const config: IListItem[] = [{
  icon: 'icon5_2',
  activeIcon: 'icon51',
  title: '图形化编排',
  key: 'graphicalOrchestration',
  description: '提供拖拽式的图形化编辑方式，使 CI/CD 编辑变的更简单',
}, {
  icon: 'icon61',
  title: '内置丰富的 Action 和 Addon 能力',
  key: 'built-inRichActionAndAddonCapabilities',
  description: '平台内置丰富的流水线服务模板能力，根据不同开发语言等维度可直接使用',
}, {
  icon: 'icon71',
  title: '全面的构建类型',
  key: 'comprehensiveBuildType',
  description: '平台全面支持 Java、Go、Node、Python 等各种开发语言框架，支持应用 Docker 镜像、Jar 包、移动应用安装包等软件包的构建',
}, {
  icon: 'icon81',
  title: '丰富的发布管理',
  key: 'richReleaseManagement',
  description: '支持根据发布等级的需要，流水线中加入指定审批人审批同意才能部署，也可以通过企业级封网来统一控制企业的部署审批管理',
}];

const CiCd = () => {
  return (
    <div className="erda-home-cicd">
      <PageContent className="flex-box v-align-start two-column">
        <div className="erda-home-cicd-img images-column">
          <CopmFadeInUp>
            <ImgLazy width={620} height={531} className="cici-img" src="/images/home/Pic4.png" />
          </CopmFadeInUp>
        </div>
        <div className="flex-1 pl28 text-column">
          <CopmFadeInUp>
            <div className="card-title">自动化CI/CD</div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="card-desc mt24">
              提供代码扫描构建、测试、部署的流水线服务，让应用的持续集成更简单
            </div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <Accordion defaultActiveKey={config[0].key} list={config} className="mt24" />
          </CopmFadeInUp>
        </div>
      </PageContent>
    </div>
  );
};

export default CiCd;
