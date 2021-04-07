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

import { ColumnsType, ColumnType } from 'interface/common';
import { Icon } from 'common';
import { Button } from 'antd';
import React from 'react';
import { goTo } from 'common/utils';

export type IVersion = 'freeVersion' | 'standardEdition' | 'enterpriseEdition' | 'privateDeploymentVersion';

export type Item = {
  [k in IVersion]: boolean;
} & {
  name: string;
  key: string;
};

const render: ColumnType<Item>['render'] = (value: boolean) => {
  return value ? <Icon className="able-mark" type="check" /> : null;
};

const versionInfo: {
  [k in IVersion]: {
    name: string;
    LinkComp?: React.ReactNode;
    bottomComp: React.ReactNode;
    tip?: string;
    pricingStrategies: Array<{ key: string; price?: React.ReactNode; specification: React.ReactNode }>;
  }
} = {
  freeVersion: {
    name: '免费版',
    bottomComp: <Button type="primary" onClick={() => { window.open('/login-dice'); }}>立即体验</Button>,
    tip: 'DevOps 平台部分内容',
    pricingStrategies: [
      {
        key: 'A',
        price: '免费',
        specification: '用户数 <= 50人',
      },
    ],
  },
  standardEdition: {
    name: '标准版',
    bottomComp: <Button type="primary" onClick={() => { window.open('/contact'); }}>联系商务</Button>,
    pricingStrategies: [
      // {
      //   key: "A",
      //   price: <><span className="bold">￥24,999</span>/年 <span className="tag">低至41.6元/人/月</span></>,
      //   specification: '节点数 <= 10，用户数 <= 50'
      // }, {
      //   key: "B",
      //   price: <><span className="bold">￥46,999</span>/年 <span className="tag">低至39.0元/人/月</span></>,
      //   specification: '节点数 <= 30，用户数 <= 100'
      // }, {
      //   key: "C",
      //   price: <><span className="bold">￥89,999</span>/年<span className="tag">低至￥37.5/人/月</span></>,
      //   specification: '节点数 <= 50，用户数 <= 200'
      // }, {
      //   key: "D",
      //   price: <><span className="bold">￥139,999</span>/年 <span className="tag">低至29.0元/人/月</span></>,
      //   specification: '节点数 <= 100，用户数 <= 400'
      // }
    ],
  },
  enterpriseEdition: {
    name: '企业版',
    bottomComp: <Button type="primary" onClick={() => { window.open('/contact'); }}>联系商务</Button>,
    pricingStrategies: [
      // {
      //   key: "A",
      //   price: <><span className="bold">￥49,999</span>/年 <span className="tag">低至￥83.3/人/月</span></>,
      //   specification: '节点数 <= 10，用户数 <= 50'
      // }, {
      //   key: "B",
      //   price: <><span className="bold">￥93,999</span>/年 <span className="tag">低至￥78.3/人/月</span></>,
      //   specification: '节点数 <= 30，用户数 <= 100'
      // }, {
      //   key: "C",
      //   price: <><span className="bold">￥169,998</span>/年 <span className="tag">低至￥70.8/人/月</span></>,
      //   specification: '节点数 <= 50，用户数 <= 200'
      // }, {
      //   key: "D",
      //   price: <><span className="bold">￥239,998</span>/年 <span className="tag">低至￥49.5/人/月</span></>,
      //   specification: '节点数 <= 100，用户数 <= 400'
      // }
    ],
  },
  privateDeploymentVersion: {
    name: '私有部署',
    bottomComp: <Button type="primary" onClick={() => { goTo('/contact'); }}>联系商务</Button>,
    tip: '在企业版的基础之上还包含',
    pricingStrategies: [{
      key: 'A',
      specification: '无人员数和节点数限制',
    }],
  },
};

const versionColumns: ColumnsType<Item> = [
  {
    title: '能力',
    dataIndex: 'name',
  }, {
    title: '免费版本',
    dataIndex: 'freeVersion',
    render,
  }, {
    title: '标准版本',
    dataIndex: 'standardEdition',
    render,
  }, {
    title: '企业版',
    dataIndex: 'enterpriseEdition',
    render,
  },
];

const abilities: Item[] = [
  { freeVersion: true, standardEdition: false, enterpriseEdition: false, privateDeploymentVersion: false, name: '代码仓库', key: 'codeRepository' },
  { freeVersion: true, standardEdition: false, enterpriseEdition: false, privateDeploymentVersion: false, name: '项目管理', key: 'projectManagement' },
  { freeVersion: true, standardEdition: false, enterpriseEdition: false, privateDeploymentVersion: false, name: '测试管理(不含自动化测试)', key: 'testManagement(manual)' },
  { freeVersion: false, standardEdition: true, enterpriseEdition: true, privateDeploymentVersion: true, name: 'DevOps 平台', key: 'completeDevOps' },
  { freeVersion: false, standardEdition: true, enterpriseEdition: true, privateDeploymentVersion: true, name: '多云管理平台', key: 'multi-cloudManagement' },
  { freeVersion: false, standardEdition: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '微服务治理平台', key: 'MicroserviceGovernance' },
];

const showVersion: IVersion[] = ['freeVersion', 'standardEdition', 'enterpriseEdition'];

const abilitiesByVersion = showVersion.map((item) => {
  return {
    type: item,
    ...versionInfo[item],
    data: abilities.filter((t) => t[item]),
  };
});

export { abilities, versionColumns, abilitiesByVersion };
