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

import { IProps as IWingProps } from './double-wing'
import { IProps as ITest } from './test-manage'

interface IConfig {
  codeRepositories: IWingProps;
  cicd: IWingProps;
  monitor: IWingProps;
  log: IWingProps;
  multiCloud: IWingProps;
  testManage: ITest;
}

const HomeConfig: IConfig = {
  codeRepositories: {
    identifier: 'code-repositories',
    reverse: false,
    docProps: {
      title: '代码仓库',
      description: '基于 Git 协议，平台默认企业级代码仓库，开箱即用，无需搭建或购买',
      list: [ {
        icon: 'icon1',
        title: '精细化权限管理',
        key: 'refinedAuthority',
        description: '根据项目、应用的用户角色、分支等不同纬度，细分了代码分支的访问和编辑的权限'
      }, {
        icon: 'icon2_2',
        activeIcon: 'icon21',
        title: '分支规则管理',
        key: 'branchRule',
        description: '遵循 GitFlow 规范，平台沉淀分支和环境的约定关系同时， 支持用户自定义的分支规则配置'
      }, {
        icon: 'icon31',
        title: '代码扫描和单元测试',
        key: 'codeScanning and unitTesting',
        description: '及时发现代码缺陷、安全漏洞、代码不规范等问题'
      }, {
        icon: 'icon41',
        title: '外置代码仓库的托管',
        key: 'externalRepository',
        description: '支持业界主流代码仓库的无缝对接'
      } ]
    },
    style: { backgroundColor: '#F7F9FF' },
    imgProps: {
      offSet: [ - 20, 0 ],
      src: '/images/home/Pic3.png',
      width: 620,
      height: 531,
      className: 'code-repositories-img'
    }
  },
  cicd: {
    identifier: 'cicd',
    docProps: {
      title: '自动化CI/CD',
      description: '提供代码扫描构建、测试、部署的流水线服务，让应用的持续集成更简单',
      list: [ {
        icon: 'icon5_2',
        activeIcon: 'icon51',
        title: '图形化编排',
        key: 'graphicalOrchestration',
        description: '提供拖拽式的图形化编辑方式，使 CI/CD 编辑变的更简单'
      }, {
        icon: 'icon61',
        title: '内置丰富的 Action 和 Addon 能力',
        key: 'built-inRichActionAndAddonCapabilities',
        description: '平台内置丰富的流水线服务模板能力，根据不同开发语言等维度可直接使用'
      }, {
        icon: 'icon71',
        title: '全面的构建类型',
        key: 'comprehensiveBuildType',
        description: '平台全面支持 Java、Go、Node、Python 等各种开发语言框架，支持应用 Docker 镜像、Jar 包、移动应用安装包等软件包的构建'
      }, {
        icon: 'icon81',
        title: '丰富的发布管理',
        key: 'richReleaseManagement',
        description: '支持根据发布等级的需要，流水线中加入指定审批人审批同意才能部署，也可以通过企业级封网来统一控制企业的部署审批管理'
      } ]
    },
    reverse: true,
    style: { backgroundColor: '#F7F9FF' },
    imgProps: {
      offSet: [ - 30, 0 ],
      src: '/images/home/Pic4.png',
      width: 620,
      height: 531,
      className: 'cicd-img'
    }
  },
  monitor: {
    identifier: 'monitor',
    reverse: false,
    docProps: {
      title: '应用性能管理',
      description: '分布式系统的应用程序性能监视工具，为基于云原生（Docker，Kubernetes，Mesos）的微服务而量身定制，覆盖端到服务的完整链路',
      list: [ {
        icon: 'icon91',
        title: '应用拓扑自动发现',
        key: 'applicationTopologyAutomaticDiscovery',
        description: '根据微服务调用关系自动绘制全局拓扑架构图，能够清晰洞察微服务之间的关系和调用情况'
      }, {
        icon: 'icon101',
        title: '关键业务主动监控',
        key: 'activeMonitoringOfKeyBusiness',
        description: '对重要的业务地址发起不间断的定时请求，判断应用服务的健康情况，主动统计性能和健康信息'
      }, {
        icon: 'icon11',
        title: '异常事务和慢事务诊断',
        key: 'diagnosisOfAbnormalAndSlowTransactions',
        description: '全面的应用性能监控，覆盖 Web 接口耗时、RPC 调用耗时、数据库慢查询、缓存等，轻松追查系统慢问题'
      }, {
        icon: 'icon12_2',
        activeIcon: 'icon121',
        title: '可定制的可视化大盘和告警',
        key: 'customizableVisualizationDashboardAndAlarms',
        description: '提供灵活的自定义图表/告警配置，满足业务监控、风险预警、性能分析等多种监控运维场景的展示和告警需求'
      }, {
        icon: 'icon13_2',
        activeIcon: 'icon131',
        title: '全链路诊断和追踪',
        key: 'fullLinkDiagnosisAndTracking',
        description: '根据微服务每次调用链路中各请求点信息捕获，实现整个链路调用信息的全透明化，高效便捷帮忙开发对于应用调用链路的诊断分析'
      } ]
    },
    imgProps: {
      offSet: [ - 56, 0 ],
      src: '/images/home/Pic5.png',
      width: 620,
      height: 531,
      className: 'monitor-img'
    }
  },
  log: {
    identifier: 'log-analysis',
    docProps: {
      title: '日志分析管理',
      description: '日志分析是针对应用日志进行搜索分析的服务，协助用户深入挖掘日志数据的业务价值',
      list: [ {
        icon: 'icon12',
        key: 'oneStopServiceForLogData',
        title: '提供日志数据的一站式服务',
        description: '提供日志数据采集、消费、投递和查询分析等功能，对日志进行结构化标签检索，并能自动关联日志和调用链路，实现全链路的日志诊断分析'
      }, {
        icon: 'icon3',
        key: 'customLogAnalysisRules',
        title: '自定义日志分析规则',
        description: '通过对日志添加清洗规则，实现日志文件结构化，满足灵活的业务日志可视化和告警需求'
      }, {
        icon: 'icon2',
        key: 'logDataVisualizationAndAlarm',
        title: '日志数据可视化和告警',
        description: '对日志分析的结果，提供灵活的自定义图表/告警配置，满足业务监控、风险预警、性能分析等多种监控运维场景的展示和告警需求'
      } ]
    },
    reverse: true,
    style: { backgroundColor: '#F7F9FF' },
    imgProps: {
      offSet: [ - 30, 0 ],
      src: '/images/home/Pic-log.png',
      width: 620,
      height: 531,
      className: 'log-analysis-img'
    }
  },
  multiCloud: {
    identifier: 'multi-cloud',
    docProps: {
      title: '多云管理',
      description: "为跨不同云厂商或自建的 Kubernetes 集群，提供统一的控制平面，让资源管控更便捷，让业务应用更灵活，避免云厂商锁定",
      list: [{
        icon: 'yunwei',
        key: 'whiteScreenOperationMaintenanceKubernetes',
        title: '白屏化运维 Kubernetes',
        description : "在多云管理的 Web 界面上，无需登机器，即可完成所有 Kubernetes 运维操作。基于 TLS 加密，ACL 控制， 以及日志审计，所有运维操作均安全可追溯"
      },{
        icon: 'bianpai',
        key: 'declarativeOrchestrationOfCloudServices',
        title: '云服务声明式编排',
        description : "基于声明式配置灵活编排云厂商提供的各类中间件云服务，例如数据库、消息队列、对象存储等。提高运维效率，加速业务上云"
      },{
        icon: 'yunying',
        key: 'digitalAssetOperation',
        title: '数字资产运营',
        description : "从企业视角，统筹分析所有数字资产的资源利用率、可用性，以及云厂商账单等数据。纵向查看热点和空闲资产，横向对比项目开销和资源预算"
      }]
    },
    imgProps: {
      offSet: [ - 30, 0 ],
      src: '/images/home/Pic9.png',
      width: 620,
      height: 531,
      className: 'log-analysis-img'
    }


  },
  testManage: {
    title: '测试管理',
    description: '提供包含代码单元测试、代码安全测试、手工测试用例管理和自动化测试的全方位的测试管理能力',
    list: [ {
      icon: 'bug-manage',
      title: '测试用例和缺陷管理',
      description: '支持手工用例、接口用例、用例计划、测试报告以及缺陷的全测试过程管理'
    }, {
      icon: 'auto-test',
      title: '自动化测试',
      description: '支持测试用例和测试场景的拖拽式图形化编排，并且提供多能力的断言和 Mock 能力'
    }, {
      icon: 'data-bank',
      title: '数据银行',
      description: '平台在测试数据源的管理基础之上，通过配置单可以通过 sql 大批量进行测试数据准备工作，配置单、接口测试用例可以通过图形化编排流水线无缝对接工作。'
    }, {
      icon: 'full-link',
      title: 'API 全生命周期管理',
      description: '平台内置功能无缝对接，让开发者从接口设计、接口测试、接口发布一站式完成'
    } ]
  }
}

export default HomeConfig
