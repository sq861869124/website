import { map, isEmpty, cloneDeep } from 'lodash';
import * as React from 'react';
import { Collapse, Input, Select, Button, Tooltip, Row, Col, Spin } from 'antd';
import { mock } from 'mock-json-schema';
import { Copy, EmptyHolder } from '~/common';
import SwaggerParser from 'swagger-parser';
import './swagger-ui.scss';

const { Panel } = Collapse;
const { Option } = Select;
const SwaggerUI = ({ data, canTest }: any) => {
  const [apiData, setApiData] = React.useState(data);
  const { paths, tags, basePath } = apiData;
  const [filterKey, setFilterKey] = React.useState('');
  const [filtered, setFiltered] = React.useState({});
  const [expandKey, setExpandKey] = React.useState('');
  const [parsing, toggleParsing] = React.useState(true);
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    SwaggerParser.dereference(data, {}, (err: any, api: any) => {
      toggleParsing(false);
      if (!err) {
        setApiData(cloneDeep(api));
      }
    });
  }, [data]);
  const fullingUrl = (path: string) => {
    let url = path;
    if (basePath && basePath !== '' && basePath !== '/') {
      url = basePath + path;
    }
    return url;
  };
  let [tagMap, apiMap] = React.useMemo(() => {
    const _tagMap = {};
    const _apiMap = {};
    let firstList: any;
    map((tags || []), (tag: any) => {
      _tagMap[tag.name] = [];
      firstList = firstList || _tagMap[tag.name];
    });
    map(paths, (methodMap, path) => {
      const _path = fullingUrl(path);
      map(methodMap, (api, method) => {
        const item = {
          _method: method,
          _path,
          ...api,
        };
        map((api.tags || ['OTHER']), tagName => {
          if (_tagMap[tagName]) {
            _tagMap[tagName].push(item);
          }else {
            _tagMap[tagName] = [];
            _tagMap[tagName].push(item);
            firstList = firstList || _tagMap[tagName];
          }
        });
        _apiMap[method + _path] = item;
      });
    });
    setFiltered(_tagMap);
    const first = (firstList || [])[0];
    setExpandKey(Object.keys(_tagMap)[0]);
    if (first) {
      setActive(first._method + first._path);
    }
    return [_tagMap, _apiMap];
  }, [tags, paths]);


  const filterApi = (v: string) => {
    const newTagMap = {};
    setFilterKey(v);
    const key = v.toLowerCase();
    map(tagMap, (apiList: any[], tagName: string) => {
      const list = apiList.filter((api: any) => {
        return api._path.toLowerCase().includes(key) || (api.summary || '').toLowerCase().includes(key);
      });
      if (list.length) {
        newTagMap[tagName] = list;
      }
    });
    setFiltered(newTagMap);
    setExpandKey(Object.keys(newTagMap)[0]);
  };


  const List = React.useMemo(() => {
    if (isEmpty(filtered)) {
      return (
        <div className="empty-wrapper">
          <EmptyHolder relative tip="没有匹配结果" />
        </div>
      );
    }

    return (
      <Collapse
        className="api-group-list"
        accordion
        bordered={false}
        activeKey={expandKey}
        onChange={(k: any) => setExpandKey(k)}
      >
        {
          map(filtered, (apiList: any[], tagName: string) => {
            return (
              <Panel header={tagName} key={tagName}>
                <ul className="api-group">
                  {map(apiList, (api: any) => {
                    const { _method, _path, summary } = api;
                    const key = _method + _path;
                    return (
                      <Tooltip key={key} title={_path} placement="right">
                        <li onClick={() => setActive(key)} className={active === key ? 'active' : ''}>
                          <div className="method-wrapper">
                            <div className={`api-method ${_method}`}>{_method.toUpperCase()}</div>
                          </div>
                          <div className="api-summary nowrap">
                            {summary || _path}
                          </div>
                        </li>
                      </Tooltip>
                    );
                  })}
                </ul>
              </Panel>
            );
          })
        }
      </Collapse>
    );
  }, [filtered, expandKey, filterKey, active]);

  const Detail = React.useMemo(() => {
    if (!active) {
      return null;
    }
    const api = apiMap[active];
    if (isEmpty(api)) {
      return  null;
    }
    const key = api._method + api._path;
    return (
      <div key={key} id={key} className="api-detail-item">
        <div className="api-title">
          <span className={`api-method ${api._method}`}>{api._method.toUpperCase()}</span>
          <span className="api-path"><Copy>{api._path}</Copy></span>
          <span className="api-desc nowrap">
            <Tooltip title={api.description}>
              {api.description}
            </Tooltip>
          </span>
        </div>
        <div className="api-section-title">Parameters</div>
        <div className="mb32">
          {
            isEmpty(api.parameters) && (
              <div className="api-section api-param">
                No parameters
                </div>
            )
          }
          {
            map(api.parameters, param => {
              const subType = param.items ? `[${param.items.type}]` : null;
              const mockData = param.schema ? mock(param.schema) : null;
              const mockJson = JSON.stringify(mockData, null, 2);
              return (
                <div key={key + param.name} className="api-section api-param">
                  <Row type="flex" justify="space-between" align="top">
                    <Col span={6}>
                      <div className="key">
                        {param.name}&nbsp;
                          {param.required ? <span className="param-required">*</span> : null}
                      </div>
                      <div className="param-type">{param.type || 'object'}{param.format ? `(${param.format})` : null}{subType}</div>
                      <div className="param-position">({param.in})</div>
                    </Col>
                    <Col span={18}>
                      <div className="param-desc">{param.description}</div>
                      {
                        isEmpty(api.consumes) ? null
                          : (
                            <div className="lh">
                              <Select style={{ width: '240px' }} defaultValue={api.consumes[0]}>
                                {
                                  map(api.consumes, consume => <Option key={consume} value={consume}>{consume}</Option>)
                                }
                              </Select>
                              {mockData && (
                                <div className="mock-wrap">
                                  <Button ghost className="json-copy-btn" shape="circle" icon="copy" data-clipboard-text={mockJson} />
                                  <pre className="api-mock-data">
                                    {mockJson}
                                  </pre>
                                </div>
                              )}
                            </div>
                          )
                      }
                    </Col>
                  </Row>
                </div>
              );
            })
          }
        </div>
        <div className="api-section-title">Responses</div>
        <div className="mb32">
          {
            map(api.responses, (resp, code) => {
              const mockData = resp.schema ? mock(resp.schema) : null;
              const mockJson = JSON.stringify(mockData, null, 2);
              return (
                <div key={code} className="api-section api-resp">
                  <Row type="flex" justify="space-between" align="top">
                    <Col span={6}>
                      <div className="key">
                        {code}
                      </div>
                    </Col>
                    <Col span={18}>
                      <div>{resp.description}</div>
                      {mockData && (
                        <div className="mock-wrap">
                          <Button ghost className="json-copy-btn" shape="circle" icon="copy" data-clipboard-text={mockJson} />
                          <pre className="api-mock-data">
                            {mockJson}
                          </pre>
                        </div>
                      )}
                    </Col>
                  </Row>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }, [apiMap, active, canTest]);

  if (!data) {
    return null;
  }

  if (parsing) {
    return (
      <Spin size="large" spinning tip="解析中，请稍后..."><div className="loading-holder"></div></Spin>
    );
  }

  return (
    <div className="swagger-ui api-doc">
      <Copy selector=".json-copy-btn" />
      <Row gutter={24} type="flex">
        <Col span={7}>
          <div className="api-list">
            <div className="api-search pa8">
              <Input placeholder="按路径或描述搜索" onChange={e => filterApi(e.target.value)} />
            </div>
            {List}
          </div>
        </Col>
        <Col span={17}>
          <div className="api-detail">
            {Detail}
          </div>
        </Col>
      </Row>
    </div>
  );
};


export default SwaggerUI;
