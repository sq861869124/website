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
  icon: 'icon91',
  title: '应用拓扑自动发现',
  key: 'applicationTopologyAutomaticDiscovery',
  description: '根据微服务调用关系自动绘制全局拓扑架构图，能够清晰洞察微服务之间的关系和调用情况',
}, {
  icon: 'icon101',
  title: '关键业务主动监控',
  key: 'activeMonitoringOfKeyBusiness',
  description: '对重要的业务地址发起不间断的定时请求，判断应用服务的健康情况，主动统计性能和健康信息',
}, {
  icon: 'icon11',
  title: '异常事务和慢事务诊断',
  key: 'diagnosisOfAbnormalAndSlowTransactions',
  description: '全面的应用性能监控，覆盖 Web 接口耗时、RPC 调用耗时、数据库慢查询、缓存等，轻松追查系统慢问题',
}, {
  icon: 'icon12_2',
  activeIcon: 'icon121',
  title: '可定制的可视化大盘和告警',
  key: 'customizableVisualizationDashboardAndAlarms',
  description: '提供灵活的自定义图表/告警配置，满足业务监控、风险预警、性能分析等多种监控运维场景的展示和告警需求',
}, {
  icon: 'icon13_2',
  activeIcon: 'icon131',
  title: '全链路诊断和追踪',
  key: 'fullLinkDiagnosisAndTracking',
  description: '根据微服务每次调用链路中各请求点信息捕获，实现整个链路调用信息的全透明化，高效便捷帮忙开发对于应用调用链路的诊断分析',
}];

const Monitor = () => {
  return (
    <div className="erda-home-monitor">
      <PageContent className="flex-box v-align-start two-column">
        <div className="flex-1 pr40 text-column">
          <CopmFadeInUp>
            <div className="card-title">应用性能管理</div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="card-desc mt24">
              分布式系统的应用程序性能监视工具，为基于云原生（Docker，Kubernetes，Mesos）的微服务而量身定制，覆盖端到服务的完整链路。
            </div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <Accordion defaultActiveKey={config[0].key} list={config} className="mt24" />
          </CopmFadeInUp>
        </div>
        <div className="erda-home-monitor-img images-column">
          <CopmFadeInUp>
            <ImgLazy className="monitor-img" width={620} height={531} src="/images/home/Pic5.png" />
          </CopmFadeInUp>
        </div>
      </PageContent>
    </div>
  );
};

export default Monitor;
