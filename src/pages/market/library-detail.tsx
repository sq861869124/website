import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { FileContainer, Icon as CustomIcon, PageSection } from 'common';
import { get, isEmpty, keyBy, map } from 'lodash';
import './library-detail.scss';


const Detail = ({ data }: { data: any }) => {
  const versions = Object.keys(data);
  const [ activeVersion, setActiveVersion ] = React.useState('');
  React.useEffect(() => {
    if (versions) {
      const firstActive = versions[0];
      firstActive && setActiveVersion(firstActive);
    }
  }, [ data ]);
  const curVersion = data[activeVersion] || {};
  return (
    <div className="library-versions">
      <div className="detail-version mb32">
        <div className="title-text">版本</div>
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
      <div className="version-info">
        <div className="version-info-left">
          <div className="version-readme">
            <div className="title-text">详情</div>
            {curVersion.readme && <FileContainer content={curVersion.readme}/>}
          </div>
        </div>
      </div>
    </div>
  );
};


const LibraryDetail = ({ match }: any) => {
  const [ loading, setLoading ] = useState(false);
  const [ list, setList ] = useState([] as any[]);
  const [ baseInfo, setBaseInfo ] = useState({ name: '', desc: '', logo: '' });
  const baseData = get(list, '[0]') || {} as any;
  let versionMap = {} as any;
  if (list && list.length) {
    versionMap = keyBy(list, 'version');
  }
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/publish-items/${match.params.publishItemId}/distribution`)
      .then((response: any) => {
        const { success, data } = response.data;
        if (success) {
          const { default: defaultVersion, versions = {} } = data;
          let tempList = versions.list || [];
          if (defaultVersion) {
            tempList.unshift(defaultVersion);
          }
          setList(tempList);
          setBaseInfo({
            name: data.name,
            desc: data.desc,
            logo: data.logo
          });
        }
        setLoading(false);

      })
      .catch(() => {
        setLoading(false);
      });
  }, [ match.params.publishItemId ]);
  return (
    <div className="library-detail">
      <Spin spinning={loading}>

        <div className="title-container">
          <PageSection space={0} width={1200} className="title-section full-width-header mb0">
            <div className="library-detail-title-bg">
            </div>
          </PageSection>
          <div className="title-content">
            {
              baseData.logo
                ? <img className="library-logo mb4" src={baseData.logo} alt="library-logo"/>
                : <CustomIcon className="library-logo mb4" type="yf"/>
            }

            <div className="library-name mb8">{baseInfo.name}</div>
            <div className="library-desc">{baseInfo.desc}</div>
          </div>
        </div>
        <PageSection className="library-info-wrap" space={40} width={1200}>
          {
            isEmpty(versionMap) ? <div/> : <Detail data={versionMap}/>
          }
        </PageSection>
      </Spin>
    </div>
  );
};

export default withRouter(LibraryDetail);

