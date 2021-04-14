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

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { PageSection, IF, FileContainer, Icon as CustomIcon } from 'common';
import { enlargeImg, handleError, useMobile } from 'common/utils';
import { Button, Tabs, List, Tooltip, Spin } from 'antd';
import axios from 'axios';
import i18n from '~/i18n';
import { get, keyBy, isEmpty, map } from 'lodash';
import SwaggerUI from './swagger-ui';

import './service-detail.scss';

interface IProps {
  match: any;
}

const { TabPane } = Tabs;
const { Item: ListItem } = List;

const planCnMap = {
  basic: i18n.t('basic edition'),
  professional: i18n.t('professional edition'),
  ultimate: i18n.t('ultimate edition'),
};

const Plan = ({ data, version }: { data: any; version: string }) => {
  const [activePlan, setActivePlan] = React.useState('');
  React.useEffect(() => {
    if (!isEmpty(data)) {
      const firstPlan = Object.keys(data)[0];
      setActivePlan(firstPlan);
    }
  }, [data]);
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="version-plans" key={version}>
      <div className="title-text">{i18n.t('specification')}</div>
      <div className="detail-plan-tabs">
        <Tabs activeKey={activePlan} onChange={(actKey: string) => setActivePlan(actKey)}>
          {
            map(data, (p: any, k: string) => {
              const offerings = map(p.offerings, (str) => ({ enable: true, str }));
              return (
                <TabPane tab={planCnMap[k] || i18n.t('other')} key={k} >
                  <List
                    size="small"
                    dataSource={offerings}
                    renderItem={(item: any) => (<ListItem className={item.enable ? '' : 'disable-offer-item'}>{item.str}{item.enable ? <CustomIcon type="check" /> : null}</ListItem>)}
                  />
                </TabPane>
              );
            })
          }
        </Tabs>
      </div>
    </div>
  );
};

const Detail = ({ data }: { data: any }) => {
  const versions = Object.keys(data);
  const [activeVersion, setActiveVersion] = React.useState('');
  React.useEffect(() => {
    if (versions) {
      const firstActive = versions[0];
      firstActive && setActiveVersion(firstActive);
    }
  }, [data]);
  const curVersion = data[activeVersion] || {};
  const curSpec = curVersion.spec;

  const verDetail = (
    <div className="version-info">
      <div className="version-info-left">
        {!isEmpty(curSpec && curSpec.plan) ? <Plan data={curSpec.plan} version={activeVersion} /> : null}
        <div className="version-readme">
          <div className="title-text">{i18n.t('details')}</div>
          {curVersion.readme && <FileContainer content={curVersion.readme} />}
        </div>
      </div>
      <div className="version-info-right">
        <div className="version-category">
          <div className="title-text">{i18n.t('category')}</div>
          <Tooltip title={curSpec && curSpec.category}>
            <div className="sub-text nowrap">{curSpec && curSpec.category}</div>
          </Tooltip>
        </div>

        <div className="version-shares">
          <div className="title-text">{i18n.t('share details')}</div>
          {map(get(curVersion, 'spec.requires'), (v: string) => (
            <div className="shares-item" key={v}>
              <CustomIcon type={v ? 'check' : 'gb'} />
              <Tooltip title={v}>
                <div className="sub-text nowrap">{v}</div>
              </Tooltip>
            </div>
          ))}
        </div>
        <div className="version-configvars">
          <div className="title-text">{i18n.t('configuration parameter')}</div>
          <div className="version-config-container">
            {map(get(curVersion, 'spec.configVars') || [], (v: string) => (
              <Tooltip key={v} title={v}>
                <div className="sub-text nowrap" >{v}</div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="service-versions">
      <div className="detail-version mb32">
        <div className="title-text">{i18n.t('version')}</div>
        <div>
          {
            map(versions, ((v: string) => {
              return (
                <Button className={`version-button mt8 mr16 ${activeVersion === v ? 'active' : ''}`} size="small" key={v} onClick={() => setActiveVersion(v)}>{v}</Button>
              );
            }))
          }
        </div>
      </div>
      {
        curVersion.swagger ? (
          <Tabs type="card">
            <TabPane tab={i18n.t('interface documentation')} key="api-doc">
              <SwaggerUI data={curVersion.swagger} />
            </TabPane>
            <TabPane tab={i18n.t('version details')} key="version-doc">
              {verDetail}
            </TabPane>
          </Tabs>
        ) : verDetail
      }
    </div >
  );
};

const ServiceDetail = (props: IProps) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const isMobile = useMobile();
  React.useEffect(() => {
    const { serviceName } = props.match.params;
    setLoading(true);
    axios.get(`/api/extensions/${serviceName}`).then((response: any) => {
      const body = response.data;
      setLoading(false);
      if (body.success) {
        setData(body.data || []);
      } else {
        handleError(body.err || {});
      }
    });
  }, []);
  const baseData = get(data, '[0]') || {} as any;

  const baseInfo = baseData.spec || {};
  const { type } = baseData;
  let versionMap = {} as any;
  if (data && data.length) {
    versionMap = keyBy(data, 'version');
  }
  const versions = Object.keys(versionMap);

  if (loading) {
    return (
      <Spin spinning tip={i18n.t('Loading...')}>
        <div className="gray-bg loading-holder" />
      </Spin>
    );
  }
  // const hasImg = baseInfo && baseInfo.imageUrls && baseInfo.imageUrls.length > 0;

  return (
    <div className="service-detail">
      <div className="title-container gray-bg">
        <PageSection space={0} width={1200} className="title-section mb0 full-width-header">
          <div className="service-detail-title-bg" />
        </PageSection>
        <div className="title-content">
          {
            baseInfo.iconUrl
              ? <img className="service-logo mb4" src={baseInfo.iconUrl} alt="service-logo" />
              : <CustomIcon className="service-logo mb4" type="yf" />
          }

          <div className="service-name mb8">{baseInfo.displayName}</div>
          <div className="service-desc">{baseInfo.desc}</div>
          <IF check={baseInfo.imageUrls && baseInfo.imageUrls.length}>
            <div className="service-img-container">
              <div className="img-list">
                {baseInfo && baseInfo.imageUrls && baseInfo.imageUrls.map((img: string, i: number) => {
                  let imgSrc = img.replace('http:', '');
                  imgSrc = imgSrc.replace('https:', '');
                  return (
                    <div className="img-ct inline-flex-box" key={i} onClick={(e) => { enlargeImg(e, isMobile); }}>
                      <img className="full-width full-height" key={i} src={imgSrc} alt="service-snapshot" />
                    </div>
                  );
                })}
              </div>
            </div>
          </IF>
        </div>
      </div>
      <PageSection className="service-info-wrap" space={40} width={1200}>
        <div className="service-info">
          <IF check={type === 'action'}>
            <FileContainer content={versions[0] && versionMap[versions[0]].readme} name="readme.md" />
          </IF>
          <IF check={type === 'addon'}>
            {
              !isEmpty(versionMap) ? <Detail data={versionMap} /> : null
            }
          </IF>
        </div>
      </PageSection>
    </div>
  );
};


export default withRouter(ServiceDetail);
