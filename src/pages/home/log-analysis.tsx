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
import Accordion, { IListItem } from 'pages/home/accordion';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import ImgLazy from 'pages/component/img-lazy';

const config: IListItem[] = [{
  icon: 'icon12',
  key: 'oneStopServiceForLogData',
  title: '提供日志数据的一站式服务',
  description: '提供日志数据采集、消费、投递和查询分析等功能，对日志进行结构化标签检索，并能自动关联日志和调用链路，实现全链路的日志诊断分析',
}, {
  icon: 'icon3',
  key: 'customLogAnalysisRules',
  title: '自定义日志分析规则',
  description: '通过对日志添加清洗规则，实现日志文件结构化，满足灵活的业务日志可视化和告警需求',
}, {
  icon: 'icon2',
  key: 'logDataVisualizationAndAlarm',
  title: '日志数据可视化和告警',
  description: '对日志分析的结果，提供灵活的自定义图表/告警配置，满足业务监控、风险预警、性能分析等多种监控运维场景的展示和告警需求',
}];

const LogAnalysis = () => {
  return (
    <div className="erda-home-log">
      <PageContent className="flex-box v-align-start two-column">
        <div className="erda-home-cicd-img images-column">
          <CopmFadeInUp>
            <ImgLazy width={620} height={531} className="cici-img" src="/images/home/Pic-log.png" />
          </CopmFadeInUp>
        </div>
        <div className="flex-1 pl28 text-column">
          <CopmFadeInUp>
            <div className="card-title">日志分析管理</div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="card-desc mt24">
              日志分析是针对应用日志进行搜索分析的服务，协助用户深入挖掘日志数据的业务价值
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

export default LogAnalysis;
