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
import { withRouter } from 'react-router-dom';
import { Tab } from './components/tab';
import { IF, EmptyHolder } from '~/common';
import { throttle } from 'lodash';
import { ServiceCardList } from './components/service-card';
import { ServiceList, IPublishItemCard } from './components/service-list';
import { LoadMore } from '~/common/components/load-more';
import { CategoryList } from './components/category-list';
import { goTo, handleError } from '~/common/utils';
import { NotFound } from 'layout/common/error-page';
import { useSiteEnv } from '~/models/env';
import { Spin } from 'antd';
import axios from 'axios';


import './market.scss';

const toEn = {
  扩展服务: 'addon',
  流水线任务: 'action',
  库: 'library',
  移动应用: 'mobile',
};

const toCh = {
  addon: '扩展服务',
  action: '流水线任务',
  library: '库',
  mobile: '移动应用',
};

const tabList = [
  {
    name: '扩展服务',
    key: 'addon',
    icon: 'dsj',
  },
  {
    name: '流水线任务',
    key: 'action',
    icon: 'fwcj',
  },
  {
    name: '库',
    key: 'library',
    icon: 'k2x',
  }, {
    name: '移动应用',
    key: 'mobile',
    icon: 'ydyy2x',
  },
];


let initPageNo = 1;

const ServiceMarket = ({ match }: any) => {
  const routeType = match.params.type || tabList[0].key;
  const [pageYOffset, setPageYOffset] = React.useState(window.pageYOffset);
  const [isloading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({});
  const [publishItems, setPublishItems] = React.useState([] as IPublishItemCard[]);
  const [hasMore, setHasmore] = React.useState(false);
  const types = Object.keys(data || {});
  const [activeTab, setActiveTab] = React.useState(routeType || toEn[types[0]]);
  const [, setHeader] = useSiteEnv();
  const getExtensionList = () => {
    if (Object.keys(data).includes(toCh[activeTab])) {
      return;
    }
    setIsLoading(true);
    axios
      .get('/api/extensions?menu=true')
      .then((response: any) => {
        const body = response.data;
        if (body.success) {
          setData(body.data || {});
        } else {
          handleError(body.err || {});
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const getPublishItems = (type: 'LIBRARY' | 'MOBILE' | 'API', pageSize: number, pageNo: number) => {
    setIsLoading(true);
    return axios
      .get('/api/publish-items', {
        params: {
          public: true,
          type,
          pageSize,
          pageNo,
        },
      })
      .then((response: any) => {
        const body = response.data;
        if (body.success) {
          const { list, total } = body.data as {list: IPublishItemCard[]; total: number};
          setPublishItems((prevState: IPublishItemCard[]) => {
            const tempList = [...prevState, ...list];
            setHasmore(tempList.length < total);
            return tempList;
          });
        } else {
          handleError(body.err || {});
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    if (['addon', 'action'].includes(activeTab)) {
      getExtensionList();
    } else {
      const type = activeTab.toUpperCase();
      setPublishItems([]);
      initPageNo = 1;
      getPublishItems(type, 10, initPageNo);
    }
  }, [activeTab]);

  const load = () => {
    const type = activeTab.toUpperCase();
    initPageNo++;
    return getPublishItems(type, 10, initPageNo);
  };

  React.useEffect(() => {
    // 初始化category获焦
    const curType = match.params.type;
    const cData = data[toCh[curType]] || {};
    const _categorys = Object.keys(cData) || [];
    setActiveCategory(_categorys[0]);
  }, [data]);

  const operateScrollEvent = (isRemove?: boolean) => {
    !isRemove
      ? window.addEventListener('scroll', debounceCheck)
      : window.removeEventListener('scroll', debounceCheck);
  };
  React.useEffect(() => {
    operateScrollEvent();
    return () => {
      operateScrollEvent(true);
    };
  }, []);

  const debounceCheck = React.useCallback(
    throttle(() => {
      setPageYOffset(window.pageYOffset);
    }, 100),
    [],
  );

  React.useEffect(() => {
    setActiveTab(match.params.type || tabList[0].key);
  }, [match.params.type]);

  const handleClick = React.useCallback(({ type, id }: IPublishItemCard) => {
    if (type === 'MOBILE') {
      goTo(`/download/${id}`, { jumpOut: true });
    } else {
      goTo(`/library/${id}`);
    }
  }, []);

  const curData = data[toCh[activeTab]] || {};
  let detail = <NotFound />;
  const isAddonAction = ['addon', 'action'].includes(activeTab);
  const categoryRefMap = {};
  let subTypes = [] as string[];
  if (isAddonAction) {
    if (Array.isArray(curData)) {
      detail = <ServiceCardList className="mb32" list={curData} />;
    } else {
      subTypes = Object.keys(curData || {});
      detail = (
        <div className="detail">
          {subTypes.map((subType: string) => {
            categoryRefMap[subType] = React.createRef();
            const subList = (curData[subType] || []).map((a: any) => {
              return { type: activeTab, ...a };
            });
            return (
              <React.Fragment key={subType}>
                <div
                  className="service-category-title"
                  ref={categoryRefMap[subType]}
                >
                  {subType}
                </div>
                {subList.length ? (
                  <ServiceCardList list={subList} />
                ) : (
                  <EmptyHolder relative />
                )}
              </React.Fragment>
            );
          })}
        </div>
      );
    }
  } else {
    if (activeTab === 'api') {
      subTypes = ['其他'];
      categoryRefMap['其他'] = React.createRef();
    }
    detail = (
      <div className="detail">
        {
          activeTab === 'api' ? <div className="service-category-title" ref={categoryRefMap['其他']}>其他</div> : null
        }
        {
          publishItems.length ? <ServiceList list={publishItems} onClick={handleClick} /> : <EmptyHolder relative />
        }
      </div>
    );
  }

  const clickTab = (tabKey: string) => {
    setActiveTab(tabKey);
    goTo(`/market/${tabKey}`);
  };

  const prevPosition = React.useRef(0);
  const [activeCategory, setActiveCategory] = React.useState(subTypes[0]);
  const clickCategory = (k: string) => {
    setActiveCategory(k);
    // const clickDom = e.currentTarget;
    const scrollDom = categoryRefMap[k].current;
    const yCoordinate =
      scrollDom.getBoundingClientRect().top + window.pageYOffset;
    const direction = prevPosition.current >= yCoordinate ? 'up' : 'down';
    // 向上时有两个header，向下时只有一个
    const yOffset = direction === 'up' ? 80 + 56 : 56;
    prevPosition.current = yCoordinate;

    window.scrollTo({
      top: yCoordinate - yOffset, // prevent header cover
      behavior: 'smooth',
    });
  };
  let cls = '';
  if (pageYOffset >= 255) {
    setHeader({
      headerShadow: false,
    });
    cls = 'fixed-with-head';
  } else {
    setHeader({
      headerShadow: true,
    });
  }
  cls += isAddonAction ? '' : activeTab !== 'api' ? ' no-margin-left' : '';


  return (
    <div className="erda-market">
      <Spin spinning={isloading}>
        <div className={`market gray-bg vh-70 ${cls}`}>
          <div className="full-width-header v-flex-box">
            <p className="title">服务市场</p>
            <p className="title-desc mt16 fz16">为您的应用开发提供所需的微服务、中间件服务、业务插件能力、流水线任务、大数据任务等能力</p>
          </div>
          <Tab list={tabList} activeKey={activeTab} onClick={clickTab} />
          <div className="market-content">
            <IF check={subTypes.length}>
              <CategoryList
                list={subTypes}
                activeKey={activeCategory}
                onClick={clickCategory}
              />
            </IF>
            {detail}
          </div>
          {
            isAddonAction ? null : <LoadMore isLoading={isloading} hasMore={hasMore} load={load} />
          }
        </div>
      </Spin>
    </div>
  );
};

export default withRouter(ServiceMarket);
