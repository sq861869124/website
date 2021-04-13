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
import { abilitiesByVersion } from 'pages/price/config';
import { Icon } from 'common';
import './index.scss';

const Price = () => {
  return (
    <div className="erda-price pt0">
      <div className="full-width-header v-flex-box">
        <div className="title">选择更高效的应用研发运维方案，从免费开始</div>
      </div>
      <PageContent className="price-body py40">
        <div className="flex-box v-align-start version-columns">
          {
            abilitiesByVersion.map((item) => {
              const { type, data, name, bottomComp, tip, pricingStrategies } = item;
              return (
                <div className="version-columns-item" key={type}>
                  <div className="item-header">
                    <p className="ver-name">{name}</p>
                  </div>
                  <div className="item-body">
                    <p className="px12 tips">{tip}</p>
                    {
                      data.map((t) => {
                        return (
                          <p className="ability-item flex-start mb12" key={t.key}>
                            <Icon className="check-mark" type="duigou" color />
                            <span className="ability-name">{t.name}</span>
                          </p>
                        );
                      })
                    }
                  </div>
                  {
                    pricingStrategies.length ? (
                      <div className="pricing-strategy">
                        <p className="line" />
                        {
                          pricingStrategies.map(({ key, price, specification }) => {
                            return (
                              <div className="item mb12" key={`${type}-${key}`}>
                                <p className="price">{price}</p>
                                <p className="desc">{specification}</p>
                              </div>);
                          })
                        }
                      </div>
                    ) : (
                      <div className="pricing-strategy">
                        <p className="line" />
                        <div className="come-soon">
                          价格待定
                        </div>
                      </div>
                    )
                  }
                  <div className="experience">
                    {bottomComp}
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="private-deploy flex-box mt40">
          <div className="left flex-box">
            <div>是否需要私有部署？</div>
            <p>提供企业完整私有化管理的部署方案</p>
          </div>
          <div className="right flex-box">
            <a href="/contact" target="_blank">联系商务</a>
          </div>

        </div>
      </PageContent>
    </div>
  );
};

export default Price;
