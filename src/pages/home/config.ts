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

import { IProps as IWingProps } from './double-wing';
import { IProps as ITest } from './test-manage';
import i18n from '~/i18n';

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
      title: i18n.t('code repository'),
      description: i18n.t('code repository desc'),
      list: [{
        icon: 'icon1',
        title: i18n.t('refined authority manage'),
        key: 'refinedAuthority',
        description: i18n.t('refined authority manage desc'),
      }, {
        icon: 'icon2_2',
        activeIcon: 'icon21',
        title: i18n.t('branch rule manage'),
        key: 'branchRule',
        description: i18n.t('branch rule manage desc'),
      }, {
        icon: 'icon31',
        title: i18n.t('code scanning and unit testing'),
        key: 'codeScanning and unitTesting',
        description: i18n.t('code scanning and unit testing desc'),
      }, {
        icon: 'icon41',
        title: i18n.t('external code repository'),
        key: 'externalRepository',
        description: i18n.t('external code repository desc'),
      }],
    },
    style: { backgroundColor: '#F7F9FF' },
    imgProps: {
      offSet: [-20, 0],
      src: '/images/home/Pic3.png',
      width: 620,
      height: 531,
      className: 'code-repositories-img',
    },
  },
  cicd: {
    identifier: 'cicd',
    docProps: {
      title: i18n.t('automated CI/CD'),
      description: i18n.t('automated CI/CD desc'),
      list: [{
        icon: 'icon5_2',
        activeIcon: 'icon51',
        title: i18n.t('graphical orchestration'),
        key: 'graphicalOrchestration',
        description: i18n.t('graphical orchestration desc'),
      }, {
        icon: 'icon61',
        title: i18n.t('built-in rich Action and Addon capabilities'),
        key: 'built-inRichActionAndAddonCapabilities',
        description: i18n.t('built-in rich Action and Addon capabilities desc'),
      }, {
        icon: 'icon71',
        title: i18n.t('comprehensive build type'),
        key: 'comprehensiveBuildType',
        description: i18n.t('comprehensive build type desc'),
      }, {
        icon: 'icon81',
        title: i18n.t('rich release management'),
        key: 'richReleaseManagement',
        description: i18n.t('rich release management desc'),
      }],
    },
    reverse: true,
    style: { backgroundColor: '#F7F9FF' },
    imgProps: {
      offSet: [-30, 0],
      src: '/images/home/Pic4.png',
      width: 620,
      height: 531,
      className: 'cicd-img',
    },
  },
  monitor: {
    identifier: 'monitor',
    reverse: false,
    docProps: {
      title: i18n.t('application performance manage'),
      description: i18n.t('application performance manage desc'),
      list: [{
        icon: 'icon91',
        title: i18n.t('application topology automatic discovery'),
        key: 'applicationTopologyAutomaticDiscovery',
        description: i18n.t('automatically draw the global topology architecture diagram according to the microservice calling relationship, which can clearly understand the relationship and calling situation between the microservices'),
      }, {
        icon: 'icon101',
        title: i18n.t('active monitoring of key business'),
        key: 'activeMonitoringOfKeyBusiness',
        description: i18n.t('initiate uninterrupted timing requests to important business addresses, determine the health of application services, and actively count performance and health information'),
      }, {
        icon: 'icon11',
        title: i18n.t('diagnosis of abnormal and slow transactions'),
        key: 'diagnosisOfAbnormalAndSlowTransactions',
        description: i18n.t('comprehensive application performance monitoring, covering time-consuming web interface, time-consuming RPC call, slow database query, cache, etc., to easily track down system slow issues'),
      }, {
        icon: 'icon12_2',
        activeIcon: 'icon121',
        title: i18n.t('customizable visualization of the market and alarms'),
        key: 'customizableVisualizationDashboardAndAlarms',
        description: i18n.t('provide flexible custom chart alarm configuration to meet the display and alarm requirements of various monitoring operation and maintenance scenarios such as business monitoring, risk warning, performance analysis, etc.'),
      }, {
        icon: 'icon13_2',
        activeIcon: 'icon131',
        title: i18n.t('full link diagnosis and tracking'),
        key: 'fullLinkDiagnosisAndTracking',
        description: i18n.t('according to the information capture of each request point in the link of each call of the microservice, the full transparency of the call information of the entire link is realized, and the diagnosis and analysis of the application call link are developed efficiently and conveniently'),
      }],
    },
    imgProps: {
      offSet: [-56, 0],
      src: '/images/home/Pic5.png',
      width: 620,
      height: 531,
      className: 'monitor-img',
    },
  },
  log: {
    identifier: 'log-analysis',
    docProps: {
      title: i18n.t('log analysis management'),
      description: i18n.t('log analysis management desc'),
      list: [{
        icon: 'icon12',
        key: 'oneStopServiceForLogData',
        title: i18n.t('provide one-stop service for log data'),
        description: i18n.t('provide one-stop service for log data desc'),
      }, {
        icon: 'icon3',
        key: 'customLogAnalysisRules',
        title: i18n.t('custom log analysis rules'),
        description: i18n.t('by adding cleaning rules to the log, the log file structure is realized to meet the flexible business log visualization and alarm requirements'),
      }, {
        icon: 'icon2',
        key: 'logDataVisualizationAndAlarm',
        title: i18n.t('log data visualization and alerting'),
        description: i18n.t('for log analysis results, provide flexible custom chart alarm configuration to meet the display and alarm requirements of various monitoring operation and maintenance scenarios such as business monitoring, risk warning, performance analysis, etc'),
      }],
    },
    reverse: true,
    style: { backgroundColor: '#F7F9FF' },
    imgProps: {
      offSet: [-30, 0],
      src: '/images/home/Pic-log.png',
      width: 620,
      height: 531,
      className: 'log-analysis-img',
    },
  },
  multiCloud: {
    identifier: 'multi-cloud',
    docProps: {
      title: i18n.t('cloud manage'),
      description: i18n.t('cloud manage desc'),
      list: [{
        icon: 'yunwei',
        key: 'whiteScreenOperationMaintenanceKubernetes',
        title: i18n.t('white screen operation and maintenance Kubernetes'),
        description: i18n.t('white screen operation and maintenance Kubernetes desc'),
      }, {
        icon: 'bianpai',
        key: 'declarativeOrchestrationOfCloudServices',
        title: i18n.t('declarative orchestration of cloud services'),
        description: i18n.t('declarative orchestration of cloud services desc'),
      }, {
        icon: 'yunying',
        key: 'digitalAssetOperation',
        title: i18n.t('digital asset operation'),
        description: i18n.t('digital asset operatio desc'),
      }],
    },
    imgProps: {
      offSet: [-30, 0],
      src: '/images/home/Pic9.png',
      width: 620,
      height: 531,
      className: 'log-analysis-img',
    },


  },
  testManage: {
    title: i18n.t('test manage'),
    description: i18n.t('test manage desc'),
    list: [{
      icon: 'bug-manage',
      title: i18n.t('test cases and bug manage'),
      description: i18n.t('test cases and bug manage desc'),
    }, {
      icon: 'auto-test',
      title: i18n.t('automatic test'),
      description: i18n.t('automatic test desc'),
    }, {
      icon: 'data-bank',
      title: i18n.t('data bank'),
      description: i18n.t('data bank desc'),
    }, {
      icon: 'full-link',
      title: i18n.t('API full life cycle manage'),
      description: i18n.t('API full life cycle manage desc'),
    }],
  },
};

export default HomeConfig;
