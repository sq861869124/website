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
import { Modal, Form, Input, message, Spin } from 'antd';
import axios, { AxiosResponse } from 'axios';
import i18n from '~/i18n';
import { getFormFieldsValue } from 'common/utils';

const FormItem = Form.Item;

interface IProps {
  visible: boolean;
  apiPublishId: string;
  onCancel: () => void;
  afterSummit: () => void;
}

interface IAuthInfo {
  type: string;
  config: {
    header: string;
  };
}

const AuthModal = ({ visible, onCancel, apiPublishId, afterSummit }: IProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const [authType, setAuthType] = React.useState('');
  const [authKey, setAuthkey] = React.useState('');
  const key = `api-market-${apiPublishId}`;
  const handleCancel = () => {
    onCancel();
  };

  React.useEffect(() => {
    if (visible) {
      const IAuthInfoStr = sessionStorage.getItem(key);
      if (IAuthInfoStr) {
        const auth = JSON.parse(IAuthInfoStr || '{}');
        setAuthkey(auth.authKey);
        setAuthType(auth.authType);
        form.setFieldsValue({ value: auth.value });
      } else {
        getIAuthInfo();
      }
    }
  }, [visible]);

  const getIAuthInfo = () => {
    setLoading(true);
    axios.get(`/api/gateway/publications/${apiPublishId}/authn`).then((res: AxiosResponse<IResponse<IAuthInfo>>) => {
      const { success, data, err } = res.data;
      if (success) {
        const { header = 'X-API-Key' } = data.config || {};
        setAuthkey(header);
        setAuthType(data.type || 'KeyAuth');
      } else {
        message.error(err.msg);
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };

  const handleAuth = async () => {
    const { error, data } = await getFormFieldsValue<{value: string}>(form);
    if (error) {
      return;
    }
    sessionStorage.setItem(key, JSON.stringify({ ...data, authKey, authType }));
    afterSummit && afterSummit();
    handleCancel();
  };
  return (
    <Modal
      visible={visible}
      title={i18n.t('call authentication')}
      width={440}
      destroyOnClose
      onCancel={handleCancel}
      onOk={handleAuth}

    >
      <Spin spinning={loading}>
        <FormItem
          label={i18n.t('certification description')}
        >
          <p>API requires authorization. Enter your credentials to make calls to this API.</p>
        </FormItem>
        <FormItem
          label={i18n.t('type of certification')}
        >
          <p>{authType}</p>
        </FormItem>
        <FormItem
          label="Key"
        >
          <p>{authKey}</p>
        </FormItem>
        <FormItem
          label="Value"
          name="value"
          rules={[{
            required: true, message: i18n.t('please enter'),
          }]}
        >
          <Input placeholder={i18n.t('please enter')} />,
        </FormItem>
      </Spin>
    </Modal>
  );
};
export default AuthModal;
