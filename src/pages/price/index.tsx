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

import React, { useState, useRef } from 'react';
import PageContent from '~/layout/common/page-content';
import { abilitiesByVersion, versionColumns, abilitiesTree, specColumns, specData } from 'pages/price/config';
import addEventListener, { IReturn } from 'rc-util/lib/Dom/addEventListener';
import { getScrollTop, useMobile } from 'common/utils';
import { useMount, useUnmount } from 'react-use';
import { Table } from 'antd';
import { Icon } from 'common';
import './index.scss';

const Price = () => {
  const [showFixedHeader, toggleFixedHeader] = useState(false);
  const eventRef = useRef<IReturn>();
  const wrapRef = useRef<HTMLDivElement>();
  const isMobile = useMobile();
  useMount(() => {
    eventRef.current = addEventListener(window, 'scroll', () => {
      const offsetTop = wrapRef.current?.offsetTop || 0;
      /**
       * 330: page banner's height
       * 72: page header's height
       */
      if (getScrollTop() > offsetTop + 330 - 72) {
        toggleFixedHeader(true);
      } else {
        toggleFixedHeader(false);
      }
    });
  });
  useUnmount(() => {
    eventRef.current?.remove();
  });
  return (
    <div className="erda-price pt0">
      <div className="full-width-header v-flex-box">
        <div className="title">选择更高效的应用研发运维方案，从免费开始</div>
      </div>
      <PageContent className="price-body py40">
        <div className="flex-box v-align-start version-columns">
          {
            abilitiesByVersion.map((item) => {
              const { type, name, bottomComp, pricingStrategies } = item;
              return (
                <div className="version-columns-item" key={type}>
                  <div className="item-header">
                    <p className="ver-name">{name}</p>
                  </div>
                  {
                    isMobile ? pricingStrategies.length ? (
                      <div className="pricing-strategy">
                        {
                          pricingStrategies.map(({ key, price, specification, gift }) => {
                            return (
                              <div className="item mb12" key={`${type}-${key}`}>
                                <p className="Pricing">{price}</p>
                                <p className="desc">{specification}</p>
                                {
                                  gift ? <p className="gift">赠：{gift}</p> : null
                                }
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
                    ) : (
                      <div className={`pricing-strategy ${type}`}>
                        {
                          pricingStrategies[0].priceInPc
                        }
                      </div>
                    )
                  }
                  <div className="experience">
                    {bottomComp}
                  </div>
                  {
                    isMobile ? (
                      <div className="pt16 px24">
                        {
                          abilitiesTree.map(({ children, name: scope, key }) => {
                            const abilities = children.filter((t) => t[type]);
                            return abilities.length ? (
                              <div key={key}>
                                <p className="tips">{scope}</p>
                                {
                                  abilities.map((t) => {
                                    return (
                                      <p key={t.key} className="ability-item flex-start v-align-start mb12">
                                        <Icon className="check-mark" type="duigou" color />
                                        <span className="flex-1 ability-name">{t.name}</span>
                                      </p>
                                    );
                                  })
                                }
                              </div>
                            ) : null;
                          })
                        }
                      </div>
                    ) : null
                  }
                </div>
              );
            })
          }
        </div>
        {
          !isMobile ? (
            <>
              <div className="spec-list pb20">
                <Table
                  columns={specColumns}
                  dataSource={specData}
                  pagination={false}
                />
              </div>
              <div ref={wrapRef as unknown as React.RefObject<HTMLDivElement>} className="abilities-list">
                <div hidden={!showFixedHeader} className="fixed-header">
                  <div className="flex-box">
                    {
                      versionColumns.map((item) => {
                        return (
                          <div className="pa16" style={{ width: item.width }} key={item.dataIndex}>
                            {item.title}
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <Table
                  defaultExpandAllRows
                  dataSource={abilitiesTree}
                  columns={versionColumns}
                  rowClassName={(r) => {
                    if (r.children) {
                      return 'level-root';
                    } else {
                      return 'level-child';
                    }
                  }}
                  expandIcon={({ expandable, expanded, onExpand, record }) => {
                    return expandable ? (
                      <Icon
                        className={'pr4 expanded-icon'}
                        type={expanded ? 'down' : 'right'}
                        onClick={(e: React.MouseEvent<HTMLElement>) => onExpand(record, e)}
                      />
                    ) : <i className="pr4" />;
                  }}
                  pagination={false}
                />
              </div>
            </>
          ) : null
        }
      </PageContent>
    </div>
  );
};

export default Price;
