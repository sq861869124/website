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
  icon: 'icon1',
  title: '精细化权限管理',
  key: 'refinedAuthority',
  description: '根据项目、应用的用户角色、分支等不同纬度，细分了代码分支的访问和编辑的权限',
}, {
  icon: 'icon2_2',
  activeIcon: 'icon21',
  title: '分支规则管理',
  key: 'branchRule',
  description: '遵循 GitFlow 规范，平台沉淀分支和环境的约定关系同时， 支持用户自定义的分支规则配置',
}, {
  icon: 'icon31',
  title: '代码扫描和单元测试',
  key: 'codeScanning and unitTesting',
  description: '及时发现代码缺陷、安全漏洞、代码不规范等问题',
}, {
  icon: 'icon41',
  title: '外置代码仓库的托管',
  key: 'externalRepository',
  description: '支持业界主流代码仓库的无缝对接',
}];

const CodeHosting = () => {
  return (
    <div className="erda-home-code-host">
      <PageContent className="flex-box v-align-start two-column">
        <div className="flex-1 pr28 text-column">
          <CopmFadeInUp>
            <div className="card-title">代码仓库</div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="card-desc mt24">
              基于 Git 协议，平台默认企业级代码仓库，开箱即用，无需搭建或购买。
            </div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <Accordion defaultActiveKey={config[0].key} list={config} className="mt24" />
          </CopmFadeInUp>
        </div>
        <div className="images-column">
          <CopmFadeInUp>
            <ImgLazy width={620} height={531} className="code-branch" src="/images/home/Pic3.png" />
          </CopmFadeInUp>
        </div>
      </PageContent>
    </div>
  );
};

export default CodeHosting;
