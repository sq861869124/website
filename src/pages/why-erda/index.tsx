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
import { SpriteIcons } from '~/common';
import './index.scss';

const config = [{
  title: '免部署，免运维',
  bg: 'neetnot-deploy',
  description: '专注于自己的业务应用，繁琐的运维工作交给平台完成',
}, {
  title: '安全',
  bg: 'safe',
  description: '充分利用公有云平台安全架构，对平台进行了全方位的加固和保护',
}, {
  title: '多云架构',
  bg: 'multi-cloud',
  description: '业务应用解绑云厂商，轻松实现多云间的业务迁移，无需担心被单一云厂商锁死',
}, {
  title: '一站式平台',
  bg: 'one-site',
  description: '平台功能完整，从开发到运维，从业务到数据实现了全面的覆盖',
}, {
  title: '弹性缩扩容',
  bg: 'scla',
  description: '节点资源能够方便的进行动态扩缩容，各种业务大促活动轻松应对',
}, {
  title: '自动化',
  bg: 'auto',
  description: '全自动化的开发流程，无需专业的运维工程师支持',
}, {
  title: '云原生',
  bg: 'cloud-origin',
  description: '基于 Kubernetes + 云架构，天生云原生，生态友好',
}, {
  title: '专家服务',
  bg: 'expert-server',
  description: '7*24小时专家在线服务',
}];

const WhyErda = () => {
  return (
    <div className="erda-why-erda pt0">
      <div className="full-width-header v-flex-box">
        <div className="title">为什么选择 Erda Cloud?</div>
      </div>
      <PageContent className="erda-why-erda-body">
        <div className="v-align-start reasions">
          {
            config.map((item) => {
              return (
                <div className="reasions-item flex-box v-align-start" key={item.title}>
                  <div className="logo item-left">
                    <SpriteIcons path="why" className={item.bg} />
                  </div>
                  <div className="flex-1 item-right">
                    <div className="title mb4">{item.title}</div>
                    <div className="desc">{item.description}</div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </PageContent>
    </div>
  );
};

export default WhyErda;
