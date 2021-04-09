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
import { Icon as CustomIcon } from 'common';
import { config } from '~/config';
import { Popover } from 'antd';
import './temp-footer.scss';

const leftConf = [
  { name: '© 2021 erda.cloud', url: config.terminusDomain },
  { name: 'Term', url: config.temrUrl },
  { name: 'Extend', url: config.extendUrl },
  { name: 'Cli', url: config.cliUrl },
  { name: 'Securify', url: config.securifyUrl },
  { name: 'ChangeLog', url: config.changeLogUrl },
  { name: '浙ICP备13004315号-6', url: 'https://beian.miit.gov.cn' },
  { name: '浙公网安备 33010802003150号', url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802003150' },
];
const rightConf = [
  {
    name: 'WeChat',
    comp: <img src="/images/common/wechat.png" width={120} height={120} />,
    icon: 'wechat',
  },
  { name: 'GitHub', url: 'https://github.com/erda-project', icon: 'github' },
];

const Footer = () => {
  return (
    <div className="erda-temp-footer">
      <PageContent className="full-height flex-box v-flex">
        <div className="link-wrap flex-start">
          {
            leftConf.map((item) => {
              return item.url ? (
                <a className="ml16 fz12" target="_blank" rel="noopener noreferrer" key={item.name} href={item.url}>{item.name}</a>
              ) : (
                <span className="ml16 fz12" key={item.name}>{item.name}</span>
              );
            })
          }
        </div>
        <div className="right-wrapper">
          {
            rightConf.map((item) => {
              const { url, comp } = item;
              return url ? (
                <a className="ml16" target="_blank" rel="noopener noreferrer" key={item.name} href={item.url}>
                  <CustomIcon className="fz24" type={item.icon} />
                </a>
              ) : (
                <Popover key={item.name} content={comp}>
                  <CustomIcon className="fz24" type={item.icon} />
                </Popover>
              );
            })
          }
        </div>
      </PageContent>
    </div>
  );
};

export default Footer;
