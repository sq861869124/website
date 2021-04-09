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
import { CopmFadeInUp } from 'pages/component/animate-comp';
import { useMobile } from 'common/utils';

export interface IProps {
  title: string;
  description: string;
  list: Array<{ title: string; icon: string; description: string }>;
}

const MultiCloud = ({ title, list, description }: IProps) => {
  const isMobile = useMobile();
  return (
    <div className="erda-home-log-multi-cloud">
      <PageContent>
        <CopmFadeInUp>
          <div className="card-title">{title}</div>
        </CopmFadeInUp>
        <CopmFadeInUp>
          <div className="card-desc mt24">{description}</div>
        </CopmFadeInUp>
        <div className="erda-home-log-multi-cloud-body flex-box v-align-start">
          {
            list.map((item, index) => {
              const { icon, description: itemDesc, title: itemTitle } = item;
              return (
                <CopmFadeInUp key={itemTitle} delay={isMobile ? 0 : index * 100}>
                  <div key={itemTitle} className="item">
                    <div className="icon-bg center-flex-box">
                      <CustomIcon type={icon} />
                    </div>
                    <div className="title mt4">{itemTitle}</div>
                    <div className="desc mt8">{itemDesc}</div>
                  </div>
                </CopmFadeInUp>
              );
            })
          }
        </div>
      </PageContent>
    </div>
  );
};

export default MultiCloud;
