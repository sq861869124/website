import React from 'react';
import PageContent from '~/components/common/page-content';
import ImgLazy from 'pages/component/img-lazy';
import Accordion, {IListItem} from 'pages/home/accordion';

const config:IListItem[] = [{
  icon: 'icon91',
  title: '无代码侵入，全方位监控',
  key: 'noCodeIntrusionAllRoundMonitoring',
  description: '集群组建、中间件、服务指标的全方位监控，对于 Java 、JS、Node等技术框架的应用来说无任何代码侵入',
},{
  icon: 'icon101',
  title: '自定义监控数据',
  key: 'customMonitoringData',
  description: '支持根据个人关注的内容进行自定义的监控 Dashboard 配置',
},{
  icon: 'icon11',
  title: '自定义监控告警',
  key: 'customMonitoringAlarm',
  description: '支持灵活的监控规则和通知对象的配置，满足应用运维人员的个性化要求',
},{
  icon: 'icon12_2',
  activeIcon: 'icon121',
  title: '丰富的运维总结报告',
  key: 'richOperationAndMaintenanceSummary',
  description: '根据应用一段时间的运行分析，平台会给关注者提供统计分析性报告，为应用管理者运营决策提供数据支持',
},{
  icon: 'icon13_2',
  activeIcon: 'icon131',
  title: '全链路诊断和追踪',
  key: 'fullLinkDiagnosisAndTracking',
  description: '根据微服务每次调用链路中各请求点信息捕获，实现整个链路调用信息的全透明化，高效便捷帮忙开发对于应用调用链路的诊断分析',
}]

const Monitor = () => {
  return (
    <div className="erda-home-monitor">
      <PageContent className="flex-box v-align-start two-column">
        <div className="flex-1 pr40 text-column">
          <div className="card-title">应用全方位性能<span className="card-title-height-light">监控</span></div>
          <div className="card-desc mt24">
            分布式系统的应用程序性能监视工具，为基于云原生（Docker，Kubernetes，Mesos）的微服务而量身定制，覆盖端到服务的完整链路。
          </div>
          <Accordion defaultActiveKey="noCodeIntrusionAllRoundMonitoring" list={config} className="mt24"/>
        </div>
        <div className="erda-home-monitor-img images-column">
          <ImgLazy className="monitor-img" width={620} height={531} src="/images/home/Pic5.png"/>
        </div>
      </PageContent>
    </div>
  )
}

export default Monitor;
