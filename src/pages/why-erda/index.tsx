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
import { SpriteIcons } from '~/common';
import i18n from '~/i18n';
import './index.scss';

const config = [{
  title: i18n.t('no deployment, no operation and maintenance'),
  bg: 'neetnot-deploy',
  description: i18n.t('focus on your own business applications'),
}, {
  title: i18n.t('safety'),
  bg: 'safe',
  description: i18n.t('make full use of the security'),
}, {
  title: i18n.t('multi-cloud architecture'),
  bg: 'multi-cloud',
  description: i18n.t('unbind business applications'),
}, {
  title: i18n.t('one-stop platform'),
  bg: 'one-site',
  description: i18n.t('the platform has complete functions'),
}, {
  title: i18n.t('flexible scaling'),
  bg: 'scla',
  description: i18n.t('node resources can easily'),
}, {
  title: i18n.t('automation'),
  bg: 'auto',
  description: i18n.t('fully automated development process'),
}, {
  title: i18n.t('cloud native'),
  bg: 'cloud-origin',
  description: i18n.t('based on kubernetes + cloud'),
}, {
  title: i18n.t('expert service'),
  bg: 'expert-server',
  description: i18n.t('7*24 hours expert online service'),
}];

const WhyErda = () => {
  return (
    <div className="erda-why-erda pt0">
      <div className="full-width-header v-flex-box">
        <div className="title">{i18n.t('default:why choose erda cloud?')}</div>
      </div>
      <PageContent className="erda-why-erda-body">
        <div className="v-align-start reasions">
          {
            config.map((item) => {
              return (
                <div className="reasions-item flex-box v-align-start" key={item.title}>
                  <div className="logo item-left">
                    <SpriteIcons path="why" className={item.bg} />
                  </div>
                  <div className="flex-1 item-right">
                    <div className="title mb4">{item.title}</div>
                    <div className="desc">{item.description}</div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </PageContent>
    </div>
  );
};

export default WhyErda;
