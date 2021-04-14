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
import caseStore from '~/models/case';
import { Button } from 'antd';
import { get } from 'lodash';
import { goTo } from 'common/utils';
import { useLoading } from 'common/utils/use-loading';
import { EmptyHolder } from 'common';
import i18n from '~/i18n';
import './index.scss';

const CustomerCase = () => {
  const [active, setActive] = React.useState(-1);
  const [nav, caseList, hasMore, currentPageNo, products] = caseStore.useStore((s) => [s.nav, s.caseList, s.hasMore, s.currentPageNo, s.products]);
  const { getNavList, getCaseList } = caseStore.effects;
  const loading = useLoading(caseStore, ['getNavList', 'getCaseList']);
  const isLoading = loading.some((l) => l);
  const industry: CASE.NavItemChild[] = get(nav, [1, 'data'], []);

  React.useEffect(() => {
    getNavList({ id: 1 });
  }, []);

  const handleClick = (id: number) => {
    setActive(id);
    getCaseList({
      site: { id: 1 },
      pageNo: 1,
      products,
      pageSize: 10,
      industries: id === -1 ? undefined : [{ id }],
    });
  };

  const handleLoadMore = () => {
    getCaseList({
      site: { id: 1 },
      pageNo: currentPageNo + 1,
      products,
      pageSize: 10,
    });
  };

  return (
    <div className="erda-customer-case pt0">
      <div className="full-width-header  v-flex-box">
        <div className="title">{i18n.t('success case')}</div>
        <p className="title-desc px20">{i18n.t('covered 100+ large and medium-sized head enterprises')}</p>
      </div>
      <PageContent className="case-body">
        <div className="nav-wrapper flex-box">
          <div className="nav-items flex-box">
            <p
              className={`px12 mb4 item py4 ${active === -1 ? 'active' : ''}`}
              onClick={() => {
                handleClick(-1);
              }}
            >{i18n.t('all')}
            </p>
            {
              industry.map((item) => {
                return (
                  <p
                    onClick={() => {
                      handleClick(item.id);
                    }}
                    key={item.id}
                    className={`px12 mb4 item py4 ${active === item.id ? 'active' : ''}`}
                  >
                    {item.name}
                  </p>
                );
              })
            }
          </div>
        </div>
        <div className="article-wrap">
          {
            caseList.length === 0 ? <EmptyHolder relative /> : null
          }
          {
            caseList.map((item: CASE.ListItem) => {
              const { exampleData } = item;
              const { coverMaterial, customerName, desc, title } = exampleData;
              return (
                <div onClick={() => (goTo(`./customer-case/${item.id}`))} key={item.id} className="flex-box flex-start v-align-start article-item">
                  <div className="article-item-left mr40" style={{ backgroundImage: `url(${coverMaterial})` }} />
                  <div className="article-item-right flex-1 pr40 pt4">
                    <p className="name mb20">{customerName}</p>
                    <p className="title mb8">{title}</p>
                    <p className="desc">{desc}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
        {
          hasMore ? <Button loading={isLoading} className="load-more" onClick={handleLoadMore}>{i18n.t('view more cases')}</Button> : null
        }
      </PageContent>
    </div>
  );
};

export default CustomerCase;
