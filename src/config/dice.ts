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

export const introSlogan = i18n.t('rich product features of the enterprise digital platform (Dice)');

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
    desc: i18n.t('it is fully compatible with mainstream open'),
  },
  {
    name: i18n.t('data task'),
    img: 'sjrw',
    path: 'index',
    desc: i18n.t('data task is a module that supports'),
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
    desc: i18n.t('support elastic expansion'),
  },
];

export const caseData = {
  haier: {
    baseInfo: {
      img: 'hett',
      title: i18n.t('haier'),
      desc: i18n.t('haier relies on the best'),
    },
    orgIntro: {
      desc: i18n.t('haier Group was founded'),
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
        i18n.t('based on the Dice platform'),
        i18n.t('create an open platform'),
      ],
    },
    realizing: {
      desc: i18n.t('modern digital technology'),
      img: 'jz',
      tips: [
        i18n.t('unification: realize a unified IT architecture centered on microservices'),
        i18n.t('agile: R&D system, DevOps, APM make rapid iteration possible'),
        i18n.t('minute level: Resource elastic expansion and shrinkage are reduced from a few days to minutes'),
        i18n.t('speed ​​up: the online release is reduced from 1 hour to several minutes'),
        i18n.t('saving resources: reduce resource occupation and reduce development workload'),
        i18n.t('openness: realize the ability opening and reuse for the whole group'),
        i18n.t('automation: Automated operation and maintenance reduces misoperations to zero'),
      ],
    },
  },
  xhsd: {
    baseInfo: {
      img: 'xhsdt',
      title: i18n.t('xinhua bookstore'),
      desc: i18n.t('help Xinhua Bookstore build an industrial chain'),
    },
    orgIntro: {
      desc: `${i18n.t('xinhua Bookstore has many stores')}\n${i18n.t('online marketing of Xinhua Bookstore')}`,
    },
    orgBg: {
      desc: '',
      tips: [
        i18n.t('the whole project needs to be iterated'),
        i18n.t('large business volume'),
        i18n.t('break through tradition and put forward higher requirements'),
        i18n.t('innovative business scenarios require a lot of external empowerment'),
      ],
    },
    solution: {
      desc: i18n.t('the overall business of xinhua bookstore is built on the enterprise digital platform (dice)'),
      tips: [
        i18n.t('dice can realize code warehouse, application construction, deployment management, application monitoring'),
        i18n.t('dice supports application elastic scaling, automatic failure recovery, facing the impact of large traffic'),
        i18n.t('dice can feedback in real time'),
        i18n.t('dice deeply connects with Alibaba'),
      ],
    },
  },
  zn: {
    baseInfo: {
      img: 'znzdt',
      title: i18n.t('zhongnan Land'),
      desc: i18n.t('through the enterprise digital platform'),
    },
    orgIntro: {
      desc: i18n.t('zhongnan Land is the flagship real estate brand of Zhongnan Construction Group'),
    },
    orgBg: {
      desc: i18n.t('in recent years'),
      tips: [
        i18n.t('chimney architecture'),
        i18n.t('poor system performance'),
        i18n.t('poor system scalability'),
        i18n.t('unable to build'),
      ],
    },
    solution: {
      tips: [
        i18n.t('centralized architecture'),
        i18n.t('microservice architecture supports intelligent operation and maintenance'),
        i18n.t('expanding the market to support business innovation'),
        i18n.t('the entire product is friendly and easy to use for developers'),
      ],
    },
  },
};


export const productTitleMap = {
  introduce: i18n.t('introduction'),
  features: i18n.t('product characteristic'),
  structure: i18n.t('product architecture'),
  functional: i18n.t('product features'),
};


export const productData = {
  microService: {
    baseInfo: {
      img: 'wfw',
      title: i18n.t('microservice R&D'),
    },
    introduce: {
      desc: i18n.t('provide one-stop microservice governance'),
    },
    features: [
      {
        title: i18n.t('one-stop service governance'),
        desc: i18n.t('one-stop microservice lifecycle management'),
      },
      {
        title: i18n.t('standardized R&D process framework'),
        desc: i18n.t('provide front-end and back-end standardized R&D framework'),
      },
      {
        title: i18n.t('ecological compatibility'),
        desc: i18n.t('fully compatible'),
      },
      {
        title: i18n.t('easy to use'),
        desc: i18n.t('pop up all microservices with one click'),
      },
      {
        title: i18n.t('platform high availability'),
        desc: i18n.t('provide a series of service governance strategies'),
      },
      {
        title: i18n.t('intelligent operation and maintenance'),
        desc: i18n.t('from the front-end APP or browser to the back-end server'),
      },
    ],
    structure: {
      img: 'wfwjg',
    },
    functional: [
      {
        img: 'zczx',
        title: i18n.t('registry'),
        desc: i18n.t('the registry helps manage the microservice platform'),
      },
      {
        img: 'pzzx',
        title: i18n.t('configuration Center'),
        desc: i18n.t('the configuration center can centrally manage applications'),
      },
      {
        img: 'apiwg',
        title: i18n.t('API gateway'),
        desc: i18n.t('to provide dynamic routing with API granularity for microservices'),
      },
      {
        img: 'apm',
        title: i18n.t('APM monitoring'),
        desc: i18n.t('gain insight into the performance of the complete transaction process'),
      },
    ],
  },
  hybridCloud: {
    baseInfo: {
      img: 'hhy',
      title: i18n.t('hybrid cloud management'),
    },
    introduce: {
      desc: i18n.t('enterprise-level container cloud platform'),
    },
    features: [
      {
        title: i18n.t('best Practices in the Cloud Era'),
        desc: i18n.t('uphold the IaC philosophy'),
      },
      {
        title: i18n.t('multi-cloud management'),
        desc: i18n.t('support cluster architecture at the same time'),
      },
      {
        title: i18n.t('resource pooling'),
        desc: i18n.t('pool management of resources'),
      },
      {
        title: i18n.t('refined operation and maintenance'),
        desc: i18n.t('provide cluster control interface'),
      },
      {
        title: i18n.t('compatible with consistent deployment and hybrid deployment'),
        desc: i18n.t('consistent deployment'),
      },
      {
        title: i18n.t('expand the market'),
        desc: i18n.t('open market'),
      },
    ],
    functional: [
      {
        img: 'xmgl',
        title: i18n.t('project management'),
        desc: i18n.t('for the corporate project side perspective'),
      },
      {
        img: 'kzsc',
        title: i18n.t('expand the market'),
        desc: i18n.t('powerful service'),
      },
      {
        img: 'cxjc',
        title: i18n.t('continuous integration'),
        desc: i18n.t('based on pipeline engine'),
      },
      {
        img: 'zjj',
        title: i18n.t('middleware platform'),
        desc: i18n.t('provides a variety of high-availability middleware'),
      },
      {
        img: 'jqgl',
        title: i18n.t('cluster management'),
        desc: i18n.t('support multi-cloud management and control, shield multi-cloud heterogeneity'),
      },
    ],
  },
  fastDataStack: {
    baseInfo: {
      img: 'ksj',
      title: i18n.t('fast data governance'),
    },
    introduce: {
      desc: i18n.t('help companies quickly analyze real-time data from different systems'),
    },
    features: [
      {
        title: i18n.t('millisecond data processing'),
        desc: i18n.t('real-time collection, storage and analysis of data from different data sources'),
      },
      {
        title: i18n.t('visualized data tasks'),
        desc: i18n.t('data tasks are displayed in a visualized process'),
      },
      {
        title: i18n.t('flexible and efficient'),
        desc: i18n.t('containerized deployment of all components'),
      },
      {
        title: i18n.t('smart and easy to use'),
        desc: i18n.t('platform supports machine learning'),
      },
      {
        title: i18n.t('high stability'),
        desc: i18n.t('both storage and computing engines are highly fault-tolerant'),
      },
      {
        title: i18n.t('standard and convenient'),
        desc: i18n.t('fast data application follows Alibaba OneData concep'),
      },
      {
        title: i18n.t('cover the whole life cycle'),
        desc: i18n.t('the built-in data model fully covers ETL'),
      },
      {
        title: i18n.t('high portability'),
        desc: i18n.t('git Repo data model is portable'),
      },
    ],
    structure: {
      img: 'ksjjg',
    },
    functional: [
      {
        img: 'sjrw',
        title: i18n.t('data task'),
        desc: i18n.t('data task is a module that supports'),
      },
      {
        img: 'sjmx',
        title: i18n.t('data model'),
        desc: i18n.t('data model management business section'),
      },
      {
        img: 'sjjs',
        title: i18n.t('data mart'),
        desc: i18n.t('data mart table produced by the data mart management data model'),
      },
      {
        img: 'sjtj',
        title: i18n.t('statistics'),
        desc: i18n.t('Statistics module collects fast data application code'),
      },
    ],
  },
};
