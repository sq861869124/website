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
import { Radio, Select, Input, Button } from 'antd';
import { map, isString } from 'lodash';
import i18n from '~/i18n';
import KeyValueEdit from 'pages/market/components/key-val-edit';
import FileEditor from 'pages/market/components/file-editor';
import { formatJSON } from 'common/utils';
import './index.scss';

const { Option } = Select;
const BODY_RAW_OPTION = [
  'Text',
  'Text(text/plain)',
  'JSON(application/json)',
];
const BasicForm = 'application/x-www-form-urlencoded';
const ValMap = {
  none: () => (
    <div className="body-val-none">{i18n.t('the current request has no body')}</div>
  ),
  [BasicForm]: (props: any) => {
    const { data, updateBody }: any = props;
    return (
      <KeyValueEdit
        type="body"
        data={isString(data.content) ? [] : data.content as any}
        dataModel={{
          editKey: true,
          key: '',
          value: '',
          desc: '',
        }}
        onChange={(_key, value, autoSave) => {
          updateBody('content', value, autoSave);
        }}
        itemMap={[{
          type: 'key',
          props: {
            placeholder: i18n.t('parameter name'),
          },
          getProps: ({ editKey }: {editKey: boolean}) => {
            return {
              disabled: !editKey,
            };
          },
        }, {
          type: 'value',
          props: {
            placeholder: i18n.t('parameter value'),
          },
        }, {
          type: 'desc',
          props: {
            placeholder: i18n.t('description'),
          },
        }]}
      />
    );
  },
  raw: (props: any) => {
    const { data, updateBody }: any = props;
    const val = isString(data.content) ? data.content : '';
    return <Input.TextArea rows={4} value={val} onChange={(e) => updateBody('content', e.target.value)} />;
  },
  'JSON(application/json)': (props: any) => <TestJsonEditor {...props} />,
};

const TestJsonEditor = (props: any) => {
  const { data, updateBody }: any = props;
  const val = isString(data.content) ? `${data.content}` : '';
  const [content, setContent] = React.useState('');
  React.useEffect(() => {
    setContent(val);
  }, [val]);

  return (
    <div className="test-json-editor">
      <Button className="json-format-btn" size="small" onClick={() => { setContent(formatJSON(content)); }}>{i18n.t('format')}</Button>
      <FileEditor
        fileExtension="json"
        value={content}
        minLines={8}
        maxLines={20}
        onChange={(value: string) => updateBody('content', value)}
        onLoad={(editor) => {
          editor.getSession().setUseWorker(false);
        }}
      />
    </div>
  );
};

const APIBody = (props: any) => {
  const { data = {}, onChange } = props;
  const isRaw = !['none', BasicForm].includes(data.type);
  const realType = data.type;

  const updateBody = (key: string, val: any, autoSave?: boolean) => {
    const newBody: any = { ...data, [key]: val || '' };
    if (key === 'content' && data.isAdd) {
      switch (realType) {
        case 'none':
          newBody.content = undefined;
          break;
        case BasicForm:
          break;
        case 'Text':
        case 'Text(text/plain)':
          newBody.content = val;
          break;
        case 'JSON(application/json)':
          newBody.content = val;
          break;
        default:
      }
    } else if (key === 'type') {
      newBody.content = '';
    }
    onChange('body', newBody, autoSave, () => {});
  };

  const changeType = (type: string, autoSave?: boolean) => {
    // 如果切换为raw类型，使用raw的第一个选项
    updateBody('type', type === 'raw' ? BODY_RAW_OPTION[0] : type, autoSave);
  };

  const CurValueComp = ValMap[realType] || ValMap.raw;
  return (
    <div className="case-api-body">
      <div className="body-type-chosen mb8 px12">
        <Radio.Group onChange={(e) => changeType(e.target.value)} value={isRaw ? 'raw' : realType} disabled={!data.isAdd}>
          <Radio value={'none'}>none</Radio>
          <Radio value={BasicForm}>x-www-form-urlencoded</Radio>
          <Radio value={'raw'}>raw</Radio>
        </Radio.Group>
        {
          isRaw ? (
            <Select
              disabled={!data.isAdd}
              size="small"
              style={{ minWidth: 120 }}
              onChange={(t: string) => changeType(t, true)}
              value={realType}
              dropdownMatchSelectWidth={false}
            >
              {map(BODY_RAW_OPTION, (item) => (
                <Option key={item} value={item}>{item}</Option>
              ))}
            </Select>
          ) : null
        }
      </div>
      <div className="body-value-container">
        {CurValueComp && <CurValueComp data={data} updateBody={updateBody} />}
      </div>
    </div>
  );
};

export default APIBody;
