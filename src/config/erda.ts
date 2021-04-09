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

export const terminusDomain = 'https://terminus.io';
export const docDomain = 'https://erda-docs.app.terminus.io';
export const docVersion = 'latest';

export const docUrl = `${docDomain}/${docVersion}/manual`;
export const temrUrl = `${docDomain}/${docVersion}/manual`;
export const cliUrl = `${docDomain}/${docVersion}/manual/cli/explain-args.html`;
export const extendUrl = `${docDomain}/${docVersion}/manual/addons/design.html`;
export const securifyUrl = `${docDomain}/${docVersion}/manual/safe/identity-management.html`;
export const changeLogUrl = `${docDomain}/changeLog.html`;

export interface IHeaderItem {
  name: string;
  url?: string;
  jumpOut?: boolean;
  status?: string;
  subList?: any[]
}

export const headerMenus: IHeaderItem[] = [
  // { name: 'Why Erda Cloud？', url: '/why-erda' },
  {
    name: '产品',
    subList: [
      { name: 'DevOps 平台', img: 'dev', description: '以应用为中心的 DevOps，打造极致的企业级应用开发体验' },
      { name: '微服务治理平台', img: 'microservice', description: '无代码侵入的微服务治理，保障企业应用的安全、稳定生产' },
      { name: '多云管理平台', img: 'duoyun', description: '云厂商无绑定的多云管理，构建高效的企业混合云架构' },
      { name: '快数据平台', img: 'fdp', description: '基于流式计算的快数据管理，提供实时的统一数据管理平台' },
    ],
  },
  { name: '价格', url: '/price' },
  { name: '文档', url: docUrl, jumpOut: true },
  { name: '服务市场', url: '/market/addon' },
  { name: '成功案例', url: '/customer-case' },
  // { name: '探索', url: '/', status: 'unrealized' },
  { name: 'GitHub', url: 'https://github.com/erda-project/erda', jumpOut: true },
];

export interface ISubItem {
  name: string;
  value?: string;
  img?: string;
  width?: number;
  height?: number;
  url?: string;
  className?: string;
  jumpOut?: boolean;
  props?: object;
}


export interface IFooterItem {
  name: string;
  icon?: string;
  subList: ISubItem[];
}

export interface Ifooter {
  left: {
    [k: string]: IFooterItem
  };
  right: {
    mainLink: {
      name: string;
      img: {
        src: string;
        className?: string;
        width?: number;
        height?: number;
      }
      description: string;
    }[]
    subLink: { name: string; url: string; jumpOut: true, icon: string } []
  }
}

export const footerMenus: Ifooter = {
  left: {
    about: {
      name: '关于我们',
      // icon: 'gy',
      subList: [
        { name: '加入我们', url: '/join' },
      ],
    },
    resource: {
      name: '资源',
      // icon: 'zy',
      subList: [
        {
          name: '培训与支持',
          url: docUrl,
          jumpOut: true,
        },
      ],
    },
    contactUs: {
      name: '联系我们',
      subList: [{
        name: '联系电话',
        value: '',
      }, {
        name: '邮箱地址',
        value: '',
      }, {
        name: '公司地址',
        value: '杭州市西湖区转塘街道定山路云栖小镇飞天园区1号楼2楼',
      }],
    },
  },
  right: {
    mainLink: [
      {
        name: 'wechat',
        img: {
          src: '/images/common/wechat.jpg',
          className: 'mb8',
          width: 110,
          height: 110,
        },
        description: '扫一扫关注微信公众号',
      },
    ],
    subLink: [],
  },
};

export const popular = {
  name: '热门搜索',
  searchUrl: 'https://www.baidu.com/s?wd=%E4%BA%91%E7%AE%A1%E5%B9%B3%E5%8F%B0',
  children: [
    { name: '云管平台', url: '' },
    { name: 'DevOps', url: '' },
    { name: '微服务治理', url: '' },
    { name: 'API 管理', url: '' },
    { name: 'API 网关', url: '' },
    { name: '自动化测试', url: '' },
    { name: '代码托管', url: '' },
    { name: 'CI/CD', url: '' },
    { name: '流水线', url: '' },
    { name: '运维服务', url: '' },
    { name: 'APM', url: '' },
  ],
};

export const tomo = [
  { name: '阿里云', url: 'https://www.aliyun.com' },
];

export const copyRights = {
  text: '2012-2018 terminus.io',
  recordLicenseNumber: '备案/许可证号：浙ICP备13004315号',
  recordLicenseAdress: 'https://beian.miit.gov.cn/',
};
export const police = {
  text: '浙公网安备 33010802003150号',
  img: '/images/common/police.png',
  url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802003150',
};
