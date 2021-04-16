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

import React, { useState, useEffect, Fragment, memo } from 'react';
import { isEmpty, find, cloneDeep } from 'lodash';
import { Input } from 'antd';
import i18n from '~/i18n';
import { Icon as CustomIcon } from 'common';
import './index.scss';

interface IKeyValProps {
  data: Array<{
    required: boolean;
    error?: boolean;
    [key: string]: any;
  }>;
  type: string;
  dataModel?: object;
  itemMap: any[];
  opList?: any[];
  onChange: (...args: any) => any;
}

const KeyValueEdit = (props: IKeyValProps) => {
  const { data, type, dataModel, itemMap, onChange } = props;
  const [values, setValues] = useState(data || []);
  useEffect(() => {
    let newVal: any = [];
    if (isEmpty(data)) {
      newVal = dataModel ? [{ ...dataModel }] : [];
    } else if (find(data, dataModel)) {
      newVal = data;
    } else {
      newVal = dataModel ? [...data, { ...dataModel }] : data;
    }
    setValues(newVal);
  }, [data]);
  const updateValue = (index: number, key: string, value: string, autoSave = false) => {
    const newValues = cloneDeep(values);
    const { required } = newValues[index];
    newValues[index][key] = value.trim();
    if (required && value.trim() === '') {
      newValues[index].error = true;
    } else {
      newValues[index].error = false;
    }
    setValues(newValues);
    onChange(type, newValues.filter((item: any) => item.key), autoSave, () => {});
  };
  if (values.length === 0) {
    return (
      <div className="key-value-edit">
        <p className="no-params">
          {i18n.t('no current request')}{type}
        </p>
      </div>
    );
  }
  const handleDelete = (index: number) => {
    const newValues = cloneDeep(values).filter((_item: any, i) => i !== index);
    setValues(newValues);
    onChange(type, newValues.filter((item: any) => item.key), false, () => {});
  };
  return (
    <div className="key-value-edit">
      {
        values.map((item, index) => {
          return (
            <div className="key-value-edit-item" key={index}>
              {
                (itemMap || []).map((t, i) => {
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  const { type, props: compProps, render, getProps } = t;
                  const comprops = {
                    ...compProps,
                    value: item[type],
                    onChange: (val: string, autoSave: boolean) => {
                      updateValue(index, type, val, autoSave);
                    },
                  };
                  const { className = '', ...extraProps } = getProps ? getProps(item) : {};
                  return (
                    <Fragment key={i}>
                      {
                        render ? render(comprops) : <Input
                          className={`flex-1 ${className}`}
                          {...comprops}
                          onChange={(e) => {
                            updateValue(index, type, e.target.value);
                          }}
                          {...extraProps}
                        />
                      }
                      <div className="key-value-edit-item-separate" />
                    </Fragment>
                  );
                })
              }
              <div hidden={!item.editKey} className="key-value-edit-item-operation">
                {
                  item.editKey && index + 1 !== values.length ? <CustomIcon type="sc1" onClick={() => { handleDelete(index); }} /> : null
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default memo(KeyValueEdit);
