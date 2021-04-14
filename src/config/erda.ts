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

export const terminusDomain = 'https://terminus.io';
export const docDomain = 'https://erda-docs.app.terminus.io';
export const docVersion = 'latest';

export const docUrl = `${docDomain}/${docVersion}/manual`;
export const temrUrl = `${docDomain}/${docVersion}/manual`;
export const cliUrl = `${docDomain}/${docVersion}/manual/cli/explain-args.html`;
export const extendUrl = `${docDomain}/${docVersion}/manual/addons/out-of-the-box.html`;
export const securifyUrl = `${docDomain}/${docVersion}/manual/safe/identity-management.html`;
export const changeLogUrl = `${docDomain}/changeLog.html`;

export interface IHeaderItem {
  name: string;
  url?: string;
  jumpOut?: boolean;
  status?: string;
  subList?: any[];
}

export const headerMenus: IHeaderItem[] = [
  // { name: 'Why Erda Cloud？', url: '/why-erda' },
  {
    name: i18n.t('Product'),
    subList: [
      { name: i18n.t('DevOps Platform'), img: 'dev', description: i18n.t('header devOps desc') },
      { name: i18n.t('Microservice Platform'), img: 'microservice', description: i18n.t('header ms desc') },
      { name: i18n.t('Cloud Management Platform'), img: 'duoyun', description: i18n.t('header multi-cloud desc') },
      { name: i18n.t('FastData Platform'), img: 'fdp', description: i18n.t('header fdp desc') },
    ],
  },
  { name: i18n.t('Pricing'), url: '/price' },
  { name: i18n.t('Documentation'), url: docUrl, jumpOut: true },
  { name: i18n.t('Marketplace'), url: '/market/addon' },
  { name: i18n.t('Success Story'), url: '/customer-case' },
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
    [k: string]: IFooterItem;
  };
  right: {
    mainLink: Array<{
      name: string;
      img: {
        src: string;
        className?: string;
        width?: number;
        height?: number;
      };
      description: string;
    }>;
    subLink: Array<{ name: string; url: string; jumpOut: true; icon: string }>;
  };
}

export const footerMenus: Ifooter = {
  left: {
    about: {
      name: i18n.t('about us'),
      // icon: 'gy',
      subList: [
        { name: i18n.t('join us'), url: '/join' },
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
      ],
    },
    contactUs: {
      name: i18n.t('contact us'),
      subList: [{
        name: i18n.t('telephone'),
        value: '',
      }, {
        name: i18n.t('email'),
        value: '',
      }, {
        name: i18n.t('address'),
        value: i18n.t('company address'),
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
        description: i18n.t('scan and follow WeChat Official Account'),
      },
    ],
    subLink: [],
  },
};

export const copyRights = {
  text: '2012-2018 terminus.io',
  recordLicenseNumber: '备案/许可证号：浙ICP备13004315号',
  recordLicenseAddress: 'https://beian.miit.gov.cn/',
};
export const police = {
  text: '浙公网安备 33010802003150号',
  img: '/images/common/police.png',
  url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802003150',
};
