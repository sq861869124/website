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

import React, { useState, useEffect, Fragment } from 'react';
import { get, map, isEmpty, values } from 'lodash';
import { Col, Row, Tooltip } from 'antd';
import './index.scss';

interface IExpandItem {
  properties: Object;
  type: string;
  title: string;
  items: {
    properties: Object;
    title: string;
  };
}

const rootBodyPath = {
  title: 'Request Body',
  name: 'Request Body',
  params: 'root',
  type: 'object',
  key: 0,
  data: {},
};

const noExpandTypes = [
  'array[string]',
  'array[number]',
  'array[boolean]',
  'null',
];

const RenderBody = ({ root, properties = {}, dataType: dTtpe }: {root: string; properties?: {[key: string]: any}; dataType: string}) => {
  const [bodyPath, setBodyPath] = useState([{
    ...rootBodyPath,
    title: root || rootBodyPath.title,
    name: root || rootBodyPath.name,
  }]);
  const [bodyData, setBodyData] = useState({});
  const [dataType, setDataType] = useState('object');
  useEffect(() => {
    setBodyData(properties);
    setDataType(dataType);
  }, [properties, dTtpe]);
  const expand = (params: string, Item: IExpandItem) => {
    const { properties, type, title, items, description, ...rest } = Item;
    const rsetParmas = get(values(rest), '[0].properties');
    const { type: paramsType } = generatorType(params, { type, items });
    if (noExpandTypes.includes(paramsType)) {
      return;
    }
    // const data = JSON.parse(stringifyPro(type === 'array' ? items.properties : properties || rsetParmas, 2));
    const data = type === 'array' ? items.properties : properties || rsetParmas;
    setDataType(type);
    setBodyData(data);
    setBodyPath([...bodyPath, {
      title: params,
      name: type === 'array' ? params : title,
      params,
      type,
      key: bodyPath.length,
      data,
    }]);
  };
  const generatorType = (params: string, item: {type: string; items: Record<string, any>; [k: string]: any}) => {
    const { type, items = {}, enum: enums = [], properties, description, ...rest } = item;
    const rsetParmas = get(values(rest), '[0].properties') || {};
    let typeStr = type;
    let allowExpand = true;
    if (type === 'array') {
      allowExpand = !bodyPath.some((t) => t.data === items.properties);
      if (items.title) {
        typeStr = items.title;
      } else {
        const s = items.type;
        typeStr = s ? `array[${s}]` : 'array';
        if (!items.properties) {
          allowExpand = false;
        }
      }
      // if (isString (items.properties) && items.properties.indexOf('Circular reference') !== -1) {
      //   typeStr = 'null';
      // }
    } else if (type === 'object') {
      typeStr = params;
      allowExpand = !isEmpty(properties || rsetParmas);
    }
    if (enums.length) {
      typeStr = `enum: ${JSON.stringify(enums)}`;
    }
    return { type: typeStr, allowExpand };
  };
  const renderBody = (properties: any = {}) => {
    return map(properties, (paramsProps, params) => {
      let paramsType = paramsProps.type;
      let showExpand = true;
      if (['object', 'array'].includes(paramsProps.type)) {
        const { type, allowExpand } = paramsType = generatorType(params, paramsProps);
        paramsType = type; showExpand = allowExpand;
      }
      return (
        <Row key={params} className="params-row bb mb4 ml20">
          <Col span={6}>
            <div className="param-key nowrap">
              {params}
            </div>
          </Col>
          <Col span={6}>
            <div className="param-type nowrap">
              {
                ['object', 'array'].includes(paramsProps.type) && showExpand ? (
                  <span
                    className={`mb12 nowrap ${noExpandTypes.includes(paramsType) ? '' : 'highlight '}`}
                    onClick={() => {
                      expand(params, paramsProps);
                    }}
                  >
                    {paramsType}
                  </span>
                ) : paramsType
              }
            </div>
          </Col>
          <Col span={12}>
            <Tooltip title={paramsProps.description} placement="topLeft">
              <div className="param-description nowrap">
                {paramsProps.description || ''}
              </div>
            </Tooltip>
          </Col>
        </Row>
      );
    });
  };

  const changeRoute = ({ key, type, data }: {key: number; type: string; data: any}, jump: boolean) => {
    if (!jump) {
      return;
    }
    const mewpath = bodyPath.filter((item) => item.key <= key);
    const a = mewpath.map((t) => t.params);
    a.shift();
    let k = a.join('.properties.');
    if (type === 'array') {
      k += '.items';
    }
    const propertie = key === 0 ? properties : data;
    setDataType(type);
    setBodyPath(mewpath);
    setBodyData(propertie);
  };

  const renderBodyPath = () => {
    return bodyPath.map((item, index) => {
      return (
        <Fragment key={index}>
          <span
            className="highlight mb12 nowrap"
            key={item.params}
            onClick={() => {
              changeRoute(item, index !== bodyPath.length - 1);
            }}
          >{item.title}
          </span>
          {
            index === bodyPath.length - 1 ? null : <span className="separator">/</span>
          }
        </Fragment>
      );
    });
  };

  return (
    <>
      <div className="api-router">
        {
          renderBodyPath()
        }
      </div>
      {
        dataType ? <p className="tips">if type is: {dataType}</p> : null
      }
      {renderBody(bodyData)}
    </>
  );
};
export default RenderBody;
