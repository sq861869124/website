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

import i18n from '~/i18n';

export const getHeaderMenus = ({ docUrl }: any) => [
  {
    name: i18n.t('overview'),
    url: '',
  },
  {
    name: i18n.t('market'),
    url: '/market/addon',
  },
  {
    name: i18n.t('document'),
    url: docUrl,
    jumpOut: true,
  },
  {
    name: i18n.t('partners'),
    url: '/',
    status: 'unrealized',
  },
  { name: 'Explore', url: '/' },
];

export const getFooterMenus = ({ docUrl }: any) => {
  return {
    about: {
      name: i18n.t('about'),
      // icon: 'gy',
      subList: [
        { name: ('about us'), url: '/' },
      ],
    },
    resource: {
      name: i18n.t('resource'),
      // icon: 'zy',
      subList: [
        {
          name: i18n.t('training and support'),
          url: docUrl,
          jumpOut: true,
        },
        {
          name: i18n.t('weChat public account'),
          img: '/images/common/wechat.jpg',
          className: 'mb8',
          width: 80,
          height: 80,
        },
      ],
    },
    serviceMarket: {
      name: i18n.t('service market'),
      // icon: 'fwsc',
      subList: [
        { name: i18n.t('extended service'), url: 'https://dice.terminus.io/market/addon', jumpOut: true },
        { name: i18n.t('pipeline task'), url: 'https://dice.terminus.io/market/action', jumpOut: true },
        { name: i18n.t('library'), url: 'https://dice.terminus.io/market/library', jumpOut: true },
        { name: i18n.t('mobile application'), url: 'https://dice.terminus.io/market/mobile', jumpOut: true },
      ],
    },
    email: {
      name: i18n.t('contact email'),
      // icon: 'lxyx',
      subList: [
        { name: 'marketing@terminus.io', url: 'mailto:marketing@terminus.io', jumpOut: true },
      ],
    },
    homePage: {
      name: i18n.t('enterprise official website'),
      // icon: 'qygw',
      subList: [
        { name: 'https://terminus.io', url: 'https://terminus.io', jumpOut: true },
      ],
    },
  };
};

export const introTitle = i18n.t('Enterprise Digital Platform (Dice)');

export const introSummary = i18n.t('a powerful platform');

export const introSlogan = '企业数字化平台（Dice）丰富的产品特性，提供给企业强大的底层技术支撑。';

export const introData = [
  {
    name: i18n.t('expand the market'),
    img: 'kzsc',
    path: 'index',
    desc: i18n.t('powerful service'),
  },
  {
    name: i18n.t('intelligent operation and maintenance'),
    img: 'znyw',
    path: 'index',
    desc: i18n.t('from the front-end'),
  },
  {
    name: i18n.t('cluster management'),
    img: 'jqgl',
    path: 'index',
    desc: i18n.t('supports multi-cloud management'),
  },
  {
    name: 'CI/CD',
    img: 'cicd',
    path: 'index',
    desc: i18n.t('based on the pipeline engine'),
  },
  {
    name: i18n.t('ecological compatibility'),
    img: 'stjr',
    path: 'index',
    desc: i18n.t('it is fully compatible with mainstream open');
  },
  {
    name: i18n.t('data task'),
    img: 'sjrw',
    path: 'index',
    desc: i18n.t('data task is a module that supports')
  },
  {
    name: i18n.t('service governance'),
    img: 'fwzl',
    path: 'index',
    desc: i18n.t('carry out one-stop microservice'),
  },
  {
    name: i18n.t('code hosting'),
    img: 'dmtg',
    path: 'index',
    desc: i18n.t('provide high-performance git'),
  },
  {
    name: i18n.t('high scalability'),
    img: 'gkzx',
    path: 'index',
    desc: i18n.t('support elastic expansion')
  },
];

export const caseData = {
  haier: {
    baseInfo: {
      img: 'hett',
      title: i18n.t('haier'),
      desc: i18n.t('haier relies on the best')
    },
    orgIntro: {
      desc:i18n.t('haier Group was founded'),
    },
    orgBg: {
      desc: i18n.t('as the scale of the enterprise expands'),
      tips: [
        i18n.t('serious waste of basic resources'),
        i18n.t('data lacks unified governance'),
        i18n.t('business innovation costs are high'),
      ],
    },
    orgAppeal: {
      desc: i18n.t('to create an interconnection platform '),
      tips: [
        i18n.t('service interoperability'),
        i18n.t('data interoperability'),
        i18n.t('infrastructure interoperability'),
      ],
    },
    solution: {
      desc: i18n.t('through the enterprise'),
      tips: [
        i18n.t('the Dice platform implements a unified'),
        '基于Dice平台打造中心应用，包括用户中心和业务中心，实现对亿级会员进行统一注册、统一认证、统一识别、统一管理，业务中心实现集团统一的产品中心、积分中心、订单中心、服务中心，实现对核心业务及用户的有效支撑。',
        '打造统一的开放平台，实现面向全集团的互联互通和能力开放。',
      ],
    },
    realizing: {
      desc: '现代化的数字技术，已经成为企业转型和创新的核心引擎！',
      img: 'jz',
      tips: [
        '统一：实现以微服务为核心的统一IT架构',
        '敏捷：研发体系、DevOps、APM使得快速迭代成为可能',
        '分钟级：资源弹性扩缩容从数天缩短到分钟级',
        '提速：上线发布从1小时降低到数分钟',
        '节资：减少资源占用 降低开发工作量',
        '开放：实现面向全集团的能力开放和复用',
        '自动化：自动化运维将误操作降低到0',
      ],
    },
  },
  xhsd: {
    baseInfo: {
      img: 'xhsdt',
      title: '新华书店',
      desc: '企业数字化平台（Dice）帮助新华书店构建以网上商城为中心的全网数字文化产业链',
    },
    orgIntro: {
      desc: '新华书店是中国国有图书发行企业，拥有 12000 家线下直营门店。\n新华书店网上商城，定位为新华书店集团统一的对外门户，旨在赋能全国上万家门店和出版社，实现线上线下互融互通，资源共享，形成一体化的用户体验，升级“悦”读体验。该项目是新华书店集团面向互联网新媒介的一次全面创新和大胆尝试，集团定位以网上商城为中心，将逐步完善会员管理、智慧门店、城市书房等业务板块，同时通过与各省市门店、图书馆、出版社、企事业单位打通，实现资源整合和全域营销。',
    },
    orgBg: {
      desc: '',
      tips: [
        '不同于企业传统中后台应用相对稳定的特点，创新业务要应对更快的迭代速度。新华书店项目由于其创新的多元性，需要应对更高的复杂度和更频繁的部署节奏，整个项目需要进行每周多次的迭代部署。',
        '业务体量大，需要能够应对全国性活动的瞬时流量峰值，保持系统的稳定运行，以一次明星预售活动为例，其峰值流量瞬间可以达到 100000 +QPS。',
        '需要突破传统 IT 架构强耦合的限制，来灵活支撑线下万余家门店逐步的对接和扩展，需要更强的微服务调度管理，也对运维监控提出了更高的要求。',
        '创新业务场景中需要大量的外部赋能，如 IoT 的能力，数据处理的能力等，这些能力企业很难从 0 到 1 完全自建。如何更好利用行业能力实现自有业务的快速构建是企业数字化转型的一个主要挑战。',
      ],
    },
    solution: {
      desc: '新华书店整体业务基于企业数字化平台（Dice）构建，Dice 为上层业务的开发提供良好的 PaaS 层支撑，让研发团队可以专注于业务本身，而无需关心 PaaS 层的问题和风险。',
      tips: [
        'Dice 可实现代码仓库、应用构建、部署管理、应用监控 DevOps 研发全流程支撑，同时支持应用研发周期中环境隔离，可以一键弹起应用，蓝绿发布保障服务在线，提高企业研发和部署效率，使得一周多次的部署迭代成为可能。',
        'Dice 支持应用的弹性伸缩，故障自动恢复，面对大流量冲击，可以通过快速增加资源的方式应对峰值流量的冲击，流量回落后退还资源，即需即用，降本增效。',
        'Dice 从可用性、功能性、性能和效率四个层面反映系统运行状况，可以做到实时定位系统运行问题，实时反馈。',
        'Dice 通过深度对接阿里巴巴的技术和商业能力，如：Middleware、Dataphin、IoT、安全等，可以对上层业务系统的开发提供有力支撑，如通过 Dice 为上层应用提供 IoT 能力，加速智慧门店场景的构建和实现。',
      ],
    },
  },
  zn: {
    baseInfo: {
      img: 'znzdt',
      title: '中南置地',
      desc: '通过企业数字化平台（Dice）践行房地产行业的智慧供应链',
    },
    orgIntro: {
      desc: '中南置地为中南建设集团旗下房地产旗舰品牌，在母集团多产业链融合联动的支持下，实现快速发展，获得2018中国房地产开发企业20强、2018中国房地产开发企业商业地产运营10强等多项荣誉。',
    },
    orgBg: {
      desc: '近些年来，房地产企业都在积极响应国家号召，进行企业改革，践行现代供应链。而企业现行的系统往往成了阻碍企业业务创新发展，提高供应商协同效率的拦路虎，主要由以下几点。',
      tips: [
        '烟囱式架构：传统企业的IT架构往往为烟囱式，系统之间完全割裂，通过接口来完成部分数据的引用和同步。以中南置地为例，成本系统和采购系统是其业务上的核心系统，而这两大系统由不同的建设方建设，系统的建设起点、数据口径等都不一致，导致两大系统集成困难。这不仅会造成企业各业务板块协同上出现困难，还会导致系统间数据封闭，无法统一沉淀，难以形成有效的分析指导。',
        '系统性能差：采用传统架构导致系统稳定性差，会常发生系统故障等情况；缺乏对系统的监控机制，使得企业无法及时定位问题并进行问题跟踪和系统优化。',
        '系统扩展性差：技术底层一旦出现问题，会直接影响业务系统。企业需要高扩展性的系统，来支持新需求的快速迭代上线，创新业务的实现。',
        '无法自主建设：传统企业并没有在IT部门建设上投入太多的资金，这也就直接造成企业的IT力量薄弱、IT建设水平较低。当企业实践数字化转型，便会发现IT力量无法支撑企业从技术系统到业务系统的建设。更甚者，企业原系统的外部建设方不提供源码，只能由其做系统的二次开发，这对企业IT力量提出了更大的挑战。',
      ],
    },
    solution: {
      tips: [
        '中台化架构：企业数字化平台（Dice）建设在IaaS层之上，作为企业构建业务系统的基层IT基础。在Dice之上，企业可以构建企业各大业务板块所需的共享服务，在此基础上去构建每个业务板块所需的业务系统。各大业务系统采用统一的技术口径、一致的数据规范，实现系统间业务协同、信息互通、数据共享。以中南置地为例，以Dice平台为基础构建“中南购供应链协同云平台”，提高中南置地各个部门之间、中南置地与供应商之间的协同能力。',
        '微服务架构支持智能运维：企业数字化平台（Dice）的微服务研发提供监控告警功能，帮助企业对系统进行立体式监控，从可用性、功能性、性能和效率四个层面反映系统运行状况，及时跟踪和定位系统问题，实现系统稳定性的大幅度提升。',
        '扩展市场支持业务创新：Dice的扩展市场拥有强大的服务和任务扩展能力。扩展服务包括基础中间件和微服务，企业可将持续集成的项目注册为微服务，来扩展供其他项目使用，实现自建业务中台的目标；任务扩展用于执行流水线，企业可使用或自行研发任务扩展以扩充流水线能力。',
        '整个产品对开发人员友好易用：企业化数字平台拥有可视化的界面，例如为企业提供了集群操控界面，包括运维视角大盘、分析报表，机器管理，服务目录等内容，简单易用；另外提供给技术人员标准化的研发流程框架，减少企业IT侧压力，基础开发人员可轻松上手。',
      ],
    },
  },
};


export const productTitleMap = {
  introduce: '简介',
  features: '产品特性',
  structure: '产品架构',
  functional: '产品功能',
};


export const productData = {
  microService: {
    baseInfo: {
      img: 'wfw',
      title: '微服务研发',
    },
    introduce: {
      desc: '提供一站式的微服务治理，包括服务注册与发现、配置管理、服务网关、监控与报警等功能，致力于帮助企业快速构建高扩展、低成本、高性能的分布式系统。提供前后端标准化的研发框架，帮助企业制定工程规范，轻松使用各项微服务和能力，提升企业研发效率。',
    },
    features: [
      {
        title: '一站式服务治理',
        desc: '可进行一站式的微服务生命周期管理，提供完善的租户和环境隔离机制；提供统一管控界面，聚合各业务网关、服务注册与发现、配置中心、分布式追踪、监控与告警等组件信息，提供一站式服务治理。',
      },
      {
        title: '标准化研发流程框架',
        desc: '提供前后端标准化的研发框架，帮助企业制定工程规范，轻松使用各项微服务和能力，也使得应用可以更加专注于业务逻辑，极大的提高了开发效率。',
      },
      {
        title: '生态兼容',
        desc: '全面兼容 Spring Cloud、Dubbo、Istio、Kubernetes 等主流开源产品，保证应用进行平滑迁移，并对主流功能做深度定制，满足企业级高性能高可靠需求。',
      },
      {
        title: '简单易用',
        desc: 'dice.yml一键弹起所有微服务，即开即用；企业应用多数场景无需改动，即可一站式接入，方便快捷；简洁易用的微服务治理和无侵入可视化的 APM 性能管理流程，使得微服务管理运维更加简单。',
      },
      {
        title: '平台高可用',
        desc: '提供一系列的服务治理策略，保障服务稳定运行；高可用的容器集群，完善的failover策略，可视化的全方位监控, 服务限流与熔断，一起为平台保驾护航。',
      },
      {
        title: '智能运维',
        desc: '从前端 APP 或浏览器到后端服务器、容器和代码，可对各个级别进行应用性能分析；应用监控可自动收集应用相关信息，及时掌握应用状态；分布式追踪提供端到端的追踪能力，精确定位功能和性能问题；支持实时告警和全栈根因定位，提升运维开发效率。',
      },
    ],
    structure: {
      img: 'wfwjg',
    },
    functional: [
      {
        img: 'zczx',
        title: '注册中心',
        desc: '注册中心帮助您更敏捷和容易地构建、交付和管理微服务平台，是构建以“服务”为中心的现代应用架构 (例如微服务范式、云原生范式) 的服务基础设施。利用注册中心，您可以发现、注册和管理微服务，并快速实现动态服务发现、服务注册、服务元数据及流量管理。',
      },
      {
        img: 'pzzx',
        title: '配置中心',
        desc: '配置中心能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限和流程治理等特性。利用配置中心，您可以在微服务、DevOps等场景下极大减轻配置管理的工作量，并增强配置管理的服务能力。',
      },
      {
        img: 'apiwg',
        title: 'API网关',
        desc: 'API网关可以为微服务提供API粒度的动态路由，ACL鉴权，流量限制，安全防护，实时监控等功能；还可以帮助企业统一管理内部系统API的对外开放，降低IT运维成本，提高系统灵活性的同时保障安全可靠。',
      },
      {
        img: 'apm',
        title: 'APM监控',
        desc: '洞察完整事务流程的性能表现，从前端 APP 或浏览器到后端服务器、容器和代码，可对各个级别进行应用性能分析，对系统的可用性和性能进行可视化管理，支持实时告警和全栈根因定位，提升运维开发效率。',
      },
    ],
  },
  hybridCloud: {
    baseInfo: {
      img: 'hhy',
      title: '混合云管理',
    },
    introduce: {
      desc: '企业级容器云平台，提供混合云池化管理、项目管理、持续集成、持续交付、运维监控等完善的 DevOps 功能。为企业带来一站式的高效管理、敏捷开发、持续交付、持续运维体验，满足企业对敏捷开发和资源高效管理的需求。',
    },
    features: [
      {
        title: '云时代最佳实践',
        desc: '秉持 IaC 理念，提供代码托管、持续集成、多套环境、流水线、版本管理等一站式的 DevOps 体验，提高研发能效。',
      },
      {
        title: '多云管控',
        desc: '同时支持 Kubernetes、DC/OS 等集群架构，企业可以专注业务研发，而无需关心底层问题和风险；屏蔽集群技术，支持企业无缝迁移底层架构。',
      },
      {
        title: '资源池化',
        desc: '将资源进行池化管理，最大限度的利用资源，避免资源浪费；支持动态扩缩容，按需使用资源，企业无需关心单个机器的管理；结合精细化运维，所有资源的用途一目了然，进行资源的精确分配，方便成本控制和部门核算。',
      },
      {
        title: '精细化运维',
        desc: '提供集群操控界面，包括运维视角大盘、分析报表、机器管理、服务目录等内容，为企业服务的正常运行保驾护航，以便实现集群的高效和精细化运维。',
      },
      {
        title: '一致性部署和混合部署兼容',
        desc: '一致性部署，帮助企业轻松地进行云间系统迁移；混合部署，错峰提高企业的资源利用率。',
      },
      {
        title: '扩展市场',
        desc: '开放市场，企业可自由选择第三方提供的扩展功能，也可根据需要自行开发定制的扩展功能。',
      },
    ],
    functional: [
      {
        img: 'xmgl',
        title: '项目管理',
        desc: '针对企业项目侧视角，提供项目元信息管理、成员管理等内容，满足企业项目管理方面的诸多诉求；提供任务工单、记录反馈项目进度、报告项目异常事件等内容；企业可设置通知组，有效聚合通知消息到个人，比如事件告警、代码质量异常等。',
      },
      {
        img: 'kzsc',
        title: '扩展市场',
        desc: '强大的服务和任务扩展能力。扩展服务包括基础中间件和微服务，企业可将持续集成的项目注册为微服务，来扩展供其他项目使用，实现自建业务中台的目标；任务扩展用于执行流水线，企业可使用或自行研发任务扩展以扩充流水线能力。',
      },
      {
        img: 'cxjc',
        title: '持续集成',
        desc: '基于流水线引擎，可自定义持续集成过程；支持任意语言构建，且扩展市场提供了热门开发语言的构建工具（buildpack）；提供版本管理功能，包含构建产出版本，版本历史，版本回退等内容；提供代码质量分析、自动化接口测试、自动化单元测试等功能，可通过设置 hook 灵活控制触发自动测试；提供了代码分析、构建分析等能效分析。',
      },
      {
        img: 'zjj',
        title: '中间件平台',
        desc: '提供了多款高可用中间件（Mysql、zookeeper、redis 等），以及每款中间件的精细化运维能力；为每款中间件提供了运维后台，支持变配、扩缩容、备份等操作。',
      },
      {
        img: 'jqgl',
        title: '集群管理',
        desc: '支持多云管控，屏蔽多云异构；提供了集群操控界面，包括运维视角大盘、分析报表，机器管理，服务目录等内容；对资源进行池化管理，按需使用，避免浪费；支持企业多租户的形式，集群可租用给其他企业使用，并保证企业间资源隔离。',
      },
    ],
  },
  fastDataStack: {
    baseInfo: {
      img: 'ksj',
      title: '快数据治理',
    },
    introduce: {
      desc: '帮助企业快速分析来自不同系统的实时数据，指导企业迅速作出商业决策。分布式存储和计算的架构使得平台具有高稳定性和扩展性；计算和存储分离给计算引擎的选择带来灵活性；基于Dice的一站式管理，提升用户的易用性。',
    },
    features: [
      {
        title: '毫秒级的数据处理',
        desc: '实时采集、存储和分析来自不同数据源的数据，最快可将延时降低到毫秒级别；高性能的存储和计算组件可以根据需要快速地扩展，使计算和存储能力获得线性增长；简洁的用户界面和使用方式促进项目快速实施。',
      },
      {
        title: '可视化的数据任务',
        desc: '数据任务以可视化的流程进行展现，帮助企业进行实时业务的风险监控与告警。',
      },
      {
        title: '灵活高效',
        desc: '所有组件容器化部署，使得部署、运维可高效进行；计算和存储分离，同一份数据可以灵活切换不同的计算引擎分析；分布式的存储和计算架构，可以线性增加节点，灵活地扩展平台能力。',
      },
      {
        title: '智能易用',
        desc: '平台支持主流的机器学习算法开发和使用，能同时基于流式数据和历史数据进行复杂的数据挖掘活动。',
      },
      {
        title: '高稳定性',
        desc: '存储和计算引擎都具备很高的容错性，失败的计算任务能自我修复，数据默认多个备份，不易失；数据作业自带版本管理，具备从设计、开发到运维的全生命周期管理能力；Dice的监控平台能对组件和数据任务进行监控，并实时预警。',
      },
      {
        title: '规范便捷',
        desc: '快数据应用的数据模型原生遵循阿里巴巴OneData理念，能快速查到数据模型中的维度、指标等要素。',
      },
      {
        title: '覆盖全生命周期',
        desc: '内置数据模型完整覆盖 ETL、建模和治理的全生命周期，实时驱动业务响应数据变化。',
      },
      {
        title: '可移植性高',
        desc: '基于Git Repo管理的数据模型具有很高的可移植性，显著降低基于企业数据仓库的数据应用开发周期和成本，还可大大降低数据仓库、数据处理、数据应用的运维成本。',
      },
    ],
    structure: {
      img: 'ksjjg',
    },
    functional: [
      {
        img: 'sjrw',
        title: '数据任务',
        desc: '数据任务是快数据应用中支持数据任务创建、运行和维护的模块。基于Dice平台一体化的工作流引擎和调度引擎，可灵活、快速地配置数据pipeline, 操作简单高效。',
      },
      {
        img: 'sjmx',
        title: '数据模型',
        desc: '数据模型管理业务板块、数据域、维度和业务过程等内容，以星型图的方式可视化展示维度和业务过程的关系。',
      },
      {
        img: 'sjjs',
        title: '数据集市',
        desc: '数据集市管理数据模型产出的数据集市表，可以通过搜索快速定位到数据表，也能查看表中详细的字段信息和指标信息。',
      },
      {
        img: 'sjtj',
        title: '数据统计',
        desc: '统计模块搜集快数据应用代码提交和任务构建的数据，能准确反映出应用的活动趋势，助力于研发效能的管理。',
      },
    ],
  },
};
