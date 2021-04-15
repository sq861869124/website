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

import { ColumnsType } from 'interface/common';
import { Icon } from 'common';
import { Button } from 'antd';
import React from 'react';
import { goTo } from 'common/utils';

export type IVersion = 'freeVersion' | 'enterpriseEdition' | 'privateDeploymentVersion';
export type abilityScope = 'devOps' | 'microService' | 'multi-cloudManagement';

export type Item = {
  [k in IVersion]: boolean;
} & {
  scope: abilityScope;
  name: string;
  key: string;
};

export interface SpceItem{
  key: string;
  name: string;
  freeVersion: string;
  enterpriseEdition: {
    [k: string]: string;
  };
  privateDeploymentVersion: string;
}

interface IAbilitiesTreeItem{
  children: Item[];
  name: string;
  key: abilityScope;
}

const render = (dataIndex: string, value: boolean, record: IAbilitiesTreeItem, _index?: number): React.ReactNode => {
  if (record.children?.length) {
    return record.children.every((t) => t[dataIndex]) ? '包含' : record.children.filter((t) => t[dataIndex]).length ? '部分包含' : null;
  }
  return value ? <Icon className="able-mark" type="check" /> : null;
};

const enterpriseEditionSpec = {
  A: {
    key: 'A',
    cpuCore: '<=80 Core',
    price: '88,999',
    monitorStorage: '600 G',
  },
  B: {
    key: 'B',
    cpuCore: '<=240 Core',
    price: '233,700',
    monitorStorage: '1500 G',
  },
  C: {
    key: 'C',
    cpuCore: '<=400 Core',
    price: '369,500',
    monitorStorage: '2400 G',
  },
  D: {
    key: 'D',
    cpuCore: '<=800 Core',
    price: '699,500',
    monitorStorage: '4000 G',
  },
};
const versionInfo: {
  [k in IVersion]: {
    name: string;
    LinkComp?: React.ReactNode;
    bottomComp: React.ReactNode;
    tip?: string;
    pricingStrategies: Array<{ key: string; priceInPc?: React.ReactNode; price?: React.ReactNode; specification: React.ReactNode; gift?: React.ReactNode}>;
  }
} = {
  freeVersion: {
    name: '免费版',
    bottomComp: <Button type="primary" onClick={() => { window.open('/login-dice'); }}>立即体验</Button>,
    tip: 'DevOps 平台部分内容',
    pricingStrategies: [{
      key: 'A',
      priceInPc: <div className="price-in-pc pa20"><p><span className="small">￥</span><span className="large">0</span></p><span className="tips">免费功能将持续开放</span></div>,
      price: '始终免费、免费功能将持续开放',
      specification: '用户数 <= 50人',
    }],
  },
  enterpriseEdition: {
    name: '企业版',
    bottomComp: <Button type="primary" onClick={() => { window.open('/contact'); }}>申请试用</Button>,
    pricingStrategies: Object.values(enterpriseEditionSpec).map((t) => {
      return {
        key: t.key,
        price: `￥${t.price}/年`,
        priceInPc: <div className="price-in-pc pa20"><p className=""><span className="small">￥</span><span className="large">{t.price}</span><span className="small">起</span></p><span className="tips">每年</span></div>,
        specification: `CPU 核数 ${t.cpuCore}`,
        gift: `监控存储${t.monitorStorage}`,
      };
    }),
  },
  privateDeploymentVersion: {
    name: '私有部署版',
    bottomComp: <Button type="primary" onClick={() => { goTo('/contact'); }}>联系我们</Button>,
    tip: '在企业版的基础之上还包含',
    pricingStrategies: [{
      key: 'A',
      priceInPc: <div className="price-in-pc pa20">如需定价信息<br />请询问我们的销售人员</div>,
      price: '如需定价信息，请询问我们的销售人员',
      specification: '无人员数和节点数限制',
    }],
  },
};

const versionColumns: ColumnsType<IAbilitiesTreeItem> = [
  {
    title: '功能与服务',
    dataIndex: 'name',
    width: 600,
  }, {
    title: '免费版本',
    dataIndex: 'freeVersion',
    width: 200,
    render: (...rest) => render('freeVersion', ...rest),
  }, {
    title: '标准版本',
    dataIndex: 'enterpriseEdition',
    width: 200,
    render: (...rest) => render('enterpriseEdition', ...rest),
  }, {
    title: '私有部署版',
    dataIndex: 'privateDeploymentVersion',
    width: 200,
    render: (...rest) => render('privateDeploymentVersion', ...rest),
  },
];
export const specData: SpceItem[] = [
  {
    key: 'price',
    name: '价格',
    freeVersion: '-',
    enterpriseEdition: {
      A: `￥${enterpriseEditionSpec.A.price}`,
      B: `￥${enterpriseEditionSpec.B.price}`,
      C: `￥${enterpriseEditionSpec.C.price}`,
      D: `￥${enterpriseEditionSpec.D.price}`,
    },
    privateDeploymentVersion: '-',
  },
  {
    key: 'cpu',
    name: 'CUP核数',
    freeVersion: '-',
    enterpriseEdition: {
      A: enterpriseEditionSpec.A.cpuCore,
      B: enterpriseEditionSpec.B.cpuCore,
      C: enterpriseEditionSpec.C.cpuCore,
      D: enterpriseEditionSpec.D.cpuCore,
    },
    privateDeploymentVersion: '无限制',
  },
  {
    key: 'monitorStorage',
    name: '监控存储',
    freeVersion: '-',
    enterpriseEdition: {
      A: enterpriseEditionSpec.A.monitorStorage,
      B: enterpriseEditionSpec.B.monitorStorage,
      C: enterpriseEditionSpec.C.monitorStorage,
      D: enterpriseEditionSpec.D.monitorStorage,
    },
    privateDeploymentVersion: '无限制',
  },
];
export const specColumns: ColumnsType<any> = [
  {
    title: '规格&价格',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '免费版',
    dataIndex: 'freeVersion',
    align: 'center',
  },
  {
    title: '企业版',
    align: 'center',
    children: [
      {
        title: '规格A',
        align: 'center',
        dataIndex: ['enterpriseEdition', 'A'],
      },
      {
        title: '规格B',
        align: 'center',
        dataIndex: ['enterpriseEdition', 'B'],
      },
      {
        title: '规格C',
        align: 'center',
        dataIndex: ['enterpriseEdition', 'C'],
      },
      {
        title: '规格D',
        align: 'center',
        dataIndex: ['enterpriseEdition', 'D'],
      },
    ],
  },
  {
    title: '私有部署版',
    dataIndex: 'privateDeploymentVersion',
  },
];


const abilities: Item[] = [
  { scope: 'devOps', freeVersion: true, enterpriseEdition: true, privateDeploymentVersion: true, name: '敏捷项目协同', key: 'agileProjectCollaboration' },
  { scope: 'devOps', freeVersion: true, enterpriseEdition: true, privateDeploymentVersion: true, name: '手工测试管理', key: 'manualTestManagement' },
  { scope: 'devOps', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '自动化测试管理', key: 'automatedTestManagement' },
  { scope: 'devOps', freeVersion: true, enterpriseEdition: true, privateDeploymentVersion: true, name: '代码托管', key: 'codeHosting' },
  { scope: 'devOps', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '代码扫描、分析', key: 'codeScanningAnalysis' },
  { scope: 'devOps', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: 'API 全生命周期管理', key: 'apiFullLifeCycleManagement' },
  { scope: 'devOps', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '图形化流水线编排', key: 'Graphical pipeline orchestration' },
  { scope: 'devOps', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '自动化CI/CD', key: 'automatedCICD' },
  { scope: 'devOps', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '制品管理', key: 'productManagement' },
  { scope: 'microService', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '配置中心', key: 'configurationCenter' },
  { scope: 'microService', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '注册中心', key: 'registryCenter' },
  { scope: 'microService', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: 'API 网关管理', key: 'apiGatewayManagement' },
  { scope: 'microService', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: 'APM （应用拓扑、主动监控、全链路诊断和追踪、可视化大盘和告警）', key: 'apm' },
  { scope: 'microService', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '日志分析', key: 'logAnalysis' },
  { scope: 'multi-cloudManagement', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '混合云管理', key: 'hybridCloudManagement' },
  { scope: 'multi-cloudManagement', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '多集群管理', key: 'multiClusterManagement' },
  { scope: 'multi-cloudManagement', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '资源调度管理', key: 'resourceSchedulingManagement' },
  { scope: 'multi-cloudManagement', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '安全审计', key: 'securityAudit' },
  { scope: 'multi-cloudManagement', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '数字资产运维、运营', key: 'digitalAssetOperationMaintenanceOperation' },
  { scope: 'multi-cloudManagement', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '白屏化运维 Kubernetes', key: 'whiteScreenOperationAndMaintenanceKubernetes' },
  { scope: 'multi-cloudManagement', freeVersion: false, enterpriseEdition: true, privateDeploymentVersion: true, name: '服务市场', key: 'serviceMarket' },
];

export const abilitiesTree: IAbilitiesTreeItem[] = [
  {
    name: 'DevOps 平台',
    key: 'devOps',
    children: abilities.filter((t) => t.scope === 'devOps'),
  },
  {
    name: '微服务治理平台',
    key: 'microService',
    children: abilities.filter((t) => t.scope === 'microService'),
  },
  {
    name: '多云管理平台',
    key: 'multi-cloudManagement',
    children: abilities.filter((t) => t.scope === 'multi-cloudManagement'),
  },
];

const showVersion: IVersion[] = ['freeVersion', 'enterpriseEdition', 'privateDeploymentVersion'];

const abilitiesByVersion = showVersion.map((item) => {
  return {
    type: item,
    ...versionInfo[item],
  };
});

export { abilities, versionColumns, abilitiesByVersion };
